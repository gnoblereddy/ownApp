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

// router.delete('/deleteProduct/:id', function(req, res) {
//     db.remove({_id : req.params.id}, function(err, deleted) {
//         if(err) {
//             res.json({
//                 error : err.message || 'failed to delete product'
//             })
//         } else  {
//             db.find({},function(err, data) {
//                 if(err) {
//                     res.json({
//                         error : err.message || 'failed to create product'
//                     })
//                 } else  {
//                     res.status(200).json(data)
//                 }  
//             })
//         }   
//     })
// });

// router.put('/updateProduct/:id', function(req, res) {
//     db.update(
//         {"_id" : req.params.id},
//         {$set:
//             {
//                 title : req.body.title,
//                 price : req.body.price,
//                 quantity : req.body.quantity,
//                 description : req.body.description,
//                 url : req.body.url
//             }
//         }, function(err, modifiedData) {
//             if(err) {
//                 res.json({
//                     error : err.message || 'failed to update product'
//                 })
//             } else  {
//                 Products.find({},function(err, data) {
//                     if(err) {
//                         res.json({
//                             error : err.message || 'failed to  product'
//                         })
//                     } else  {
//                         res.status(200).json(data)
//                     }  
//                 })
//             }   
//         }
//     )
// })

module.exports = router;