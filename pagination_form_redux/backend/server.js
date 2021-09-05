import express from 'express';
import cors from 'cors'; 
import mongoose from 'mongoose';
import usersdb from './dbuser.js';
const connection_url="mongodb+srv://raja:raja3381@cluster0.n9lt5.mongodb.net/userdb?retryWrites=true&w=majority"
mongoose.connect(connection_url,{
    useNewUrlParser:true,
    useCreateIndex:true,
    useUnifiedTopology:true
})
var users= [
  {
    username:"user",
    password:"password"
  }
]
//const connection_url="mongodb+srv://raja:raja3381@cluster0.n9lt5.mongodb.net/tinderdb?retryWrites=true&w=majority"

//App Configurations
//mongodb+srv://raja:<password>@cluster0.n9lt5.mongodb.net/myFirstDatabase?retryWrites=true&w=majority 
const app = express();
app.use(cors());
const port = process.env.PORT|| 9001;
//Middlewares
app.use(express.json())
//DB Configurate
/*mongoose.connect(connection_url,{
    useNewUrlParser:true,
    useCreateIndex:true,
    useUnifiedTopology:true
})*/
//API endpoints
app.get('/',(req,res)=>res.status(200).send("MW$M stack"));
app.post('/login',function(req,res){
  let get_user = users.find(user=>user.username == req.body.username);
  if (get_user){
    
    if (get_user.password == req.body.password){
      //res.status(200).send({message:"login successful"})
      res.send({
        token: 'test123'
        });
        console.log("correct")
    }else{
      res.status(200).send({message:"wrong password"})
      console.log("wtong")
    }
  }else{
      res.status(200).send({message:"wrong username"})
      console.log("cfdsgdsgct")
  }
})
//<------------------Db___API----------------------------------===================
app.post('/userdb',(req,res)=>{
  console.log("userdb-running")
    const dbCard = req.body;
    usersdb.create(dbCard,(err,data)=>{
        if(err){
            res.status(500).send(err)
        }else{
            res.status(201).send(data)
        }
    })
});

app.get('/userdb',(req,res)=>{
    const dbCard = req.body;
    usersdb.find((err,data)=>{
        if(err){
            res.status(500).send(err)
        }else{
            res.status(200).send(data)
        }
    })
});
//usersdb.findOneAndUpdate(dbUser_id, req.body,(err,data)=>{
app.put('/userdb', (req, res) => {
    console.log("node_side_put")
    console.log(req)
    const dbUser_id = req.body.id;
    console.log(dbUser_id)
    usersdb.findOneAndUpdate({id:dbUser_id}, req.body,(err,data)=>{
            if(err){
                res.status(500).send(err)
            }else{
                res.status(201).send(data)
            }
        })
    });

app.delete('/userdb/:id', (req, res) => {
    console.log("delete working")
    //console.log(req)
    const dbUser_id = req.params.id;
    console.log(dbUser_id)
    usersdb.deleteOne({id:dbUser_id},(err,data)=>{
            if(err){
                res.status(500).send(err)
            }else{
                res.status(201).send(data)
            }
        })
    });
//Listener
app.listen(port,()=>console.log(`listening on port ::${port}`))