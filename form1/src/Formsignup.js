import React from 'react'
import useForm from './useForm';
import validate from './validateInfo';
import './Form.css';

const Formsignup = (submitForm) => {
    const {handleChange,values, handleSubmit,errors} = useForm(submitForm,validate);
    return (
        <div className="form-contnet-right">
            <form className="form" onSubmit={handleSubmit}>
                <h1>Get STarted today, Fill the informations Below</h1>
                <div className="form-inputs">
                    <label htmlFor="username" className="form-label">
                        UserName
                    </label>
                    <input id="username" type="text" name="username" className="form-input" placeholder="Enter Name" value={values.username} onChange={handleChange}/>
                    {errors.username && <p>{errors.username}</p>}
                </div>
                <div className="form-inputs">
                    <label htmlFor="email" className="form-label">
                        Email
                    </label>
                    <input id="email" type="email" name="email" className="form-input" placeholder="Enter Email" value={values.email} onChange={handleChange}/>
                    {errors.email && <p>{errors.email}</p>}
                </div>
                <div className="form-inputs">
                    <label htmlFor="password" className="form-label">
                        Password
                    </label>
                    <input id="password" type="password" name="password" className="form-input" placeholder="Enter password" value={values.password} onChange={handleChange}/>
                    {errors.password && <p>{errors.password}</p>}
                </div>
                <div className="form-inputs">
                    <label htmlFor="password2" className="form-label">
                        Password2
                    </label>
                    <input id="password2" type="password" name="password2" className="form-input" placeholder="Enter password2" value={values.password2} onChange={handleChange}/>
                    {errors.password2 && <p>{errors.password2}</p>}
                </div>
                <button className="form-input-btn" type="submit">SIGN UP</button>
                <span className="form-inuput-login" >Already have an account <a href="#">LOGIN HERE</a></span>
            </form>
        </div>
    )
}

export default Formsignup
