"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var get_1 = __importDefault(require("lodash/get"));
var get_2 = __importDefault(require("lodash/get"));
var errItemToString = function (error) {
    var status = get_1.default(error, 'status');
    var code = get_1.default(error, 'code');
    var title = get_1.default(error, 'title');
    var toString = error && typeof error.toString === 'function' && error.toString();
    var message = get_1.default(error, 'message', toString);
    var detail = get_1.default(error, 'detail', message);
    return [title, detail, code, status].filter(get_2.default).join(', ');
};
exports.default = (function (errorOrErrors) {
    var error = errorOrErrors;
    var errList = get_1.default(error, 'errors', []).map(errItemToString).map(function (err) { return err.length === 0 ? 'Unknown error.' : err; });
    if (errList.length > 0)
        return errList.join('\n');
    return errItemToString(error);
});
