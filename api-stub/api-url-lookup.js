var useFakeData = true;

var apiKeys = require('./api-keys');

module.exports = function (useRealData) {

  // if useRealData flag in passed and is true, change the hosts for our url's
  useFakeData = useRealData ? false : useFakeData;
  var weatherApiHost, imageApiHost;
  if (useFakeData) {
    weatherApiHost = '';
    imageApiHost = '';
  } else {
    weatherApiHost = 'http://api.wunderground.com';
    imageApiHost = 'https://api.500px.com';
  }

  /**
   * GET queries dont require oauth, but both wunderground and 500px do require
   * registered api keys be sent in URL
   */

  // seperate out suffixes for api proxy server, annoying, must be better way
  var currentWeatherSuffix = 'geolookup/conditions/q/WA/Seattle.json';
  var weatherForecasSuffix = 'forecast/q/WA/Seattle.json';

  // TODO: try putting consumer_key in the header
  var imageApiSuffix = '/v1/photos/search';
  // var imageApiSuffix = '/v1/photos/search?term=seattle&consumer_key=' + apiKeys['500px'];

  var weatherApiBaseUrl = weatherApiHost + '/api/' + apiKeys.wunderground + '/';
  // http://api.wunderground.com/api/asdfasdf/geolookup/conditions/q/WA/Seattle.json
  var weatherCurrentUrl = weatherApiBaseUrl + currentWeatherSuffix;
  // http://api.wunderground.com/api/asdfasdf/forecast/q/WA/Seattle.json
  var weatherForecastUrl = weatherApiBaseUrl + weatherForecasSuffix;
  // https://api.500px.com/v1/photos/search?term=seattle?consumer_key=asdfasdf
  var imageApiUrl = imageApiHost + imageApiSuffix;

  return {
    weatherCurrentUrl: weatherCurrentUrl,
    weatherForecastUrl: weatherForecastUrl,
    imageApiUrl: imageApiUrl
  };
};