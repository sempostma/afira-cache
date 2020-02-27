"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var format_duration_labeled_1 = __importDefault(require("./format-duration-labeled"));
exports.default = (function (duration) {
    var labeled = format_duration_labeled_1.default(duration);
    return labeled.value + ' ' + labeled.unit;
});
