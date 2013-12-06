/*global ajax*/
import ajax from 'appkit/utils/ajax';
import apiKeys from 'appkit/utils/api-keys';
import fakeWeatherData from 'appkit/utils/fake-weather-data';

var FAKEWEATHERSERVER = true;
var currentWeatherUrl = 'http://api.wunderground.com/api/' +
                        apiKeys.wunderground +
                        '/geolookup/conditions/q/WA/Seattle.json';

function getCurrentWeatherData() {
  // TODO: use local storage to keep a incrementing counter, every 15 reloads,
  // get real data, aka, set this to false, for a sanity check
  // OR
  // stub out use sinon
  // OR
  // ...
  if (FAKEWEATHERSERVER) { return fakeWeatherData; }

  return new Ember.RSVP.Promise(function (resolve, reject) {

    var settings = {
      url : currentWeatherUrl,
      dataType : "jsonp",
      success: function(parsed_json) {
        Ember.run(null, resolve(parsed_json));
      },
      error: function (error_thrown) {
        Ember.run(null, reject(error_thrown));
      }
    };

    Ember.$.ajax(settings);
  });
}

// function getForecastData() {
//   if (FAKEWEATHERSERVER) { return fakeWeatherData; }

//   return new Ember.RSVP.Promise(function (resolve, reject) {
//     Ember.$.ajax({
//       url : 'http://api.wunderground.com/api/' + apiKeys.wunderground + '/geolookup/conditions/q/WA/Seattle.json',
//       dataType : "jsonp",
//       success : function(parsed_json) {
//         resolve(parsed_json);
//       }
//     });
//   });
// }

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
      weatherData: getCurrentWeatherData(),
      // weatherForcastData: getForecastData(),
      imageData: ajax('/image')
    };

    return Ember.RSVP.hash(promises);
  }
});
