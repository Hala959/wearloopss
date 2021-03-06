require("dotenv").config();

const router = require("express").Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

let User = require("../models/user.model");
let isLoggedIn = require("../config/config");

router.get("/", (req, res) => {
  res.status(200).json({ message: "Hello, World!" });
});

router.post("/signup", async (req, res) => {
  try {
    let { username, password, phone } = req.body;
    let user = await new User({ email, password });
    await user.save();
    user.password = "";

    const payload = {
      user,
    };

    jwt.sign(
      payload,
      process.env.SECRET,
      { expiresIn: 36000000 },
      (error, token) => {
        if (error) throw error;
        res.json({ token }).status(201);
      }
    );
  } catch (error) {
    if (error.code == 11000)
      res.status(409).json({ message: "Email Exists!!" });
    // 409 conflict
    else res.status(500).json(error);
  }
});

router.post("/login", async (req, res) => {
  try {
    let user = await User.findOne({ username: req.body.username });
    console.log(user);
    if (!user) throw { message: "Username doesn't exists" };

    const checkPass = await user.verifyPassword(req.body.password);
    if (!checkPass) {
      res.status(401).json({ message: "Password Incorrect!" });
    } else {
      user["password"] = "";
      const payload = {
        user,
      };

      jwt.sign(
        payload,
        process.env.SECRET,
        { expiresIn: 36000000 },
        (error, token) => {
          if (error) throw error;
          res.json({ token }).status(200);
        }
      );
    }
  } catch (error) {
    res.status(401).json(error);
  }
});

router.post("/ChangePassword", isLoggedIn, async (req, res) => {
  try {
    let { _id, oldpassword, newpassword } = req.body;
    let user = await User.findById(_id);
    if (!user) throw { message: "username id doesn't exists" };

    const checkPass = await user.verifyPassword(oldpassword);
    if (!checkPass) {
      res.status(401).json({ message: "Password Incorrect!" });
    } else {
      bcrypt.hash(newpassword, 10, async (err, pass) => {
        if (err)
          res.status(500).json({ message: "Couldn't update the password" });

        let user = await User.findByIdAndUpdate(_id, {
          $set: { password: pass },
        });
        user.password = "";
        res.status(200).json({ user, message: "Updated !!" });
      });
    }
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get("/user", isLoggedIn, async (req, res) => {
  // console.log(req.user);

  try {
    let user = await User.findById(req.user._id, "-password");

    if (!user) throw error;

    res.status(200).json({ user });
  } catch (error) {
    res.status(500).json({ message: "something went wrong!" });
  }
  //
});

module.exports = router;
