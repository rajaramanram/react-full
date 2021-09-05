import React from 'react';
import AccountStatus from './components/AccountStatus';
import Banking from './components/Banking';
import Auth from './components/Auth';
import Balance from './components/Balance';

function App() {
    return (
        <div>
            <Auth/>
            <Balance/>
            <Banking/>
            
            <AccountStatus/>

        </div>
    )
}

export default App
