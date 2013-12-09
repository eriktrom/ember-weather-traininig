/*global ajax*/
import ajax from 'appkit/utils/ajax';
var Promise = Ember.RSVP.Promise;

export default DS.Adapter.extend({
  find: function (store, type, id) {
    return new Promise(function (resolve, reject) {
      ajax('/weather-current').then(function (response) {
        resolve(response);
      });
    });
  }
});