function getJSON(something) {
  console.log("something is: ", something);
  return new Ember.RSVP.Promise(function (resolve, reject) {
    if (something == 'weather.json') {
      setTimeout(function () {
        console.log('from inside weather.json option')
        resolve('some weather data');
      }, 2000);
    }

    if (something == 'image.json') {
      setTimeout(function () {
        resolve('some image data');
      }, 500);
    }
  });
}


export default Ember.Route.extend({
  model: function () {

    var promises = {
      weatherData: getJSON('weather.json'),
      imageData: getJSON('image.json')
    };

    return Ember.RSVP.hash(promises);
  }
});
