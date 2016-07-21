/*
 * @Author: fengyun2
 * @Date:   2016-07-21 11:49:48
 * @Last Modified by:   fengyun2
 * @Last Modified time: 2016-07-21 13:45:04
 */

'use strict';

import User from '../controllers/user'

// import { auth } from '../middlewares/auth'

export default function(router) {

  // 获取用户列表
  // router.get('/users', auth(), list)
  router.get('/users', User.list)
    // 获取用户详情
    // router.get('/user/:userId', User.fetch)
    // 创建用户
    // router.post('/user/create', User.create)
    // 删除用户
    // router.post('/user/delete', User.remove)
    // 更新用户
    // router.post('/user/update', User.update)
}
