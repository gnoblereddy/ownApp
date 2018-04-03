var express = require('express');
var router = express.Router();
var db = require('./signUpSchema');
var mongoose = require('mongoose');

// router.get('/getdb', function(req, res) {
//     db.find({},function(err, data) {
//         if(err) {
//             res.json({
//                 error : err.message || 'failed to get product'
//             })
//         } else  {
//             res.status(200).json(data)
//         }  
//     })
// });

router.post('/signup', function(req, res) {
    console.log("backend");
    db.create(req.body, function(err, createdData) {
        if(err) {
            res.json({
                error : err || 'failed to create'
            })
        } else  {
            db.find({},function(err, data) {
                if(err) {
                    res.json({
                        error : err || 'failed to create'
                    })
                } else  {
                    res.status(200).json(data)
                }  
            })
        }        
    })
})


module.exports = router;