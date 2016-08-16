/*
 * @Author: fengyun2
 * @Date:   2016-08-16 10:24:20
 * @Last Modified by:   fengyun2
 * @Last Modified time: 2016-08-16 10:45:14
 */
///<reference path="../../typings/index.d.ts" />
'use strict';

import mongoose from 'mongoose';
mongoose.Promise = global.Promise;
const Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost/koa2');

const BlogSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    slug: {
        type: String,
        required: false,
    },
    state: {
        type: String,
        default: 'published'
    },
    // 置顶 0: 不置顶, 1: 置顶
    top: {
        type: Number,
        required: true,
        default: 0,
    },
    content: {
        type: String,
        required: false,
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    createdBy: {
        type: String,
        required: true,
        ref: 'Users'
    },
    updatedAt: {
        type: Number,
        default: Date.now
    },
    updatedBy: {
        type: String,
        required: true,
        ref: 'Users'
    }
});

export default mongoose.model('Blogs', BlogSchema);