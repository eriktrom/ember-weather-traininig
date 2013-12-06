function getJSON(something) {
  console.log("something is: ", something);
  return new Ember.RSVP.Promise(function (resolve, reject) {
    if (something == 'weather.json') {
      Ember.run.later(function () {
        console.log('from inside weather.json option')
        resolve('some weather data');
      }, 2000);

    }

    if (something == 'image.json') {
      Ember.run.later(function () {
        resolve('some image data');
      }, 600);
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
  },

  // actions: {
  //   loading: function () {
  //     // alert('data is being loaded, please wait');
  //     console.log('data is being loaded, please wait');

  //     return false;
  //   }
  // }
});
