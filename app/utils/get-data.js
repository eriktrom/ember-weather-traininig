var useFakeData = true;

/**
 * Simple helper that uses RSVP + Ember run loop to fetch data
 * via jsonp. Perhaps the simplest way to get up and running when
 * fetching data from any random api on the web
 * @param  {String} url          Fully qualified url to data service
 * @param  {Object} fakeData     Canned json compatible response object
 * @param  {Boolean} useRealData When true is passed, the real api will be hit
 *                               for this requrest instead of the canned fake data
 * @return {Thenable}
 */
export function getData(url, fakeData, useRealData) {
  useFakeData = useRealData ? false : useFakeData;
  return new Ember.RSVP.Promise(function (resolve, reject) {
    if (useFakeData) { resolve(fakeData); return void 0; }

    var settings = {
      url: url,
      dataType: "jsonp",
      success: function(parsed_json) {
        Ember.run(null, resolve, parsed_json);
      },
      error: function (error_thrown) {
        Ember.run(null, reject, error_thrown);
      }
    };

    Ember.$.ajax(settings);
  });
}