import express from 'express';
import cors from 'cors'; 
var users= [
  {
    username:"user",
    password:"password"
  }
]
//const connection_url="mongodb+srv://raja:raja3381@cluster0.n9lt5.mongodb.net/tinderdb?retryWrites=true&w=majority"

//App Configurations 
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
    }else{
      res.status(200).send({message:"wrong password"})
    }
  }else{
      res.status(200).send({message:"wrong username"})
  }
})
//Listener
app.listen(port,()=>console.log(`listening on port ::${port}`))