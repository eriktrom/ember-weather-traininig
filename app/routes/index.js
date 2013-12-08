/*global ajax*/
import ajax from 'appkit/utils/ajax';

import { getData } from 'appkit/utils/get-data';
import fakeData from 'appkit/utils/fake-data';
import apiUrlLookup from 'appkit/utils/api-url-lookup';

var weatherCurrentUrl = apiUrlLookup(false).weatherCurrentUrl;
var weatherForecastUrl = apiUrlLookup(false).weatherForecastUrl;
var imageApiUrl = apiUrlLookup(false).imageApiUrl;

// To make this work, remove `.response` inside index.hbs
// export default Ember.Route.extend({
//   model: function () {
//     return Ember.RSVP.hash({
//       weatherCurrentData: getData(weatherCurrentUrl, fakeData.weatherCurrentData),
//       weatherForcastData: getData(weatherForecastUrl, fakeData.weatherForecastData),
//       imageApiData: getData(imageApiUrl, fakeData.imageApiData)
//     });
//   }
// });

export default Ember.Route.extend({
  model: function () {
    return Ember.RSVP.hash({
      weatherCurrentData: ajax(weatherCurrentUrl),
      weatherForcastData: ajax(weatherForecastUrl),
      imageApiData: ajax(imageApiUrl)
    });
  }
});