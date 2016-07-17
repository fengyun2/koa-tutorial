/*
 * @Author: fengyun2
 * @Date:   2016-07-17 22:42:51
 * @Last Modified by:   fengyun2
 * @Last Modified time: 2016-07-17 23:11:58
 */

'use strict';exports.__esModule = true;

var _koaRouter = require('koa-router');var _koaRouter2 = _interopRequireDefault(_koaRouter);
var _indexCtrl = require('../controllers/indexCtrl');var _indexCtrl2 = _interopRequireDefault(_indexCtrl);
var _userCtrl = require('../controllers/userCtrl');var _userCtrl2 = _interopRequireDefault(_userCtrl);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

var router = (0, _koaRouter2.default)();

router.get('/', _indexCtrl2.default);
router.get('/user', _userCtrl2.default);exports.default = 

router;module.exports = exports['default'];
//# sourceMappingURL=index.js.map