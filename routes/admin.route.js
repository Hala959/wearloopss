  
const router = require("express").Router();

let User = require("../models/user.model");
let Project = require("../models/Item.model");

let isLoggedIn = require("../config/config");

router.get("/", isLoggedIn, async (req, res) => {
  if (!req.user.isAdmin) {
    res.status(403).json("Not Cool");
  } else {
    try {
      let users = await User.find({});
      let Item = await Project.find({}).populate("user");
      res.status(200).json({ users, Item });
    } catch (error) {
      res.json(error);
    }
  }
});

router.get("/delete/user/:id", isLoggedIn, async (req, res) => {
  if (!req.user.isAdmin) {
    res.status(403).json("Not Cool");
  } else {
    try {
      let user = await User.findById(req.params.id).populate('Item');
      if (!user) throw {message: "couldn't find usere"};

      user.Item.forEach(e => {
        Item.findByIdAndDelete(e._id).then(p => {
          //console.log(p);
        }).catch(e => console.log(e))
      })

      user = await User.findByIdAndDelete(req.params.id);

      res.status(200).json({ user, message: "Deleted!" });
    } catch (error) {
      res.json(error);
    }
  }
});

router.get("/delete/Item/:id", isLoggedIn, async (req, res) => {
  if (!req.user.isAdmin) {
    res.status(403).json("Not Cool");
  } else {
    try {
      let Item = await Item.findByIdAndDelete(req.params.id);
      if (!project) throw { message: "Couldn't find the project" };
      res.status(200).json({ Item });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "something went south check the logs" });
    }
  }
});

router.post("/edit/user/", isLoggedIn, async (req, res) => {
  if (!req.user.isAdmin) {
    res.status(403).json("Not Cool");
  } else {
    try {
      let { _id, isAdmin } = req.body;
      let user = await User.findByIdAndUpdate(_id, {
        $set: { isAdmin },
      });
      res.status(200).json(user);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "something went south check the logs" });
    }
  }
});

router.post("/edit/Item/", isLoggedIn, async (req, res) => {
  if (!req.user.isAdmin) {
    res.status(403).json("Not Cool");
  } else {
    try {
      let { _id, image, Color, Category, description, Brand, price ,City  } = req.body;
      let Item = await Item.findByIdAndUpdate(_id, {
        $set: { image, Color, Category, description, Brand, price ,City },
      });
      res.status(200).json(Item);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "something went south check the logs" });
    }
  }
});

module.exports = router;
