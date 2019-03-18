import {expectType} from 'tsd-check';
import isFullwidthCodePoint from '.';

expectType<boolean>(isFullwidthCodePoint('谢'.codePointAt(0)!));
