import 'appkit/utils/ajax' as ajax;

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
      weatherData: ajax('/weather'),
      imageData: ajax('/image')
    };

    return Ember.RSVP.hash(promises);
  }
});
