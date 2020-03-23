// import node.js http method (found in node.js api docs)
var http = require('http');
// set url as api url 
var url = 'http://api.openweathermap.org/data/2.5/weather?q=Vancouver,ca&APPID=14236194132770946d48f9b6737400a9&units=metric';
// create server (takes function w/ request + response, every server has this)
var server = http.createServer(function(request, response){
    // All logic will go here
    var request = require('request');
    // request takes url and gives back function that contains
    // first param = error, second param = response, third param = body
    request(url, function(err, res, body) {
        // create data variable and parse JSON
        // can log/debug with console.log(body)
        var data = JSON.parse(body);
        response.write("<html><body><div id = 'container'>");
        response.write("<h1>" + 'City Name - : ' + data['name'] + '<br>' + "</h1>");
        response.write("<h2>" + 'Temperature - : ' + data.main['temp'] + '<br>' + "</h2>");
        response.write("<h2>" + 'Sunset Time - : ' + new Date(data.sys['sunset'] * 1000) + "</h2>");
        response.write("</div></body></html>");
        // need to end response
        response.end();
    });
// server listens to something on this localhost:8081 site
}).listen(8081);