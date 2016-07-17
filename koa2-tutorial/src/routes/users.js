/*
 * @Author: fengyun2
 * @Date:   2016-07-17 23:32:34
 * @Last Modified by:   fengyun2
 * @Last Modified time: 2016-07-18 00:00:39
 */

'use strict';

import Router from 'koa-router'
import userCtrl from '../controllers/userCtrl'

const router = Router()

router.get('/', userCtrl)
router.get('/news', async (ctx, next) => {
  ctx.body = '我是新闻页...'
})

export default router
