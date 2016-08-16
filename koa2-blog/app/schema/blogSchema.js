/*
 * @Author: fengyun2
 * @Date:   2016-08-16 10:24:20
 * @Last Modified by:   fengyun2
 * @Last Modified time: 2016-08-16 10:45:14
 */
///<reference path="../../typings/index.d.ts" />
'use strict';exports.__esModule = true;

var _mongoose = require('mongoose');var _mongoose2 = _interopRequireDefault(_mongoose);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
_mongoose2.default.Promise = global.Promise;
var Schema = _mongoose2.default.Schema;

_mongoose2.default.connect('mongodb://localhost/koa2');

var BlogSchema = new Schema({
    title: {
        type: String,
        required: true },

    slug: {
        type: String,
        required: false },

    state: {
        type: String,
        default: 'published' },

    // 置顶 0: 不置顶, 1: 置顶
    top: {
        type: Number,
        required: true,
        default: 0 },

    content: {
        type: String,
        required: false },

    createdAt: {
        type: Date,
        default: Date.now },

    createdBy: {
        type: String,
        required: true,
        ref: 'Users' },

    updatedAt: {
        type: Number,
        default: Date.now },

    updatedBy: {
        type: String,
        required: true,
        ref: 'Users' } });exports.default =



_mongoose2.default.model('Blogs', BlogSchema);module.exports = exports['default'];
//# sourceMappingURL=blogSchema.js.map