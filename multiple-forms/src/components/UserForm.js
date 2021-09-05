import React, {Component} from 'react';
import FormUserDetails from './FormUserDetail';

export class UserForm extends Component{
    state = {
        step: 1,
        firstname: '',
        lastname: '',
        email: '',
        city: '',
        occupation: '',
        bio:''
    }
    //proceed to next step
    nextstep = () =>{
        const {step} = this.state;
        this.setState({
            step:step+1
        });
    }
    //proceed to prev step
    prevstep = () =>{
        const {step} = this.state;
        this.setState({
            step:step-1
        });
    }
    //handle field change
    handlechange = input =>e=>{
        this.setState({[input]:e.target.value});
    }
    render(){
        const {step} = this.state;
        const {firstname,lastname,email,occupation,city,bio} =this.state;
        const values = {firstname,lastname,email,occupation,city,bio}
        switch(step){
            case 1:
                return(
                    <FormUserDetails 
                    nextstep = {this.nextstep}
                    handlechange = {this.handlechange}
                    values = {values}/>
                )
            case 2:
                return(
                    <h1>Form Personl Details</h1>
                )
            case 3:
                return(<h1>Form confirm Details</h1>)
            case 4:
                return(<h1>Success</h1>)
        }
    }
}


export default UserForm