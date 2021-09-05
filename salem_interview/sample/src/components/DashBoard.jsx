import React, {useState,useEffect} from 'react';
import axios from 'axios';
import MaterialTable from 'material-table';

function DashBoard(){
    

    var columns=[
        {title: "Latest_Block_Hash", field: "latest_block_hash"},
        {title: "Latest_App_Hash", field: "latest_app_hash"},
        {title: "Latest_Block_Height", field: "latest_block_height"},
        {title: "Latest_Block_Time", field:"latest_block_time"},
        {title:  "Catching_Up", field:  "catching_up"},]
    
    const [data, setData] = useState([])
    useEffect(()=>{
        axios.get("http://localhost:9001/get_data").then(response=>{
            console.log("get_response_dashboard=="+response.data)
            setData(response.data)

        }).catch(error=>console.log(error))}) 
    
    return (
        <div>
            <MaterialTable title="Dashboard" columns={columns} 
            data={data}
            options={{ 
                        pageSize: 5,
                        pageSizeOptions: [5, 10, 15],
                    }}/>
        </div>
    )

}
export default DashBoard