/*
 * @Author: fengyun2
 * @Date:   2016-07-17 22:42:51
 * @Last Modified by:   fengyun2
 * @Last Modified time: 2016-07-17 23:11:58
 */

'use strict';

import Router from 'koa-router'
import indexCtrl from '../controllers/indexCtrl'
import userCtrl from '../controllers/userCtrl'

const router = Router()

router.get('/', indexCtrl)
router.get('/user', userCtrl)

export default router
