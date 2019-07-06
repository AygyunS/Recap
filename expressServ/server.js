const express = require("express");

const app = express();

app.get("/", function(req, res) {
  res.send("<h1>Hello Server</h1>");
});

app.get("/contact", function(req, res) {
  res.send("Contact me at aygyun.salim@gmail.com");
});

app.get("/about", function(req, res) {
  res.send("Hello I'm Aygyun!");
});

app.get("/new", function(req, res) {
  res.send("Hello I'm Aygyun! This is new page...");
});

app.listen(3000, function() {
  console.log("Server started on port 3000");
});
