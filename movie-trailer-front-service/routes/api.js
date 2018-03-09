var express = require('express');
var httpRequest = require('request');
var urllib = require('urllib');
var constant = require('../utils/constant');
var router = express.Router();

// Request Movie trailer information
router.get('/current_reserve_rank', function(req, response) {
    urllib.request(constant.PREMOVIE_RELEASE_LIST, function(err, data, res) {
        response.render('current_reserve_rank', {data: data.toString()});
        
        var $ = cheerio.load(data.toString());
        var postElement = $("list_boxthumb");
    });
});

module.exports = router;
