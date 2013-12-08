var fakeData = require('./fake-data');

var weatherCurrentUrl = require('./api-url-lookup')(false).weatherCurrentUrl;
var weatherForecastUrl = require('./api-url-lookup')(false).weatherForecastUrl;
var imageApiUrl = require('./api-url-lookup')(false).imageApiUrl;

module.exports = function(app) {

  console.log('weatherCurrentUrl is: ', weatherCurrentUrl);
  console.log('weatherForecastUrl is: ', weatherForecastUrl);
  console.log('imageApiUrl is: ', imageApiUrl);

  app.get(weatherCurrentUrl, function (req, res) {
    res.send(fakeData.weatherCurrentData);
  });

  app.get(weatherForecastUrl, function (req, res) {
    res.send(fakeData.weatherForecastData);
  });

  app.get(imageApiUrl, function (req, res) {
    res.send(fakeData.imageApiData);
  });


};