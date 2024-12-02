require("dotenv").config();
const path = require("path");
const express = require("express");
const app = express();

app.use(express.static(path.join(__dirname, "..", "public")));
app.use(require("./routes"));

app.listen(process.env.PORT, () => console.log("Server Running."));

module.exports = app;
