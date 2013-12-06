export default Ember.Route.extend({
  model: function () {
    // later we'll use this hook to grab weather data from *somewhere*
    // or we'll realize that the index route hook won't allow query params
    // so we'll move this.
    return 'absolutely anything, just to prevent an error. Odd';
  }
});
