var express = require("express");
var app = express();
var num = require("numeral");

var carPrice = 12000;


app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "OPTIONS,HEAD,GET,PUT");
  next();
});

app.get("/retrieve", function (req, res){
  console.log("Returning current price: " + num(carPrice).format('0,0')); 
  res.send(num);
});

app.get("/add", function(req, res){
    carPrice +=250;
    confirmCarPriceChange(res); 
   
});

app.get("/subtract", function(req, res){

  carPrice -= 250; //Subtract 250 from the car price
    confirmCarPriceChange(res); //Calls a function and passes it the response object
});
  app.listen(3000, function () { //Listen to the port 3000, so that when we go to the server address on port 3,000, we send what is requested.
  console.log("Example app listening on port 3000!");
});
    
  function confirmCarPriceChange(res)
{
  console.log("Adjusted car price"); //Prints to the terminal that you are adjusting the price
  res.send(num); //Sends the text in the parentheses to the page requesting whichever path the function is under
}