import React, { useState, useEffect } from 'react';
import MaterialTable from "material-table";
import axios from 'axios';
const api = axios.create({
    baseURL: `https://reqres.in/api`
})

function DashBoard() {
    var columns=[
        {title: "First name", field: "first_name"},
        {title: "Last name", field: "last_name"},
        {title: "email", field: "email"}
    ]
    const [data, setData] = useState([]); //table data
    useEffect(() => { 
        api.get("/users")
            .then(res => {               
                setData(res.data.data)
            })
            .catch(error=>{
                console.log("Error")
            })
        }, [])

    return (
        <div>
            <h1>DashBoard</h1>
            <MaterialTable
                title="User data from remote source"
                columns={columns}
                data={data}
                options={{ 
                    pageSize: 10,
                    pageSizeOptions: [5, 10, 20],
                }}
            />
        </div>
    )
}

export default DashBoard
