import React,{useState} from 'react';
import {useDispatch} from 'react-redux';


//const Banking=()=>{}

function Banking() {
    const [amount,setAmount]=useState("");
    const dispatch = useDispatch()
    const handleDeposit = ()=>{
        dispatch({type:"DEPOSIT",amount:parseInt(amount)})
    };
    const handleWithdraw = ()=>{
        console.log("withdraw")
        dispatch({type:"WITHDRAW",amount:parseInt(amount)})
    };
    const handleCollectInterest = ()=>{
            console.log("COLLECT+_INTEREST")
            dispatch({type:"COLLECT_INTEREST"})
    };
    const handleDelete = ()=>{
        console.log("DELETE")
        dispatch({type:"DELETE_ACCOUNT"})
    };
    const handleAccountChange = ()=>{
        console.log("withdraw")
        dispatch({type:"TOGGLE_ACCOUNT"})
    };
    return (
        <div className="form-group">
            <input value={amount} onChange={(e)=>setAmount(e.target.value)} type="text" className="form-control"/>
            <button onClick={handleDeposit} className="btn btn-success">Deposit</button>
            <button onClick={handleWithdraw} className="btn btn-primary">Withdraw</button>
            <button onClick={handleCollectInterest} className="btn btn-warning">Collect Interest</button>
            <button onClick={handleDelete} className="btn btn-danger">Delete</button>
            <button onClick={handleAccountChange} className="btn btn-secondary">Change Account Type</button>
        </div>
    )
}

const deposit = {
    type:"DEPOSIT",
    amount:78
}
const withdraw = {
    type:"WITHDRAW",
    amount:78
}
const collectionInterest = {
    type:"COLLECT_INTEREST"
}
const deleteAccount = {
    type:"DELETE_ACCOUNT"
}

export default Banking
