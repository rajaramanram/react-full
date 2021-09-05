import React, { Component } from 'react';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import AppBar from '@material-ui/core/AppBar';
import TextField from '@material-ui/core/TextBar';
import RaisedButton from '@material-ui/core/RaisedButton';

export class FormUserDetail extends Component {
    continue = e =>{
        e.preventDefault();
        this.props.nextStep();
    }
    render() {
        const {values}= this.props;

        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="Enter User Details"/>
                    <TextField 
                        hintText="Enter your First Name"
                        floatingLabelText="First Name" 
                        onChange={handleChange('firstname')} 
                        defaultValue={values.firstname}
                    />
                    <br/>
                    <TextField 
                        hintText="Enter your Last Name"
                        floatingLabelText="Last Name" 
                        onChange={handleChange('lastname')} 
                        defaultValue={values.lastname}
                    />
                    <br/>
                    <TextField 
                        hintText="Enter your Email"
                        floatingLabelText="Email" 
                        onChange={handleChange('email')} 
                        defaultValue={values.email}
                    />
                    <br/>
                    <RaisedButton label="continue" primary={true}
                    style={styles.button} onClick={this.continue}/>
                    
                </React.Fragment>
            </MuiThemeProvider>
        )
    }
}

const styles = {
    button:{
        margin:15
    }
}

export default FormUserDetail
