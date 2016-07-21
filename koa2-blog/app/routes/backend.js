/*
 * @Author: fengyun2
 * @Date:   2016-07-21 11:49:48
 * @Last Modified by:   fengyun2
 * @Last Modified time: 2016-07-21 13:45:04
 */

'use strict';exports.__esModule = true;exports.default =





function (router) {

  // 获取用户列表
  // router.get('/users', auth(), list)
  router.get('/users', _user2.default.list);
  // 获取用户详情
  // router.get('/user/:userId', User.fetch)
  // 创建用户
  // router.post('/user/create', User.create)
  // 删除用户
  // router.post('/user/delete', User.remove)
  // 更新用户
  // router.post('/user/update', User.update)
};var _user = require('../controllers/user');var _user2 = _interopRequireDefault(_user);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}module.exports = exports['default']; // import { auth } from '../middlewares/auth'
//# sourceMappingURL=backend.js.map