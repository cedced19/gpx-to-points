const fs = require('fs');
const parseString = require('xml2js').parseString;

module.exports = function (path, cb) {
    var points = [];
    fs.readFile(path, 'utf8', function (err, data) {
        if (err) return cb(err);
        parseString(data, function (err, result) {
            if (err) return cb(err);
            if (result.gpx.hasOwnProperty('trk')) {
                result.gpx.trk.forEach(function (trk) {
                    trk.trkseg.forEach(function (trkseg) {
                        trkseg.trkpt.forEach(function (trkpt) {
                            points.push({ latitude: Number(trkpt['$'].lat), longitude: Number(trkpt['$'].lon) });
                        });
                    });
                });
                cb(null, points)
            } else if (result.gpx.hasOwnProperty('rte')) {
                result.gpx.rte.forEach(function (rte) {
                    rte.rtept.forEach(function (rtept) {
                        points.push({ latitude: Number(rtept['$'].lat), longitude: Number(rtept['$'].lon) });
                    });
                });
                cb(null, points);
            } else {
                let err = new Error('This GPX is not valid')
                cb(err);
            }
        });
    })
}