require("dotenv").config();
const path = require("path");
const express = require("express");
const app = express();

app.use(express.static(path.join(__dirname, "static")));

app.get("/", (req, res) => res.send("Express on Vercel"));

app.listen(process.env.PORT, () => console.log("Server ready on port 3000."));

module.exports = app;
