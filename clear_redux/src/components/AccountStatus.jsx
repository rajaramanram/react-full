import React from 'react';
import {useSelector} from 'react-redux';

function AccountStatus() {
    const isSavingsAccount = useSelector(state=>state.isSavingsAccount)
    return (
        <div>
            <h1>{isSavingsAccount?"Savings ACCOUN":"CheckingsAccount"}</h1>
        </div>
    )
}

export default AccountStatus
