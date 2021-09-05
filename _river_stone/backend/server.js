import express from 'express';
import cors from 'cors'; 
import mongoose from 'mongoose';
import user from './dbuser.js';
import bcrypt from "bcrypt";
//import{ check, validationResult}from"express-validator/check";
import jwt from "jsonwebtoken";
import { transporter } from './mail.js';
//import { promises } from 'stream';

const connection_url="mongodb+srv://raja:raja3381@cluster0.n9lt5.mongodb.net/userdb_reversestone?retryWrites=true&w=majority"
//npm run watch
mongoose.connect(connection_url,{
    useNewUrlParser:true,
    useCreateIndex:true,
    useUnifiedTopology:true
})
/*const set_time = setTimeout(() => {
    console.log("promise return")
}, 10);
const sample_promise = set_time.then{
    console.log("timeout")
}.catch(error){
    console.log(error)
}*/

const app = express();
app.use(cors());
const port = process.env.PORT|| 9001;
//Middlewares
app.use(express.json())
const authorize = (req, res, next) =>{
        const token = req.header("token");
        if (!token) return res.status(401).json({ message: "Authorization Error" });
    
        try {
        const decoded = jwt.verify(token, "randomString");
        req.username = decoded.username;
        next();
        } catch (e) {
        console.error(e);
        res.status(500).send({ message: "Invalid Token" });
        }
    };    

//API endpoints
app.get('/',(req,res)=>res.status(200).send("MW$M stack"));

//<------------------Db___API----------------------------------===================
app.post('/userdb',async(req,res)=>{
    console.log("userdb-running")
    
    
    //res.status(201).send(user_register)
    const salt = await bcrypt.genSalt(12);
    
    req.body.password = await bcrypt.hash(req.body.password, salt);
    console.log(req.body.password)
    //user.save().then((doc) => res.status(201).send(doc));
    const user_register= req.body;
    console.log("user_register = "+user_register)
    user.create(user_register,(err,data)=>{
        
        if(err){
            res.status(500).send(err)
        }else{
            res.status(201).send(data)
        }
    })
});

app.post('/user_login', async (req,res)=>{
    //console.log("user_login-running")
    const user_login = req.body;
    //console.log("user_login = "+user_login )
    const { username, password } = req.body;
    try {
        let user_check = await user.findOne({
            username
        });
        if (!user_check){
            return res.status(200).json({
            message: "User Not Exist"
            })};

        const isMatch = await bcrypt.compare(password, user_check.password);
        if (!isMatch){
            return res.status(200).json({
            message: "Incorrect Password !"
            });
        }
        
        if (!isMatch){
            return res.status(200).json({
            message: "Incorrect Password !"
            });
        }
        const payload = {
                user_check: {
                username: user_check.usename
                }
            };
            
        //check_admin_role =>
        if  (user_check.role == "Admin"){
            /*return res.status(200).json({
                message: "admin login is correct"
                })*/
                jwt.sign(
                    payload,
                    "randomString", {
                        expiresIn: 10000
                    },
                    (err, token) => {
                        if (err) throw err;
                        res.status(200).json({
                            token:token,message: "admin login is correct"
                        })});
        }
        else{
            //return res.status(200).json({message: "user login is correct"})
            jwt.sign(
                    payload,
                    "randomString", {
                        expiresIn: 10000
                    },
                    (err, token) => {
                        if (err) throw err;
                        res.status(200).json({
                            token,message: "user login is correct"
                        })});}}
        catch(err) {
                console.error(err);
                res.status(500).json({
                message: err
        })};
});

app.post('/change_action',async (req,res)=>{
    const { email, action} = req.body;
    
    const filter = { email: email };
    const update = { action:action };
    let doc = await user.findOneAndUpdate(filter, update, {
        new: true
    })
    res.status(200).send(doc)
});

app.get('/user_data',async (req,res)=>{
    const all_data = await user.find();
    console.log(all_data)
    res.status(200).send(all_data)
})
app.get("/check_token", authorize, async (req, res) => {
        try {
        const user_data = await user.find(req.username);
        res.json(user_data);
        } catch (e) {
        res.send({ message: "Error in Fetching user" });
        }
    });

app.post('/email', (req,res)=>{
    //console.log("req===="+req.body)
    let mailOptions = {
        from: req.from,
        to: req.to,
        subject: req.subject,
        text: req.message
    }
    //console.log(req.body.to)
    //console.log(mailOptions.from)
    transporter.sendMail(req.body, (error, info)=>{
        if (error) {
            console.log(error);
            res.status(200).send(error)
        } else {
            console.log('Email sent: ' + info.response);
            res.status(200).send(info.response)
        }
    });
})
app.listen(port,()=>console.log(`listening on port ::${port}`))

