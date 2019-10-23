const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const path = require("path");
const fs = require("fs");
const port = process.env.PORT || 3001;

app.use(express.static(path.join(__dirname, "build")));
app.use(bodyParser.json());

app.get("/studios", (req, res) => {
  //API logic
  let studioRAW = fs.readFileSync("db.json");
  let studio = JSON.parse(studioRAW);
  console.log(studio);
  res.send(studio);
});

app.post("/api/postRequest", (req, res) => {
  //API logic
});
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "build/index.html"));
});
app.listen(port, () => {
  console.log("Listening on port", port);
});
