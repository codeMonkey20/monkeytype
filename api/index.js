require("dotenv").config();
const path = require("path");
const express = require("express");
const app = express();
const { PATH } = require("./constants");
const cors = require("cors");

app.use(express.static(PATH.PUBLIC));
app.use(require("./router"));
app.listen(process.env.PORT, () => console.log("Server Running."));

module.exports = app;
