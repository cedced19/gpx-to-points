# gpx-to-points
A module to convert gpx files to a list of point

[![Build Status](https://travis-ci.org/cedced19/gpx-to-points.svg?branch=master)](https://travis-ci.org/cedced19/gpx-to-points)

## Usage
```javascript
var GPXtoPoints = require('gpx-to-points');
GPXtoPoints(path, function (err, data) {
    if (err) console.err(err);
    console.log(data)
});
```
where `data` is an array of objects, and `err` is the error.