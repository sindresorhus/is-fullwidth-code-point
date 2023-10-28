import test from 'ava';
import isFullwidthCodePoint from './index.js';

test('main', t => {
	t.true(isFullwidthCodePoint('あ'.codePointAt(0)));
	t.true(isFullwidthCodePoint('谢'.codePointAt(0)));
	t.true(isFullwidthCodePoint('고'.codePointAt(0)));
	t.false(isFullwidthCodePoint(Number.NaN));
	t.false(isFullwidthCodePoint('a'.codePointAt(0)));
	t.true(isFullwidthCodePoint(0x1_F2_51));
	t.true(isFullwidthCodePoint(0x1_B1_1E));
	t.false(isFullwidthCodePoint(0x20_1D));
});
