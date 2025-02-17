const express = require("express");
let router = express.Router();
router.get("/",(req,res)=>{
  return res.redirect("https://shoaibakhter.codes/");
})
module.exports = router;