/*
 * @Author: fengyun2
 * @Date:   2016-08-16 10:24:30
 * @Last Modified by:   fengyun2
 * @Last Modified time: 2016-08-16 10:50:26
 */
///<reference path="../../typings/index.d.ts" />
'use strict';exports.__esModule = true;

var _mongoose = require('mongoose');var _mongoose2 = _interopRequireDefault(_mongoose);
require('./mongodb');


var _bcryptjs = require('bcryptjs');var _bcryptjs2 = _interopRequireDefault(_bcryptjs);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} // mongoose.Promise = global.Promise;
var Schema = _mongoose2.default.Schema; // mongoose.connect('mongodb://localhost/koa2');

var UserSchema = new Schema({
    name: {
        type: String,
        required: true },

    slug: {
        type: String,
        required: false },

    email: {
        type: String,
        required: true },

    password: {
        type: String,
        required: true,
        trim: true },

    headImg: {
        type: String,
        required: false },

    state: {
        type: String,
        default: 'active' },

    location: {
        type: String,
        required: false },

    lastLogin: {
        type: Date,
        default: Date.now },

    createdAt: {
        type: Date,
        default: Date.now },

    updatedAt: {
        type: Number,
        default: Date.now } });exports.default =



_mongoose2.default.model('Users', UserSchema);module.exports = exports['default'];
//# sourceMappingURL=userSchema.js.map