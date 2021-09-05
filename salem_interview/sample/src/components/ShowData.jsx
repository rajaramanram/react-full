import React, {useState, useEffect} from 'react';
import axios from 'axios';

export default function ShowData(){
    const [data,setData] = useState('')
    useEffect(()=>{
        /*const timer = setInterval(()=>{
            axios.get("http://3.141.161.136:26657/status").then(response=>{
                console.log("get_response=="+response.sync_info)
                setData(response.sync_info)

            })
        ,[]},1000)"*/
        console.log("useeffect")
        const timer = setInterval(()=>{axios.get("http://localhost:9001/sync_info").then(response=>{
            console.log("get_response=="+response.data)
            setData(JSON.stringify(response.data))

        }).catch(error=>console.log(error))},60000)
        
    
    },[])
    return (
        <div>
            <h1>working</h1>
            <div>{data}</div>
        </div>
    )
}
