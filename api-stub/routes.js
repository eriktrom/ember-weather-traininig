var fakeData = require('./fake-data');

var weatherCurrentUrl = '/weather-current';
var weatherForecastUrl = '/weather-forecast';
var imageApiUrl = '/image-api';

module.exports = function(app) {

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