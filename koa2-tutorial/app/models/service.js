const ObjectID = require('mongodb').ObjectID,
    mongodb = require('./db')

const config = {
    // 创建
    insert: async(obj) => {
        const res = await mongodb.insert('users', obj)
        return res
    },

    // 更新
    update: async(obj) => {
        const res = await mongodb.update('users', obj)
        return res
    },

    // 删除
    remove: async(id) => {
        const res = await mongodb.remove('users', {
            _id: new ObjectID(id)
        })
        return res
    },

    // 查询多条
    find: async(query, option) => {
        const res = await mongodb.find('users', query, option)
        return res
    },

    // 查询单条
    findOne: async(query, option) => {
        const res = await mongodb.findOne('users', query, option)
        return res
    },

    // 获取全部
    getAll: async() => {
        const res = await mongodb.find('users', {})
    },

    // 按id查询
    getById: async(id) => {
        const res = await mongodb.findOne('users', {
            _id: new ObjectID(id)
        })
    },

    // 按照很多id来查询
    getByIds: async(ids, option) => {
        ids = ids.map((id) => {
            new ObjectID(id)
        })
        const res = await mongodb.find('users', {
            _id: {
                $in: ids
            }
        }, option)
        return res
    },

    // 列出(带分页)
    getByPage: async(query, sort, pageSize, pageNum) => {
        if (!query) query = {}
        if (!sort) sort = [
            ['_id', 'desc']
        ]
        const option = {
            sort: sort,
            limit: pageSize,
            skip: (pageNum - 1) * pageSize
        }
        const res = await mongodb.find('users', query, option)
        return res
    },

    // 计数
    count: async(query) => {
        if (!query) query = {}
        const res = await mongodb.count('users', query)
    }
}

module.exports = config
