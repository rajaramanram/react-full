import React, {useState,useEffect} from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

function FunctionForm({setToken}) {
    const [user,setUser]=useState('');
    const [password,setPassword]=useState('')
    const handleUsernameChange = (event) =>{
            setUser(
                event.target.value
            )
        }
    const handlePasswordChange = (event) =>{
            setPassword(
                event.target.value
            )
        }
    const handleSubmit = (event) =>{
            console.log("working submit")
            event.preventDefault();
            let request = {
                username : document.getElementById('username').value,
                password : document.getElementById('password').value
            }
            console.log(request.username);
            console.log(request.password);
            console.log(request)
            axios.post("http://localhost:9001/login",request)
            .then(resp=>{
                //alert(resp.data.message);
                console.log(resp.data)
                setToken(resp.data);
                //console.log("axios.running")
            }).catch(err =>{ 
                console.log(err)
            });
        
        }
    
        return (
            <form onSubmit={handleSubmit}>
                <div>
                    <label>USERNAME:</label>
                    <input type='text' id='username' value={user} onChange={handleUsernameChange}></input>
                </div>
                <div>
                    <label>PASSWORD:</label>
                    <input type='password' id='password' value={password} onChange={handlePasswordChange}></input>
                </div>
                <button type='submit' className='btn btn-primary'>SUBMIT</button>
            </form>
        )
};

FunctionForm.propTypes = {
    setToken: PropTypes.func.isRequired
}

export default FunctionForm