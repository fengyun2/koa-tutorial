///<reference path="../../typings/index.d.ts" />

import Blog from '../models/blogModel.js';

const add = (blog) => {
    return Blog.save(blog);
};

const list = (conditions, fields, options) => {

    /*    const result = Blog.find(conditions, fields, options);
        result.then(function(value) {
            console.log('111', value)
        }, function(value) {
            console.log('222', value)
        })*/
    return Blog.find(conditions, fields, options);
};

export default {
    add,
    list,
};