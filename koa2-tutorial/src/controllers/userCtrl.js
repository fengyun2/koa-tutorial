'use strict';

const ServiceUser = require('../models/service_user')
const serviceUser = new ServiceUser()
const title = 'Hello LY'


const list = async(ctx, next) => {
    // 查询
    const user1 = serviceUser.find({
        name: 'freewolf'
    })

    user1.then(function(value) {
        console.log(value)
    }, function(value) {
        console.log(value)
    })
    await ctx.render('index', {
        title
    })
}

const add = async(ctx, next) => {
    const user = {
        name: 'freewolf',
        password: '123',
        invitecode: 'abcd'
    }
    // 插入
    const res = serviceUser.insert(user)
    console.log(res)
    await ctx.render('index', {
        title
    })
}

export {
    list,
    add
}
