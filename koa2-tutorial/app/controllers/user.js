const ServiceUser = require('../models/service_user')
const serviceUser = new ServiceUser()

const user = {
        name: 'freewolf',
        password: '123',
        invitecode: 'abcd'
    }
    // 插入
serviceUser.insert(user)

// 查询
const user1 = serviceUser.find({
    name: 'freewolf'
})

console.log('user1: ', user1)
