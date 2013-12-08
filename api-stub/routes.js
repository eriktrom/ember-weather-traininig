/*globals require*/
var fakeData = require('./fake-data');

var weatherCurrentUrl = require('./api-url-lookup').weatherCurrentUrl;
var weatherForecastUrl = require('./api-url-lookup').weatherForecastUrl;
var imageApiUrl = require('./api-url-lookup').imageApiUrl;

module.exports = function(server) {

  // Create an API namespace, so that the root does not
  // have to be repeated for each end point.

  server.get(weatherCurrentUrl, function (req, res) {
    res.send(fakeData.currentWeather);
  });

  server.get(weatherForecastUrl, function (req, res) {
    res.send(fakeData.forecastWeather);
  });

  server.get(imageData, function (req, res) {
    res.send(fakeData.imageData);
  });

	// server.namespace('/api', function() {

	// 	// Return fixture data for '/api/posts/:id'
	// 	server.get('/posts/:id', function(req, res) {
	// 		var post = {
	// 				  "post": {
	// 				    "id": 1,
	// 				    "title": "Rails is omakase",
	// 				    "comments": ["1", "2"],
	// 				    "user" : "dhh"
	// 				  },

	// 				  "comments": [{
	// 				    "id": "1",
	// 				    "body": "Rails is unagi"
	// 				  }, {
	// 				    "id": "2",
	// 				    "body": "Omakase O_o"
	// 				  }]
	// 				};

	// 		res.send(post);
	// 	});

	// });

};