const initalState = {
    balance:0,
    isSavingsAccount:false,
    isLogginedIn:false
}


export const bankingReducer = (state=initalState,action)=>{
    switch(action.type){
        case "DEPOSIT":
            console.log("DEPOSIT")
            //retur{n state+}
            return{...state,balance:state.balance + action.amount}
        case "WITHDRAW":
            console.log("WITHDRAW")
            //return state-action.amount
            return{...state,balance:state.balance - action.amount}
        case "COLLECT_INTEREST":
            console.log("COLLECT_INTEREST")
            return{...state,balance:state.balance *1.03}
            //return state*1.03
        case "DELETE_ACCOUNT":
            console.log("DELETE_ACCOUNT")
            return {...state,balance:0}
        case "TOGGLE_ACCOUNT":
            console.log("Toogle_ACCOUNT")
            return {...state,isSavingsAccount:!state.isSavingsAccount}
        default:
            return state
    
    }
    return state
    
}

