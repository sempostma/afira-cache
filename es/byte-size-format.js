"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.longNames = ['bytes', 'kilo bytes', 'mega bytes', 'giga bytes', 'terra bytes'];
exports.shortNames = ['bytes', 'kb', 'mb', 'gb', 'tb'];
exports.default = (function (bytes, size) {
    if (size === void 0) { size = 'short'; }
    var names = size === 'long'
        ? exports.longNames
        : exports.shortNames;
    if (bytes <= 0) {
        return '0 ' + names[0];
    }
    var index = Math.min(Math.floor(Math.log(bytes) / Math.log(1024)), names.length);
    var units = Math.round(bytes / Math.pow(1024, index));
    return units + ' ' + names[index];
});
