import {
    LOGIN_SUCCESS,
    LOGIN_FAIL
} from "../constants/type";
import axios from "axios";

const API_URL = "http://localhost:9001";



const login_axios = (username, password) => {
    console.log("login_axios running")
    return axios
        .post(API_URL + "/login", {
            username,
            password,
        })
        .then((response) => {
        if (response.data.token) {
            sessionStorage.setItem("user", JSON.stringify(response.data));
            console.log(response.data+"responsedata")
            return response.data.token;
        }
        throw new Error();
        //console.log(response.data+"responsedata2")
        //return response.data;
        }).catch((error)=>{
            throw new Error();
        });
};

export const login = (username, password) => (dispatch) => {
    return login_axios(username, password).then(
        (data) => {
            dispatch({
                type: LOGIN_SUCCESS,
                payload: { user: data },
            });
            console.log("login_success data="+data)

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
                type: LOGIN_FAIL,
            });
        

            return Promise.reject();
        }
    );
};
