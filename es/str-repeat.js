"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (function (str, n) {
    if (n === 0)
        return '';
    n = n || 1;
    return Array(n + 1).join(str);
});
