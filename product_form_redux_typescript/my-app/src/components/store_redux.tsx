import {ProductReducer} from './productReducer';
import {product_get_actions} from './productReducer';
import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
const middleware = [thunk];
//export const store = createStore(ProductReducer);
const rootReducer = combineReducers({
    ProductReducer: ProductReducer    
  });

export const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(...middleware))
);
export type RootState = ReturnType<typeof rootReducer>
// to find what happens in store subscribre
store.subscribe(()=>{console.log(store.getState())});


  



//store.dispatch(default)