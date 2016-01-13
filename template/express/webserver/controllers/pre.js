/**
 * 前置路由
 * @author ydr.me
 * @create 2016-01-13 15:12
 */


'use strict';

var midParser = require('../middlewares/parser.js');

module.exports = function (app) {
    app.use(midParser.parseUA);
};


