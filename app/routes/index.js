/*global ajax*/
import ajax from 'appkit/utils/ajax';

import { getData } from 'appkit/utils/get-data';
import fakeData from 'appkit/utils/fake-data';
import { currentWeatherUrl, weatherForecastUrl, imageApiUrl } from 'appkit/utils/api-url-lookup';


export default Ember.Route.extend({
  model: function () {
    return Ember.RSVP.hash({
      weatherData: getData(currentWeatherUrl, fakeData.currentWeather),
      weatherForcastData: getData(currentWeatherUrl, fakeData.weatherForcastData),
      imageData: getData(imageApiUrl, fakeData.imageData)
    });
  }
});
