"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var request_idle_time_1 = __importDefault(require("./request-idle-time"));
var rembember = {};
exports.default = (function (src) { return new Promise(function (resolve, reject) {
    if (src in rembember)
        return resolve(rembember[src]);
    request_idle_time_1.default().then(function () {
        if (src in rembember)
            return resolve(rembember[src]);
        var imgEle = document.createElement("img");
        imgEle.onload = function () { return resolve(imgEle); };
        imgEle.onerror = reject;
        imgEle.src = src;
        rembember[src] = imgEle;
    }).catch(reject);
}); });
