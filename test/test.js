var assert = require('assert');
var GPXtoPoints = require('../');
var path = require('path');

describe('Test the function', function () {
    
    it('should be no error', function (done) {
        GPXtoPoints(path.join(__dirname, '../example.gpx'), function(err, data) {
            assert.equal(err, null);
            done();
        });
    });
    it('should have 230 items', function (done) {
        GPXtoPoints(path.join(__dirname, '../example.gpx'), function(err, data) {
            assert.equal(data.length, 230);
            done();
        });
    });
});