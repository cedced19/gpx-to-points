var assert = require('assert');
var GPXtoPoints = require('../');
var path = require('path');

describe('Test the function', function () {
    
    it('should have 230 items with example n°1', function (done) {
        GPXtoPoints(path.join(__dirname, '../example.gpx'), function(err, data) {
            assert.equal(err, null);
            assert.equal(data.length, 230);
            done();
        });
    });
    it('should have 65 items with example n°2', function (done) {
        GPXtoPoints(path.join(__dirname, '../example2.gpx'), function(err, data) {
            assert.equal(err, null);
            assert.equal(data.length, 65);
            done();
        });
    });
});