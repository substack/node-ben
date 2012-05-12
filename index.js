var microtime = require('microtime');

var ben = module.exports = function (times, cb) {
    if (typeof times === 'function') {
        cb = times;
        times = 10000;
    }

    var t0 = microtime.now();
    for (var i = 0; i < times; i++) {
        cb();
    }
    var elapsed = microtime.now() - t0;

    return elapsed / 1000 / times;
};
ben.sync = ben;

ben.async = function (times, cb, resultCb) {
    if (typeof times === 'function') {
        resultCb = cb;
        cb = times;
        times = 100;
    }

    var pending = times;
    var t = microtime.now();
    var elapsed = 0;

    cb(function fn () {
        elapsed += microtime.now() - t;

        if (--pending === 0) {
            resultCb(elapsed / 1000 / times);
        }
        else {
            t = microtime.now();
            cb(fn);
        }
    });
};
