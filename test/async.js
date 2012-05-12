var test = require('tap').test;
var ben = require('../');

test('async', function (t) {
    var test = function (fn) {
        setTimeout(fn, 10);
    };
    
    t.plan(2);
    ben.async(100, test, function (ms) {
      console.log(ms);
        t.ok(ms >= 10);
        t.ok(ms < 12);
        t.end();
    });
});
