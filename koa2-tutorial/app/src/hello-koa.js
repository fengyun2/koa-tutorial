/*
* @Author: fengyun2
* @Date:   2016-07-16 19:41:22
* @Last Modified by:   fengyun2
* @Last Modified time: 2016-07-16 19:59:35
*/

'use strict';
require('babel-core/register')
const Koa = require('koa')
const app = new Koa()

app.use(ctx => {
  ctx.body = 'Hello Koa'
})

app.listen(3000)
