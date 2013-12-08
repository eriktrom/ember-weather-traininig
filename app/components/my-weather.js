export default Ember.Component.extend({
  imageApiData: null,
  weatherCurrentData: null,
  weatherForcastData: null,
  currentInfo: Ember.computed.oneWay('weatherCurrentData.current_observation'),

  tagName: 'my-weather',
  attributeBindings: ['style'],

  style: function () {
    // TODO: use background image here, bind to image returned by image
    // data service
    return 'display:block; background: red;';
  }.property(),

  temp: function () {
    return this.get('currentInfo.temperature_string');
  }.property('currentInfo'),

  prettyDate: function () {
    return this.get('currentInfo.observation_time');
  }.property('currentInfo'),

  weatherIcon: function () {
    // TODO: we really want to choose a little weather icon based on the value
    // returned here. Not sure what all the possible values are, probably:
    // - clear
    // - partly-cloudy
    // - cloudy
    // - etc, look it up in wunderground api

    // or the short cheap hack is just to use:
    return this.get('currentInfo.icon_url');
    // return this.get('currentInfo.weather');
  }.property('currentInfo'),

  windSpeed: function () {
    return this.get('currentInfo.wind_mph') + 'mph';
  }.property('currentInfo')

});