var request = require('request');
var apiUrlLookup = require('./api-url-lookup');
var fs = require('fs');

var path = require('path');

module.exports = function(app) {

	app.get('/weather-current', function (req, res) {
		request.get(apiUrlLookup.weatherCurrentUrl).pipe(res);
		// TODO: read a 'recording' of data stored in a file instead of directly from
		// service. Update recording every 24 hours based on fs.stat modified timestamp
	});

  app.get('/weather-forecast', function (req, res) {
    request.get(apiUrlLookup.weatherForecastUrl).pipe(res);
  });

  app.get('/image-api', function (req, res) {
    request.get(apiUrlLookup.imageApiUrl).pipe(res);
  });

};