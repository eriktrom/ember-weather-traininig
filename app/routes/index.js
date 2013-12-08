/*global ajax*/
import ajax from 'appkit/utils/ajax';

import { getData } from 'appkit/utils/get-data';
import fakeData from 'appkit/utils/fake-data';

/**
 * GET queries dont require oauth, but both wunderground and 500px do require
 * registered api keys be sent in URL
 */
import apiKeys from 'appkit/utils/api-keys';

// wunderground url w/ apiKey, will look like:
// http://api.wunderground.com/api/asdfasdf/geolookup/conditions/q/WA/Seattle.json
var weatherApiBaseUrl = 'http://api.wunderground.com/api/' +
                        apiKeys.wunderground + '/';

var currentWeatherUrl = weatherApiBaseUrl +
                        'geolookup/conditions/q/WA/Seattle.json';

var weatherForecastUrl = weatherApiBaseUrl +
                         'forecast/q/WA/Seattle.json';


// 500px url w/ consumer_key query params, will look like:
// https://api.500px.com/v1/photos/search?term=seattle?consumer_key=asdfasdf
var imageApiUrl =
  'https://api.500px.com/v1/photos/search?term=seattle&consumer_key=' +
  apiKeys['500px'];

export default Ember.Route.extend({
  model: function () {
    return Ember.RSVP.hash({
      weatherData: getData(currentWeatherUrl, fakeData.currentWeather),
      weatherForcastData: getData(currentWeatherUrl, fakeData.weatherForcastData),
      imageData: getData(imageApiUrl, fakeData.imageData)
    });
  }
});
