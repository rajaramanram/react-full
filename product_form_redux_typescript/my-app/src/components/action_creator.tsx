import {
    product_get,
    product_post,
    product_error
} from "./productReducer";
import axios from "axios";


const API_URL = "http://localhost:9001";



const product_axios = (request:object) => {
    console.log("login_axios running")
    return axios
        .post(API_URL + "/marketdb",request)
        .then((response) => {
        if (response.data) {
            
            console.log(response.data+"responsedata")
            return response.data;
        }
        }).catch((error)=>{
            console.log(error)
        });
};

export const get_product_api = (request:object) => (dispatch:any) => {
    return product_axios(request).then(
        (response:any) => {            
            dispatch({
                type: product_post,
                payload:  response.data ,
            });
            console.log("product_success data="+ response.data)

            return Promise.resolve();
        },
        (error) => {
            const message =
                (error.response &&
                error.response.data &&
                error.response.data.message) ||
                error.message ||
                error.toString();
            console.log(message)

            dispatch({
                type: product_error,
            });
        

            return Promise.reject();
        }
    );
};



const product_details_axios = () => {
    console.log("product_details running")
    return axios
        .get(API_URL + "/marketdb")
        .then((response) => {
        if (response) {
            
            console.log(response+"responsedata")
            return response;
        }
        }).catch((error)=>{
            console.log(error)
        });
};


export const get_product_details = () => (dispatch:any) => {
    return product_details_axios().then(
        (response:any)=> {
            dispatch({
                type: product_get,
                payload:  response.data ,
            });
            console.log("product_success data="+response.data)

            return Promise.resolve();
        },
        (error) => {
            const message =
                (error.response &&
                error.response.data ) ||
                error.message ||
                error.toString();
            console.log(message)

            dispatch({
                type: product_error,
            });
        

            return Promise.reject();
        }
    );
};

