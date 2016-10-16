'use strict'
var express = require('express');
var router = express.Router();
var mongoose = require('mongoose')
var Quotes = require('../models/quotes.js')


router.get('/quote', function(req, res, next) {
    Quotes.find({}, function(err, result) {
        res.json(result)
    })
});

router.post('/quote', function(req, res, next) {
  console.log(req.body);
    let newQuote = new Quotes({
        quote: req.body.quote,
        author: req.body.author,
        lastUpdate: new Date(),
        createdAt: new Date()
    }).save(function(err, result) {
        if (err) {
            res.json({
                message: err
            })
        } else {
          console.log(result)
            res.json({
                succes: "ok",
                message: "add is succesful",
                data: result
            })
        }
    })
});

router.put('/quote/:id', function(req, res, next) {
    Quotes.update({
        _id: req.params.id
    }, {
      quote: req.body.quote,
      author: req.body.author,
      lastUpdate: new Date()
    }, function(err, result) {
        if (err) {
            res.json({
                message: err
            })
        } else {
          Quotes.findOne({_id: req.params.id},function(err2,result2){
            res.json({
                success: "ok",
                message: "update is successful",
                data:result2
            })
          })
        }
    })
});

router.delete('/quote/:id', function(req, res, next) {
    Quotes.remove({
        _id: req.params.id
    }, function(err, result) {
        if (err) {
            res.json({
                message: err
            })
        } else {
          Quotes.findOne({_id: req.params.id},function(err,result){})
            res.json({
                success: "ok",
                message: "delete is successful"
            })
        }
    })
})



module.exports = router;
