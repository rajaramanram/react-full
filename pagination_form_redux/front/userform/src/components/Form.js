import React, {Component} from 'react';
import axios from 'axios';
class Form extends Component {
        constructor(props){
            super(props)
            this.state={
                username:'',
                password:''
            }
        }
        handleUsernameChange = (event) =>{
            this.setState({
                username: event.target.value
            })
        }
        handlePasswordChange = (event) =>{
            this.setState({
                password: event.target.value
            })
        }
        handleSubmit = (event) =>{
            console.log("working submit")
            event.preventDefault();
            let request = {
                username : document.getElementById('username').value,
                password : document.getElementById('password').value
            }
            console.log(request.username);
            console.log(request.password);
            axios.post("http://localhost:3000/login",request)
            .then(resp=>{
                alert(resp.data.message);
                console.log("axios.running")
            }).catch(err =>{ 
                console.log(err)
            });
        
        }
    render(){
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label>USERNAME:</label>
                    <input type='text' id='username' value={this.state.username} onChange={this.handleUsernameChange}></input>
                </div>
                <div>
                    <label>PASSWORD:</label>
                    <input type='password' id='password' value={this.state.password} onChange={this.handlePasswordChange}></input>
                </div>
                <button type='submit' className='btn btn-primary'>SUBMIT</button>
            </form>
        )
    }
}

export default Form