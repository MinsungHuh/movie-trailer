var express = require('express');
var request = require('request');
var constant = require('./constant');
var router = express.Router();

exports.movieList = function movieList() {
    request.get(constant.PREMOVIE_RESERVE_LIST, function(err, res, body) {
        
        // console.log(res);
        // console.log(body);
    });
};