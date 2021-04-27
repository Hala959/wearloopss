require("dotenv").config();

const router = require("express").Router();

let User = require("../models/user.model");
let Project = require("../models/Item.model");

let isLoggedIn = require("../config/config");

router.get("/api/profile/:id", async (req, res) => {
  try {
    let user = await User.findById(req.params.id).populate("Item");
    if (!user) throw { message: "something went south" };

    res.status(200).json(user);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get("/api/search/:search", async (req, res) => {
  try {
    let projects = await Project.find({
      title: { $regex: req.params.search, $options: "i" },
    }).populate("user");
    if (Item.length == 0)
      throw { message: "couldn't find any project with that title" };
    // console.log(projects.length)
    res.status(200).json(Item);
  } catch (error) {
    res.json(error);
  }
});

module.exports = router;