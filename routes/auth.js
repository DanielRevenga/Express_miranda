var express = require('express');
var router = express.Router();

/* GET users listing. */
router.post("login", (req, res) => {
   console.log(req.body);
});
router.post("register", (req, res) => {
   console.log(req.body);
});
router.post("user", (req, res) => {
   console.log(req.body);
});

module.exports = router;
