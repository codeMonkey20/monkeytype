const express = require("express");
const router = express.Router();
const { PATH } = require("./constants");

router.get("/", (req, res) => res.sendFile("index.html", { root: PATH.PAGES }));

module.exports = router;
