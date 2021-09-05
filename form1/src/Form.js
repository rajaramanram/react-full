import React, {useState} from 'react'
import FormSuccess from './Formsuccess';
import Formsignup from './Formsignup'
const Form = () => {
    const [isSubmitted,setisSubmitted] = useState(false);
    function submitForm(){
        setisSubmitted(true);
    }
    return (
        <div>
            {!isSubmitted ? (<Formsignup submitForm={submitForm}/>):(<FormSuccess/>)}
        </div>
    )
}

export default Form
