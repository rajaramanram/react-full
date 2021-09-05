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

const tableIcons = {

    Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
    Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
    
    Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />)

};

const api = axios.create({
    baseURL: `https://reqres.in/api`
})
const db_api = axios.create({
    baseURL: `http://localhost:9001`
})
/*const response={data:[{"id":1,"email":"george.bluth@reqres.in","first_name":"George","last_name":"Bluth","age":20},{"id":2,"email":"janet.weaver@reqres.in","first_name":"Janet","last_name":"Weaver","age":29},{"id":3,"email":"emma.wong@reqres.in","first_name":"Emma","last_name":"Wong","age":16},{"id":4,"email":"eve.holt@reqres.in","first_name":"Eve","last_name":"Holt","age":17},{"id":5,"email":"charles.morris@reqres.in","first_name":"Charles","last_name":"Morris","age":23},{"id":6,"email":"tracey.ramos@reqres.in","first_name":"Tracey","last_name":"Ramos","age":15}]}*/

//<Avatar className={classes.orange}>N</Avatar>
//<Avatar className={classes.purple}>OP</Avatar>

const GreenAvatar = styled(Avatar)`
    background-color: green;
`;

const RedAvatar = styled(Avatar)`
    background-color: red;
`;
const AvatarContainer = styled.div`
    display: flex;
    margin-bottom: 14px;
    & > * {
        margin: 4px;
    }
`;


//rowData < 18 ? <RedAvatar/> : <GreenAvatar/>} }
//()=>{response.data.age < 18 ? <RedAvatar/>: <GreenAvatar/>
//${client.firstName}
//name={"age" <= 18  ? " " : "i"}
//<Avatar>{rowData.age}</Avatar>
function DashBoard() {
    const { user: currentUser } = useSelector((state) => state.auth);
    console.log("currentUSer:"+currentUser)
    var columns=[
        {title: "First name", field: "first_name"},
        {title: "Last name", field: "last_name"},
        {title: "Age", field:"age"},
        {title: "Avatar",render: (rowData) =>rowData.age < 18 ? <RedAvatar/> : <GreenAvatar/>  },
        {title: "email", field: "email"}
        ]
    const [data, setData] = useState([]); //table data

    /*useEffect(() => { 
                api.get("/users")
                    .then(res => {               
                        //setData(res.data.data)
                        setData(response.data)
                        console.log("respinjfdsfhdslf"+response.data)
                    })
                    .catch(error=>{
                        console.log("Error")
                    })
                }, [])*/
    
        useEffect(() => { 
                console.log("api running")
                db_api.get("/userdb")
                    .then(res => {
                        console.log("response_api_data"+res.data)               
                        setData(res.data)
                        
                    })
                    .catch(error=>{
                        console.log("Error")
                    })
                }, [])
    //--------------------------------Row_Update--------------
    //api.patch("/users/"+newData.id, newData)
    const handleRowUpdate = (newData, oldData, resolve) => {
        console.log(newData)
        console.log("handleRowUpdate __working")
        db_api.put("/userdb/", newData)
            .then(res => {
                console.log("response_db"+res)
            const dataUpdate = [...data];
            const index = oldData.tableData.id;
            dataUpdate[index] = newData;
            setData([...dataUpdate]);
            resolve()
            })
            .catch(error => {
                console.log("row---Update--Error="+error)
                resolve()})
        
        }


    //Delete data
    const handleRowDelete = (oldData, resolve) => {
        console.log("delete working")
        console.log(oldData.id)
        db_api.delete("/userdb/"+oldData.id)
            .then(res => {
            const dataDelete = [...data];
            const index = oldData.tableData.id;
            dataDelete.splice(index, 1);
            setData([...dataDelete]);
            resolve()
        })
        .catch(error => {
            console.log("delete_data_error=="+error)
            resolve()
        })
    }

    /*if (!currentUser) {
        return <Redirect to="/" />;
    }
    return(
        <div>
            <h1>DASHBOARD</h1>
        </div>
    )*/
    
    


    
    
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
                        icons={tableIcons}
                        editable={{
                            onRowUpdate: (newData, oldData) =>
                            new Promise((resolve) => {
                                handleRowUpdate(newData, oldData, resolve);
                                
                            }),
                            /*onRowAdd: (newData) =>
                            new Promise((resolve) => {
                                handleRowAdd(newData, resolve)
                            }),*/
                            onRowDelete: (oldData) =>
                            new Promise((resolve) => {
                                handleRowDelete(oldData, resolve)
                            }),
                        }}
                    />
                </div>
            )
        }
        


export default DashBoard
