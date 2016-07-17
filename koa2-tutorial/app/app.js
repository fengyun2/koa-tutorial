/*
* @Author: fengyun2
* @Date:   2016-07-16 19:39:57
* @Last Modified by:   fengyun2
* @Last Modified time: 2016-07-16 19:42:54
*/

/**
 * 主入口文件
 */
'use strict'

require('babel-core/register')({
  presets: ['es2015-node5', 'stage-3']
})
const Koa = require('koa')
const Router = require('koa-router')
const bodyParser = require('koa-bodyparser')
const logger = require('koa-logger')

const staticServer = require('koa-static')
const path = require('path')


const app = new Koa()
const router = new Router()
app.use(logger()) // 日志中间件
.use(bodyParser())  // post请求解析中间件
.use(router.routes()) // 路由中间件
.use(router.allowedMethods()) // 路由中间件
.use(staticServer(path.join(__dirname,'public'))) // 静态文件指定中间件

// koa错误处理
app.on('error', (err, ctx) => {
  console.error(err)
})

// 配置路由
router.get('/', async (ctx, next) => {
  await function () {
    console.log(111)
    console.log(ctx.query)
    console.log(ctx.params)
  }
  ctx.body = "I'm koa router"

  const user = require('./controllers/user')
})

app.use(async (ctx, next) => {
  const start = new Date()
  await next()
  const ms = new Date() - start
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);
})

app.use(ctx => {
  ctx.body = 'Hello Koa'
})

app.listen(3000, () => {
  console.log(`listening at port 3000...`);
})
