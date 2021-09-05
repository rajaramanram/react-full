import React, {useState} from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

const middleware = [thunk];






//redux
//action=======DELETER ACTIONS
//reducer==    CODE IMPLEMENTATION
//store====
//dispatch===== FOR USE OPERATION

//selector
const product_get = "PRODUCT_GET";
const product_error = "PRODUCT_ERROR"
const product_post = "PRODUCT_POST";


//ACTIONS
const product_get_actions = ()=>({type:product_get});
const product_error_actions =()=>({type: product_error});
const product_post_actions =()=>({type: product_post});

//reducer
const ProductReducer = (state:any,actions:any)=>{
    switch(actions.type){
        case product_get:
            return state = "hkuhkhjhjhkuh";
        case product_post:
                return state = "post";
        case product_error:
            return state = "erroroorohjhkuh"
        default:
            return state = "default";
    }

}

const store = createStore(ProductReducer);
// to find what happens in store subscribre
store.subscribe(()=>{console.log(store.getState())});

store.dispatch(product_get_actions)

/*const store_redux = createStore(
    ProductReducer,
    composeWithDevTools(applyMiddleware(...middleware))
);*/