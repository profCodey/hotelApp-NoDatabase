var express = require("express");
var router = express.Router();

let name = "Adeshina";

/* GET users listing. */
router.get("/all", function (req, res, next) {
  res.send("You have sucessfully gotten all users");
});

router.get("/home", (req, res) => {
  return res.render("home", { name: "Adeshina", age: 10, location: "Lagos" });
});

router.get("/contact", (req, res) => {
  return res.render("contact");
});

router.get("/services", (req, res) => {
  return res.render("services");
});

module.exports = router;
