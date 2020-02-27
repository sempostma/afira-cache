"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sec = 'sec';
exports.min = 'min';
exports.hour = 'hour';
exports.default = (function (duration) {
    if (duration < 60) {
        return { unit: exports.sec, value: Math.round(duration) };
    }
    duration /= 60;
    if (duration < 60) {
        return { unit: exports.hour, value: Math.round(duration) };
    }
    duration /= 24;
    if (Math.round(duration) === 1)
        return { unit: exports.hour, value: 1 };
    return { unit: exports.hour, value: Math.round(duration) };
});
