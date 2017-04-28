var express = require('express')
var app = express()

app.use(express.static('public'))

app.get('/', function (req, res) {
  res.send('Hello World!')
})

var port     = process.env.NODE_PORT || 4000;
var host     = process.env.NODE_IP;

if(host) {
	http.listen(port, host, () => {
        logger.info("The magic happens on  " + host + ":" + port);
	});
} else {
	http.listen(port, () => {
        logger.info("The magic happens on:" + port);
	});
}

app.listen(8000, function () {
  console.log('Example app listening on port 3000!')
})