/*
 * @Author: fengyun2
 * @Date:   2016-07-21 11:22:40
 * @Last Modified by:   fengyun2
 * @Last Modified time: 2016-07-21 11:48:34
 */

"use strict";
///<reference path="../../typings/globals/node/node.d.ts" />
var util = require('util');

/*
 * 校验会话
 */
const auth = function() {
  return async(ctx, next) => {
    if (!ctx.session || !ctx.session.user) {
      ctx.send(null, 999, "会话失效");
      return;
    }
    await next()
  }
}
export {
  auth
}
