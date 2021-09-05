import React, { useState, useEffect } from 'react';
import MaterialTable from "material-table";
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import { useSelector } from "react-redux";
import Avatar from '@material-ui/core/Avatar';
import styled from "styled-components";
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import { forwardRef } from 'react';
import Remove from '@material-ui/icons/Remove';
import Check from '@material-ui/icons/Check';
import Clear from '@material-ui/icons/Clear';
import Grid from '@material-ui/core/Grid';
//const response={data:[{"id":1,"Day":"sunday","9":"x","10":"y","11":"z","12":"a","13":"b","14":"c","15":"d","16":"e","17":"f"},{"id":2,"Day":"Monday","9":"x","10":"y","11":"z","12":"a","13":"b","14":"c","15":"d","16":"e","17":"f"},{"id":3,"Day":"Tuesday","9":"x","10":"y","11":"z","12":"a","13":"b","14":"c","15":"d","16":"e","17":"f"},{"id":4,"Day":"wednesday","9":"x","10":"y","11":"z","12":"a","13":"b","14":"c","15":"d","16":"e","17":"f"},{"id":5,"Day":"Thrusday","9":"x","10":"y","11":"d","12":"e","13":"b","14":"c","15":"d","16":"e","17":"f"},{"id":6,"Day":"Friday","9":"x","10":"y","11":"d","12":"e","13":"b","14":"c","15":"d","16":"e","17":"f"},{"id":7,"Day":"Saturday","9":"x","10":"y","11":"d","12":"e","13":"b","14":"c","15":"d","16":"d","17":"e"}]}
const response={data:[{"id":1,"Day":"sunday"},{"id":2,"Day":"Monday"},{"id":3,"Day":"Tuesday"},{"id":4,"Day":"wednesday"},{"id":5,"Day":"Thrusday"},{"id":6,"Day":"Friday"},{"id":7,"Day":"Saturday"}]}

function Table() {
    var i=9;
    var l = 0;
    var columns=[
        {title: "Day", field: "Day"}];
     // 
    // 
    for (i;i<18;i++){
        //console.log(l)
        for (l=20;l<61;l+=20){ 
            console.log("l==="+l)
            const up_data = {title: `${i}.${l}`, field: `${i}.${l}`}
            console.log(up_data)
            console.log(i)
            columns.push(up_data)
            //
        }
        l = 0
        //i = i+1
        console.log(i)
    }
    
    
    console.log("columns-----"+columns)
    const [data, setData] = useState([]); //table data
    var list_day
    useEffect(() => { 
                setData(response.data)
                console.log("respinjfdsfhdslf"+response.data)
                    }, [])
    
    


    
        return (
                <div>
                    <h1>Table -- User</h1>
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
        

    
export default Table