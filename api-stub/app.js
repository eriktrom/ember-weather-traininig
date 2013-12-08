var fakeData = require('./fake-data');

var weatherCurrentUrl = require('./api-url-lookup')(false).weatherCurrentUrl;
var weatherForecastUrl = require('./api-url-lookup')(false).weatherForecastUrl;
var imageApiUrl = require('./api-url-lookup')(false).imageApiUrl;

var express = require('express');

var app = express();


console.log('weatherCurrentUrl is: ', weatherCurrentUrl);
console.log('weatherForecastUrl is: ', weatherForecastUrl);
console.log('imageApiUrl is: ', imageApiUrl);

app.get(weatherCurrentUrl, function (req, res) {
  res.send(fakeData.weatherCurrent);
});

app.get(weatherForecastUrl, function (req, res) {
  res.send(fakeData.weatherForecast);
});

app.get(imageApiUrl, function (req, res) {
  res.send(fakeData.imageApi);
});

app.listen(5000);