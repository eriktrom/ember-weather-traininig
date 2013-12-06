export default Ember.Route.extend({
  model: function () {
    // later we'll use this hook to grab weather data from *somewhere*
    // or we'll realize that the index route hook won't allow query params
    // so we'll move this.
    return {
      weatherData: 'some weather data from <some weather api>',
      imageData: 'some data returned by <insert your fav image api here>'
    };
  }
});
