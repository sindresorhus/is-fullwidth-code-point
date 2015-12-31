import test from 'ava';
import codePointAt from 'code-point-at';
import m from './';

test(t => {
	t.true(m(codePointAt('あ')));
	t.true(m(codePointAt('谢')));
	t.true(m(codePointAt('고')));
	t.true(m(0x1f251));
	t.false(m(codePointAt('a')));
});
