var App;

module('Acceptances - Index', {
  setup: function(){
    App = startApp();
  },
  teardown: function() {
    Ember.run(App, 'destroy');
  }
});

test('index renders', function(){
  expect(1);

  visit('/').then(function(){
    var title = find('#title');

    equal(title.text(), "What's the Weather?");
  });
});
