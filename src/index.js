var http = require("http");
var url = require("url");
var queryString=require('querystring');
var fs = require("fs");
var { info, error } = require("./modules/my-log.js");
var consts = require("./utils/const");
var firebase = require("../libs/firebase");
var { countries } = require("countries-list");

var server = http.createServer(function(request, response) {
  var parsed = url.parse(request.url);
  console.log("Parsed:", parsed);
    var pathName=parsed.pathname;
    var query= queryString.parse(parsed.query);
    console.log("query:", query)
    if (pathName === "/") {
      response.writeHead(200, ("Content-Type", "text/html"));
      response.write("<html><body><p>Home page</p></body></html>");
      response.end();
    } else if (pathName === "/exit") {
      response.writeHead(200, ("Content-Type", "text/html"));
      response.write("<html><body><p>BYE</p></body></html>");
      response.end();
    } else if (pathName === '/info') {
      var result1 = info(pathName)
      response.writeHead(200, ("Content-Type", "text/html"));
      response.write(result1);
      response.end();
    }  else if (pathName === '/country') {
      response.writeHead(200, ("Content-Type", "application/json"));
      response.write(JSON.stringify( countries[query.code]));
      response.end();
    } else if (pathName === "/error") {
      var result = error(request.url);
      response.writeHead(200, ("Content-Type", "text/html"));
      response.write(result);
      response.end();
    } else {
      response.writeHead(404, ("Content-Type", "text/html"));
      response.write("<html><body><p>NOT FOUND</p></body></html>");
      response.end();
    }
});

server.listen(4000);
console.log("runiing on en 4000");
