[![build status](https://secure.travis-ci.org/substack/node-ben.png)](http://travis-ci.org/substack/node-ben)
ben
===

Benchmark synchronous and asynchronous snippets simply.

![ben the big](http://substack.net/images/ben.png)

examples
========

synchronous
-----------

````javascript
var ben = require('ben');

var ms = ben(function () {
    JSON.parse('[1,2,3]')
});

console.log(ms + ' milliseconds per iteration');
````

output:

    0.0024 milliseconds per iteration

asynchronous
------------

````javascript
var ben = require('ben');

var test = function (done) {
    setTimeout(done, 10);
};

ben.async(test, function (ms) {
    console.log(ms + ' milliseconds per iteration');
});
````

output:

    10.39 milliseconds per iteration

methods
=======

ben(times=10000, testFn)
------------------------

Return how many milliseconds it takes to execute `testFn`.

`testFn` will be executed `times` many times.

alias: ben.sync()

ben.async(times=100, testFn, cb)
--------------------------------

Compute how many milliseconds it takes to complete the asynchronous function
`testFn`. `testFn(done)` will be called with a `done` callback to move along to
the next iteration.

After `testFn` is run `times` many times, `cb` will be called with the number of
milliseconds on average that `testFn` took to finish.

install
=======

With [npm](http://npmjs.org), do:

    npm install ben
