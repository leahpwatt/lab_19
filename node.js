var http = require("http");
var getQuotes = require("./quotes");

http.createServer(function(request, response) {
	response.writeHead(200, {"Content-type": "text/plain" });
	response.write(getQuotes());
	response.end();
}).listen(8888);