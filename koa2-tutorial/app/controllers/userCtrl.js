'use strict';exports.__esModule = true;var _regenerator = require('babel-runtime/regenerator');var _regenerator2 = _interopRequireDefault(_regenerator);var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}exports.default = function () {var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(

    function _callee(ctx, next) {var 
        title, 
        ServiceUser, 
        serviceUser, 

        user, 








        user1;return _regenerator2.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:title = 'Hello LY';ServiceUser = require('../models/service_user');serviceUser = new ServiceUser();user = { name: 'freewolf', password: '123', invitecode: 'abcd' }; // 插入
                        serviceUser.insert(user); // 查询
                        user1 = serviceUser.find({ name: 'freewolf' });

                        user1.then(function (value) {
                            console.log(value);
                        }, function (value) {
                            console.log(value);
                        });_context.next = 9;return (
                            ctx.render('index', { 
                                title: title }));case 9:case 'end':return _context.stop();}}}, _callee, undefined);}));return function (_x, _x2) {return _ref.apply(this, arguments);};}();module.exports = exports['default'];
//# sourceMappingURL=userCtrl.js.map