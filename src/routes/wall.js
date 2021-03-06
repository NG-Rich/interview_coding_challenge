const express = require("express");
const router = express.Router();
const wallController = require("../controllers/wallController");
const postController = require("../controllers/postController");

router.get("/wall", postController.index, wallController.index);

module.exports = router;
