var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('dashboard');
});


/* GET users listing. */
//router.post('/login',(req,res)=>{
 // if(req.body.userId == credential.userId && req.body.password == credential.password){
  //  req.session.user = req.body.userId;
  //  res.redirect('/dashboard');
    //res.end("Login Sucessful!");
 // }else{
 //   res.end("Invalid Username")
 // }
//});

//Get Dashboard
//router.get('/dashboard',(req,res)=>{
  //if(req.session.user){
 //   res.render('dashboard',{user:req.session.user})
 // }else{
 //   res.send("Unauthorized User!")
 // }
////})
module.exports = router;
