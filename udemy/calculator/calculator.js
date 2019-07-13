const express = require("express");
const bodyParser = require("body-parser");


const app = express();
app.use(bodyParser.urlencoded({extended:true}));

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/index.html");
});



app.post("/", function(req, res) {
  var number1 = Number(req.body.n1);
  var number2 = Number(req.body.n2);

  var result = number1 + number2;

  res.send("The result from the calculation is " + result);
});

app.get("/bmicalculator", function(req, res) {
  res.sendFile(__dirname + "/bmicalculator.html");
});

app.listen(3000, function() {
  console.log("Server started on port 3000");
});
