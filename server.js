var express = require('express')
var app = express()

app.use(express.static('public'))

app.get('/', function (req, res) {
  res.send('Hello World!')
})

var port     = process.env.NODE_PORT || 4000;
var host     = process.env.NODE_IP;

if(host) {
	app.listen(port, host, () => {
        console.log("The magic happens on  " + host + ":" + port);
	});
} else {
	app.listen(port, () => {
        console.log("The magic happens on:" + port);
	});
}
