require("dotenv").config();

const router = require("express").Router();

let User = require("../models/user.model");
let Item =require("../models/Item.model");

let isLoggedIn =require("../config/config");
router.get("/api/profile/:id",async (req,res)=>{

try {

let user=await User.findById(req.param.id).populate("Item");
if (!user) throw {message: "somthing want south"};
res.status(200).json(user);
} catch (error){

 res.status(500).json(error);
  }
});

router.get("/api/search/:search", async (req, res) => {
    try {
      let Item = await Item.find({
        title: { $regex: req.params.search, $options: "i" },
      }).populate("user");
      if (Item.length == 0)
        throw { message: "couldn't find any item " };
      // console.log(projects.length)
      res.status(200).json(projects);
    } catch (error) {
      res.json(error);
    }
  });
  
  module.exports = router;
  