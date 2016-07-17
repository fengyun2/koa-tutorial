/*
* @Author: fengyun2
* @Date:   2016-07-16 19:39:57
* @Last Modified by:   fengyun2
* @Last Modified time: 2016-07-17 23:05:04
*/

/**
 * 主入口文件
 */
'use strict'
import http from 'http'
import Koa from 'koa'
import path from 'path'
import views from 'koa-views'
import convert from 'koa-convert'
import json from 'koa-json'
import bodyParser from 'koa-bodyparser'
import logger from 'koa-logger'
import koaStatic from 'koa-static-plus'
import koaOnError from 'koa-onerror'

// const Router = require('koa-router')

const app = new Koa()
// const router = new Router()
app
.use(convert(bodyParser()))  // post请求解析中间件
.use(convert(json()))
.use(convert(logger())) // 日志中间件
// .use(router.routes()) // 路由中间件
// .use(router.allowedMethods()) // 路由中间件
.use(convert(koaStatic(path.join(__dirname,'public'),{
  pathPrefix: ''
}))) // 静态文件指定中间件

// views
app.use(views(path.join(__dirname, '../views'), {
  extension: 'html'
}))

// 500 error
koaOnError(app, {
  template: 'views/500.html'
})

// logger
app.use(async (ctx, next) => {
  const start = new Date()
  await next()
  const ms = new Date() - start
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);
})

// response router
app.use(async (ctx, next) => {
  await require('./routes').routes()(ctx, next)
})

// 404
app.use(async (ctx) => {
  ctx.status = 404
  await ctx.render('404')
})

// error logger
app.on('error', async (err, ctx) => {
  console.log('error occured:', err)
})

// app.use(ctx => {
//   ctx.body = 'Hello Koa'
// })

// app.listen(3000, () => {
//   console.log(`listening at port 3000...`);
// })

const port = parseInt('3000')
const server = http.createServer(app.callback())

server.listen(port)
server.on('error', (error) => {
  if (error.syscall !== 'listen') {
    throw error
  }
  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(port + ' requires elevated privileges')
      process.exit(1)
      break
    case 'EADDRINUSE':
      console.error(port + ' is already in use')
      process.exit(1)
      break
    default:
      throw error
  }
})
server.on('listening', () => {
  console.log('Listening on port: %d', port)
})

export default app
