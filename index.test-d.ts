import {expectType} from 'tsd-check';
import isFullwidthCodePoint from '.';

const codePoint = '谢'.codePointAt(0) as number;
expectType<boolean>(isFullwidthCodePoint(codePoint));
