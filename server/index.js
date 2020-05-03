const express = require("express");

const app = express();

app.get("/block", (req, res) => {
  res.send("Hello");
});

app.get("/unblocked", (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.send("hello");
});

app.options("/preflight", (req, res) => {
  console.log("preflight request came");
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:4000");
  // this request will not make through if we don't allow this header
  res.setHeader("Access-Control-Allow-Headers", "Ping");
  res.status(204).send();
});

app.get("/preflight", (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:4000");
  res.setHeader("Access-Control-Allow-Headers", "Ping");
  res.send("hello");
});

app.get("/cookie", (req, res) => {
  console.log(req.headers);
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:4000");
  res.setHeader("Access-Control-Allow-Credentials", true);
  res.send("hello");
});

app.listen(3000, () => {
  console.log("server running on port 3000");
});
