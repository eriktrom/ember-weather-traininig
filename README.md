Ember Weather

To use: 
1. Sign up for an api key with [WunderGround Weather Api](http://www.wunderground.com/weather/api/)
2. Sign up for a consumer_key from [500px](http://developers.500px.com/)
3. App uses ember app kit under the hood with a custom proxy that intercepts requests to the aforementioned services. To specify your API key, use the following:
```sh
WUNDERGROUND_KEY=api-key-here FIVEHUNDRED_PX_KEY=consumer_key-here grunt server
```