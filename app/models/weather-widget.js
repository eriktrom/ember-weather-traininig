export default DS.Model.extend({
  temp: DS.attr('string'),
  prettyData: DS.attr('string'),
  weatherIcon: DS.attr('string'),
  windSpeed: DS.attr('string')
});