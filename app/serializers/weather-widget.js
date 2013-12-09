export default DS.JSONSerializer.extend({
  extract: function (store, type, payload) {

    var originalResponse = payload.response;
    window.console.log("payload is %o", originalResponse);

    var currentInfo = originalResponse.current_observation;

    var newResponse = {
      id: 1,
      temp: currentInfo.temperature_string,
      prettyDate: currentInfo.observation_time,
      weatherIcon: currentInfo.icon_url,
      windSpeed: currentInfo.wind_mph + 'mph'
    };

    window.console.log("payload is %o", newResponse);
    return newResponse;
  }
});