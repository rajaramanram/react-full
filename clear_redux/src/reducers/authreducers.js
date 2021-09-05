const initalState = {
    isLoggedIn:false,
};
const authReducer = (state=initalState,action)=>{
    switch(action.type){
        case "TOGGLE_AUTH":
            return {...state,isLoggedIn:!state.isLoggedIn}
        default:
            return state;
    }
};

