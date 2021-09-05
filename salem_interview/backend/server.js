const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors')
const axios = require('axios')
const sync_info = require('./dbsync')


const connection_url="mongodb+srv://raja:raja3381@cluster0.n9lt5.mongodb.net/sync_information?retryWrites=true&w=majority"
//npm run watch
mongoose.connect(connection_url,{
    useNewUrlParser:true,
    useCreateIndex:true,
    useUnifiedTopology:true
})
const app = express();
app.use(cors())
app.get("/sync_info",async(req,res)=>{
    const get_data = await axios.get("http://3.141.161.136:26657/status").then(response=>{
        console.log("get_response=="+response.data.result.sync_info)
        const information = response.data.result.sync_info
        const newInformation = new sync_info({
            latest_block_hash: information.latest_block_hash,
            latest_app_hash: information.latest_app_hash,
            latest_block_height: information.latest_block_height,
            latest_block_time: information.latest_block_time,
            catching_up: information.catching_up
        });
        const store_info =  newInformation.save();
        
        return information
    }).catch(err=>{
        return err
    })
    console.log(get_data)
    return res.status(200).send(get_data)
})
//app.get("/node",(req,res)=>{console.log("node working")})
app.get("/get_data",async(req,res)=>{
    const get_db = await sync_info.find({})
    //console.log(get_db)
    return res.status(200).send(get_db)
})

const port = process.env.PORT || 9001
app.listen(port,()=>console.log(`app listen in ${port}`))
/*
sync_info.create(information,(err,data)=>{
        
            if(err){
                res.status(500).send(err)
            }else{
                res.status(201).send(data)
            }
        })*/