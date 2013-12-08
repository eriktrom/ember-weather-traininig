/*global ajax*/
import ajax from 'appkit/utils/ajax';

import { getData } from 'appkit/utils/get-data';
import fakeData from 'appkit/utils/fake-data';
import apiUrlLookup from 'appkit/utils/api-url-lookup';

var weatherCurrentUrl = apiUrlLookup(true).weatherCurrentUrl;
var weatherForecastUrl = apiUrlLookup(true).weatherForecastUrl;
var imageApiUrl = apiUrlLookup(true).imageApiUrl;

console.log('weatherCurrentUrl is:', weatherCurrentUrl);

export default Ember.Route.extend({
  model: function () {
    return Ember.RSVP.hash({
      weatherData: getData(weatherCurrentUrl, fakeData.currentWeather),
      weatherForcastData: getData(weatherForecastUrl, fakeData.weatherForcastData),
      imageData: getData(imageApiUrl, fakeData.imageData)
    });
  }
});

// export default Ember.Route.extend({
//   model: function () {
//     return Ember.RSVP.hash({
//       weatherData: ajax(weatherCurrentUrl),
//       weatherForcastData: ajax(weatherForecastUrl),
//       imageData: ajax(imageApiUrl)
//     });
//   }
// });