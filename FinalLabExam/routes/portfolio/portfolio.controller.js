const express = require("express");
let router = express.Router();
router.get("/",(req,res)=>{
  return res.redirect("https://shoaibakhterportfolio.netlify.app/");
})
module.exports = router;