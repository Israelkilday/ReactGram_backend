const express = require("express");
const router = express.Router();

// controler 
const {register} = require("../controllers/UserController");    

// routes
router.post("/register", register);

module.exports = router;