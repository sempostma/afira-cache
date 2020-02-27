"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (function (regex) {
    return regex.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // $& means the whole matched string
});
