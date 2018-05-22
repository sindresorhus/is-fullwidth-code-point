/* eslint-disable yoda */
'use strict';

module.exports = x => {
	if (Number.isNaN ? Number.isNaN(x) : x !== x) {
		return false;
	}

	// Code points are derived from:
	// http://www.unix.org/Public/UNIDATA/EastAsianWidth.txt
	if (
		x >= 0x1100 && (
			x <= 0x115F || // Hangul Jamo
			x === 0x2329 || // LEFT-POINTING ANGLE BRACKET
			x === 0x232A || // RIGHT-POINTING ANGLE BRACKET
			// CJK Radicals Supplement .. Enclosed CJK Letters and Months
			(0x2E80 <= x && x <= 0x3247 && x !== 0x303F) ||
			// Enclosed CJK Letters and Months .. CJK Unified Ideographs Extension A
			(0x3250 <= x && x <= 0x4DBF) ||
			// CJK Unified Ideographs .. Yi Radicals
			(0x4E00 <= x && x <= 0xA4C6) ||
			// Hangul Jamo Extended-A
			(0xA960 <= x && x <= 0xA97C) ||
			// Hangul Syllables
			(0xAC00 <= x && x <= 0xD7A3) ||
			// CJK Compatibility Ideographs
			(0xF900 <= x && x <= 0xFAFF) ||
			// Vertical Forms
			(0xFE10 <= x && x <= 0xFE19) ||
			// CJK Compatibility Forms .. Small Form Variants
			(0xFE30 <= x && x <= 0xFE6B) ||
			// Halfwidth and Fullwidth Forms
			(0xFF01 <= x && x <= 0xFF60) ||
			(0xFFE0 <= x && x <= 0xFFE6) ||
			// Kana Supplement
			(0x1B000 <= x && x <= 0x1B001) ||
			// Enclosed Ideographic Supplement
			(0x1F200 <= x && x <= 0x1F251) ||
			// CJK Unified Ideographs Extension B .. Tertiary Ideographic Plane
			(0x20000 <= x && x <= 0x3FFFD)
		)
	) {
		return true;
	}

	return false;
};
