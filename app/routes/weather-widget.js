export default Ember.Route.extend({
  model: function () {
    return this.store.find('weatherWidget', 1);
  }
});