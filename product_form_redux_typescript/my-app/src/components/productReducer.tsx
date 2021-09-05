export const product_get = "PRODUCT_GET";
export const product_error = "PRODUCT_ERROR"
export const product_post = "PRODUCT_POST";


//ACTIONS
export const product_get_actions = ()=>({type:product_get});
const product_error_actions =()=>({type: product_error});
export const product_post_actions =()=>({type: product_post});

const initial_value={
    productList:[]
}
//state = "hjhjhjjm"
//reducer
export const ProductReducer=(state:any=initial_value,actions:any)=>{
    switch(actions.type){
        case product_get:
            return {
                ...state,
                productList: actions.payload
                
            }
        case product_post:
                return {
                    ...state
                }
        case product_error:
            return state = "erroroorohjhkuh"
        default:
                return{
                    ...state
                }
    }

}