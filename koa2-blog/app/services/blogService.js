'use strict';exports.__esModule = true;

var _blogModel = require('../models/blogModel.js');var _blogModel2 = _interopRequireDefault(_blogModel);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

var add = function add(blog) {
    return _blogModel2.default.save(blog);
}; ///<reference path="../../typings/index.d.ts" />

var list = function list(conditions, fields, options) {

    /*    const result = Blog.find(conditions, fields, options);
                                                           result.then(function(value) {
                                                               console.log('111', value)
                                                           }, function(value) {
                                                               console.log('222', value)
                                                           })*/
    return _blogModel2.default.find(conditions, fields, options);
};exports.default =

{
    add: add,
    list: list };module.exports = exports['default'];
//# sourceMappingURL=blogService.js.map