const express = require("express");
const path = require("path");

const app = express();

app.use(express.static(path.resolve(__dirname, "public")));

app.get("/", (req, res) => {
  res.sendfile("index.html");
});

app.listen(4000, () => {
  console.log("client running on port 4000");
});
