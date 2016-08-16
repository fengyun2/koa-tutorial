// /<reference path="../../typings/index.d.ts" />

import blogModel from '../schema/blogSchema.js';

/*class Blog {
    constructor(db = null, blog = {}) {
            this.db = db

            this.blog = {}
            this.blog.title = blog.title || null
        }

    save(blog) {
        const action = new blogModel(blog)
        return new Promise((resolve, reject) => {
            action.save(function(err, result) => {
                if (err) {
                    return reject({ err: err.errors, message: err.message, code: -99 })
                }
                return resolve(result)
            })
        })
    }
    find(conditions, fields, options) {
        // exec 返回promise实例
        return blogModel.find(conditions, fields, options).exec()
    }
}
*/

/**
 * 【添加blog】
 * @param blog {object}
 */
const save = function(blog) {
    var action = new blogModel(blog);
    return new Promise((resolve, reject) => {
        action.save(function(err, result) {
            if (err) {
                return reject({ err: err.errors, message: err.message, status: -99 });
            }
            return resolve(result);
        });
    });
};

/**
 * 【查询所有blog】
 * @param conditions {object} 查询条件
 * @param fields     {object} 过滤字段
 * @param options    {object} 其他操作
 */
const find = function(conditions, fields, options) {
    //exec 返回promise实例
    return blogModel.find(conditions, fields, options).exec();
};

export default {
    save,
    find,
};