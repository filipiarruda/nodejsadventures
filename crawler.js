//My hello world NodeJS
var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
    var request = require("request");
    request({
      uri: 'https://filipiweb.com.br'}, 
      function(error, response, body) {
      console.log('Rodando esta porra');
      let testOnly = body;
      res.end(testOnly); 
    });
  }).listen(8080);
