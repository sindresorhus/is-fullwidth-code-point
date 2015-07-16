'use strict';
var test = require('ava');
var codePointAt = require('code-point-at');
var fn = require('./');

test(function (t) {
	t.assert(fn(codePointAt('あ')));
	t.assert(fn(codePointAt('谢')));
	t.assert(fn(codePointAt('고')));
	t.assert(fn(0x1f251));
	t.assert(!fn(codePointAt('a')));
	t.end();
});
