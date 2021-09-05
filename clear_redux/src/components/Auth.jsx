import React from 'react'
import {useSelector} from 'react-redux'; 
function Auth() {
    const auth = useSelector(state =>state.auth)
    return (
        <div>
            <button className="btn btn-info">{auth.isLoggedIn ? "LOGOUT": "LOGIN"}</button>
        </div>
    )
}

export default Auth
