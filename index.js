/**
 * @license
 * js-data-structures <http://github.com/Tyriar/js-data-structures>
 * Copyright 2015 Daniel Imms <http://www.growingwiththeweb.com>
 * Released under the MIT license <http://github.com/Tyriar/js-data-structures/blob/master/LICENSE>
 */
'use strict';

if (typeof exports === 'object' && typeof define !== 'function') {
    var define = function (factory) {
        factory(require, exports, module);
    };
}

define(function (require, exports, module) {
  module.exports = {
    BinaryHeap: require('./lib/binary-heap'),
    BinarySearchTree: require('./lib/binary-search-tree'),
    BinomialHeap: require('./lib/binomial-heap'),
    FibonacciHeap: require('./lib/fibonacci-heap'),
    SplayTree: require('./lib/splay-tree'),
  };
});
