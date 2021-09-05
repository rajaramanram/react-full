import React, {useState} from 'react';

import { useDispatch, useSelector } from "react-redux";
import { login } from "../redux/actions/action_creator";
import { Redirect } from 'react-router-dom';
import { createBrowserHistory } from "history";

export const history = createBrowserHistory();

function FunctionForm({props}) {
    const [user,setUser]=useState('');
    const [password,setPassword]=useState('')
    const { isLoggedIn } = useSelector(state => state.auth);
    console.log("islogggined in"+isLoggedIn)
    const dispatch = useDispatch();
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
            //console.log(request)
            dispatch(login(request.username, request.password))
                .then(() => {
                    props.history.push("/DashBoard");
                    window.location.reload();
                    console.log("dispatch login check")
                })
                .catch((error) => {
                    console.log(error)
                    console.log("errorin form loading")
                });
        }
    if (isLoggedIn) {
        return <Redirect to="/DashBoard" />;
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



export default FunctionForm