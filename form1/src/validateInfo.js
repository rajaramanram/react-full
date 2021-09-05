export default function validateInfo(values){
    let errors = {}

    if(!values.username.trim()){
        errors.username = "USER NAME REQUIRED"
    }
    if(!values.email){
        errors.email = "EMAIL REUIRED"
    }
    if(!values.password){
        errors.password = "PASSWORD REUIRED"
    }
    if(!values.password2){
        errors.password2 = "PASSWORD2 REUIRED"
    }
    return errors;

}