var express = require('express');
var router = express.Router();
var config = require('./config');
var PostModel = require('./models/post');

router.get('/routertest', function(req, res, next) {
    res.render('test')
})
module.exports = router;