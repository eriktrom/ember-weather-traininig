/*global ajax*/
import ajax from 'appkit/utils/ajax';
import apiKeys from 'appkit/utils/api-keys';
import fakeWeatherData from 'appkit/utils/fake-weather-data';

var FAKEWEATHERSERVER = true;

function getWeatherData() {
  if (FAKEWEATHERSERVER) { return fakeWeatherData; }

  return new Ember.RSVP.Promise(function (resolve, reject) {
    Ember.$.ajax({
      url : 'http://api.wunderground.com/api/' + apiKeys.wunderground + '/geolookup/conditions/q/WA/Seattle.json',
      dataType : "jsonp",
      success : function(parsed_json) {
        resolve(parsed_json);
      }
    });
  });
}

ajax.defineFixture('/weather', {
  response: 'some weather data',
  jqXHR: {},
  textStatus: 'success'
});

ajax.defineFixture('/image', {
  response: 'some image data',
  jqXHR: {},
  textStatus: 'success'
});


export default Ember.Route.extend({
  model: function () {
    var promises = {
      weatherData: getWeatherData(),
      imageData: ajax('/image')
    };

    return Ember.RSVP.hash(promises);
  }
});
