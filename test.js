import test from 'ava';
import m from '.';

test('main', t => {
	t.true(m('あ'.codePointAt(0)));
	t.true(m('谢'.codePointAt(0)));
	t.true(m('고'.codePointAt(0)));
	t.false(m(NaN));
	t.false(m('a'.codePointAt(0)));
	t.true(m(0x1F251));
});
