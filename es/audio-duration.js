"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (function (src) { return new Promise(function (resolve, reject) {
    try {
        var audio_1;
        if (typeof src === 'string')
            audio_1 = new Audio();
        else
            audio_1 = src;
        if (isFinite(audio_1.duration))
            resolve(audio_1.duration);
        else {
            audio_1.addEventListener("loadedmetadata", function () {
                resolve(audio_1.duration);
            });
        }
        if (typeof src === 'string') {
            audio_1.src = src;
            audio_1.preload = "metadata";
        }
    }
    catch (err) {
        reject(err);
    }
}); });
