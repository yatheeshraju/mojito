require("dotenv").config();
const express = require("express");
const fs = require("fs");
const app = express();
const port = process.env.PORT;

app.get("/:request", (req, res) => {
  const request = req.params.request;
  const file = `./api/${request}.js`;
  res.send(fs.readFileSync(file, "utf8"));
});

app.post("/:request", (req, res) => {
  const request = req.params.request;
  const file = `./api/${request}.js`;
  res.send(fs.readFileSync(file, "utf8"));
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
