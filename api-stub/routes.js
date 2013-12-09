var request = require('request');
var apiUrlLookup = require('./api-url-lookup');
var fs = require('fs');

var path = require('path');

/**
 * Recording will be saved/read @ api-stub/recordings/name-of-route.json
 */
var recordingsDir = path.join(process.cwd(), 'api-stub/recordings');
function recordingPath (basename) {
  // to name the file the same as your route, pass req.url as basename from inside route
  return recordingsDir + basename + '.json'
}

function ensureFreshRecording(filepath, readstream) {
  // remove readstream arg, used in two functions
  // totally fails when making the very first recording
  var recordingStat = fs.statSync(filepath)
    , recordingModifiedDate = recordingStat.mtime

    if (Date.now() - recordingModifiedDate > 86400) record(filepath, readstream)
}

function record(filepath, readstream) {
  return readstream.pipe(fs.createWriteStream(filepath));
}

module.exports = function(app) {

	app.get('/weather-current', function (req, res) {
    var file = recordingPath(req.url)
    // var rs = request.get(apiUrlLookup.weatherCurrentUrl);

    // ensureFreshRecording(file, rs);

    // fs.createReadStream(file).pipe(res);

    request.get(apiUrlLookup.weatherCurrentUrl).pipe(res);
	});

  app.get('/weather-forecast', function (req, res) {
    request.get(apiUrlLookup.weatherForecastUrl).pipe(res);
  });

  app.get('/image-api', function (req, res) {
    request.get(apiUrlLookup.imageApiUrl).pipe(res);
  });

};