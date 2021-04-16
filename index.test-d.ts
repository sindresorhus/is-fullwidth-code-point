import {expectType} from 'tsd';
import isFullwidthCodePoint from './index.js';

expectType<boolean>(isFullwidthCodePoint('谢'.codePointAt(0)!));
