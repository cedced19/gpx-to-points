const fs = require('fs');
const parseString = require('xml2js').parseString;

module.exports = function (path, cb) {
    var points = [];
    fs.readFile(path, 'utf8', function (err, data) {
        if (err) return cb(err);
        parseString(data, function (err, result) {
            if (err) return cb(err);
            result.gpx.trk.forEach(function (trk) {
                trk.trkseg.forEach(function (trkseg) {
                    trkseg.trkpt.forEach(function (trkpt) {
                        points.push({ latitude: Number(trkpt['$'].lat), longitude: Number(trkpt['$'].lon) });
                    });
                });
            });
            cb(null, points)
        });
    })
}