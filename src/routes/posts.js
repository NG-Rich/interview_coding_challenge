const express = require("express");
const router = express.Router();
const postController = require("../controllers/postController");

router.post("/wall/post/create", postController.create);

module.exports = router;
