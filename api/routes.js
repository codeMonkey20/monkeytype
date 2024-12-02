const express = require("express");
const router = express.Router();
const TestController = require("./controllers/test");

router.get("/testing", TestController.testing);

module.exports = router;
