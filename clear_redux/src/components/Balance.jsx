import React from 'react';

import {useSelector} from 'react-redux';

function Balance() {
    const balance = useSelector(state=>state.balance)
    console.log("balance"+balance)
    const store =  useSelector(state=>state)
    console.log(store) 
    return (
        <div>
            <h1>{balance}</h1>
        </div>
    )
}

export default Balance
