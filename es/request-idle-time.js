"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (function () { return new Promise(function (resolve, reject) {
    if (typeof window !== 'undefined' && 'requestIdleCallback' in window) {
        window.requestIdleCallback(resolve, { timeout: 1000 });
    }
    else {
        setTimeout(resolve, 0);
    }
}); });
