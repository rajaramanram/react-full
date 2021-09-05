import express from 'express';
import cors from 'cors'; 
import mongoose from 'mongoose';
import products from './dbuser.js';
const connection_url="mongodb+srv://raja:raja3381@cluster0.n9lt5.mongodb.net/marketdb?retryWrites=true&w=majority"
//npm run watch
mongoose.connect(connection_url,{
    useNewUrlParser:true,
    useCreateIndex:true,
    useUnifiedTopology:true
})
//const connection_url="mongodb+srv://raja:raja3381@cluster0.n9lt5.mongodb.net/tinderdb?retryWrites=true&w=majority"

const app = express();
app.use(cors());
const port = process.env.PORT|| 9001;
//Middlewares
app.use(express.json())

//API endpoints
app.get('/',(req,res)=>res.status(200).send("MW$M stack"));

//<------------------Db___API----------------------------------===================
app.post('/marketdb',(req,res)=>{
  console.log("marketdb-running")
    const dbCard = req.body;
    products.create(dbCard,(err,data)=>{
        if(err){
            res.status(500).send(err)
        }else{
            res.status(201).send(data)
        }
    })
});

app.get('/marketdb',(req,res)=>{
    const dbCard = req.body;
    products.find((err,data)=>{
        if(err){
            res.status(500).send(err)
        }else{
            res.status(200).send(data)
        }
    })
});
//marketsdb.findOneAndUpdate(dbmarket_id, req.body,(err,data)=>{
app.put('/marketdb', (req, res) => {
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