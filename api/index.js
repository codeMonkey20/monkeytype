require("dotenv").config();
const path = require("path");
const express = require("express");
const app = express();
const { PATH } = require("./constants");

app.use(express.static(PATH.PUBLIC));
app.use(require("./routes"));
app.listen(process.env.PORT, () => console.log("Server Running."));

module.exports = app;
