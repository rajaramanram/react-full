var express = require('express');
var router = express.Router();

var users= [
  {
    username:"user",
    password:"password"
  }
]

/* GET home page. */
router.get('/', function(req, res, next) {
  //res.render('index', { title: 'Express' });
  res.send("backend works");
});

router.post('/login',function(req,res){
  let get_user = users.find(user=>user.username == req.body.username);
  if (get_user){
    
    if (get_user.password == req.body.password){
      res.status(200).send({message:"login successful"})
    }else{
      res.status(200).send({message:"wrong password"})
    }
  }else{
      res.status(200).send({message:"wrong username"})
  }
})

module.exports = router;
