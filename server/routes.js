var express = require('express');
var router = express.Router();
var db = require('./models/userSchema');
var mongoose = require('mongoose');
var Response = require('./commons/response');


router.post('/signup', function (req, res) {
    var data = new db(req.body);
    data.save(function(err,data){
     if(err){
         Response.errorResponse(err.message,res);
     }else{
         return res.status(200).json({ result: data, message: 'User registered successfully!' , success:1, statusCode:200,status:true});
     } 
    })
})

router.post('/login', function (req, res, next) {
    var email = req.body.username;
    var password = req.body.password;

    db.findOne({ email: email, password:password },
        function (err, data) {
            if (err) {
                Response.errorResponse(err.message,res);
            }
            if (!data) {
                Response.notFoundResponse('Invalid Email Id or Password!',res);
            }
            else {                
               return res.status(200).json({ result: data, message: 'User loggedin successfully!' , success:1, statusCode:200,status:true});
            }
        }
    )
})


module.exports = router;