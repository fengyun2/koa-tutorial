/*
 * @Author: fengyun2
 * @Date:   2016-07-21 11:22:40
 * @Last Modified by:   fengyun2
 * @Last Modified time: 2016-07-21 11:48:34
 */

"use strict";
///<reference path="../../typings/globals/node/node.d.ts" />
exports.__esModule = true;exports.auth = undefined;var _regenerator = require("babel-runtime/regenerator");var _regenerator2 = _interopRequireDefault(_regenerator);var _asyncToGenerator2 = require("babel-runtime/helpers/asyncToGenerator");var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var util = require('util');

/*
                                                                                                                                                                                                                                                                                                                                                                                                                                             * 校验会话
                                                                                                                                                                                                                                                                                                                                                                                                                                             */
var auth = function auth() {var _this = this;
  return function () {var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(ctx, next) {return _regenerator2.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:if (!(
              !ctx.session || !ctx.session.user)) {_context.next = 3;break;}
              ctx.send(null, 999, "会话失效");return _context.abrupt("return");case 3:_context.next = 5;return (


                next());case 5:case "end":return _context.stop();}}}, _callee, _this);}));return function (_x, _x2) {return _ref.apply(this, arguments);};}();

};exports.

auth = auth;
//# sourceMappingURL=auth.js.map