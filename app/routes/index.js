/*global ajax*/
import ajax from 'appkit/utils/ajax';

var weatherCurrentUrl = '/weather-current';
var weatherForecastUrl = '/weather-forecast';
var imageApiUrl = '/image-api';


export default Ember.Route.extend({
  model: function () {
    return Ember.RSVP.hash({
      weatherCurrentData: ajax(weatherCurrentUrl),
      weatherForcastData: ajax(weatherForecastUrl),
      imageApiData: ajax(imageApiUrl)
    });
  }
});