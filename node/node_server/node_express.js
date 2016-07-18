var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.get('/goodbye', function (req, res) {
  res.send('Goodbye World!');
});
app.get('/Doggy', function (req, res) {
	var responseText ="";
	responseText += "did you know? I have a cat";
	responseText += "<img src='https://www.gstatic.com/images/branding/googlelogo/2x/googlelogo_color_284x96dp.png'>";
  res.send(responseText);

});
	console.log('I just told them how awosome the doggy is');



app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});