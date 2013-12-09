/*global ajax*/
import ajax from 'appkit/utils/ajax';

export default Ember.Route.extend({
  model: function () {
    return Ember.RSVP.hash({
      weatherCurrentData: ajax('/weather-current'),
      weatherForcastData: ajax('/weather-forecast'),
      imageApiData: ajax('/image-api')
    });
  }
});