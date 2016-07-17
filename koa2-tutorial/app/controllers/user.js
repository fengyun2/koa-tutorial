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

user1.then(function(value){
  console.log(value)
}, function(value) {
  console.log(value)
})
