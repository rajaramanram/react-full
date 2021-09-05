import React, {useState} from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { product_post_actions } from './productReducer';
import { get_product_api } from './action_creator';
import { get_product_details } from './action_creator';
import { useHistory } from 'react-router-dom';
import {ProductReducer} from './productReducer';
import {RootState } from './store_redux';



function FunctionForm() {
    const [product_id,setProduct_Id]=useState(0);
    const [product_name,setProduct_Name]=useState('')
    const [product_price,setProduct_Price]=useState(0)
    const [selling_price,setSelling_Price]=useState(0)
    const [warning,setWarning]=useState(0)
    //const { productList } = useSelector( (state: RootState) => state.ProductReducer);
    const history = useHistory();

    //console.log ("paylod --------");
    //console.log(productList);
    
    //const selector = useSelector(state => state);
    //const dispatch = useDispatch();
    const product_idChange = (event:any) =>{
            setProduct_Id(
                event.target.value
            )
        }
    const product_nameChange = (event:any) =>{
            setProduct_Name(
                event.target.value
            )
        }
    const product_priceChange = (event:any) =>{
            setProduct_Price(
                event.target.value
            )
        }
    const selling_priceChange = (event:any) =>{
            setSelling_Price(
                event.target.value
            )
        }
    const warningChange = (event:any) =>{
            setWarning(
                event.target.value
            )
        }
    const handleSubmit = (event:any) =>{
            console.log("working submit")
            event.preventDefault();
            let request = {
                //product_id : (document.getElementById('product_id')as HTMLInputElement).value,
                product_id,
                product_name ,
                product_price ,
                selling_price ,
                warning 
            }
            console.log(product_id);
            console.log(product_name);
            console.log(product_price);
            console.log(selling_price);
            
            console.log(warning);
            //dispatch(get_product_api(request))
                
            //dispatch
            /*axios.post("http://localhost:9001/marketdb",request)
            .then(resp=>{
                //alert(resp.data.message);
                console.log(resp.data)
                //console.log("axios.running")
            }).catch(err =>{ 
                console.log(err)
            });*/
            //dispatch(product_post_actions())
        }
    const get_records = (event:any)=>{
        console.log("working get products")
        event.preventDefault();
        //dispatch(get_product_details())
        setTimeout(()=>history.push("/Table"),200);
        
    }
        
    
    return (
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Product Id:</label>
                    <input type='text' id='product_id' value={product_id} onChange={product_idChange}></input>
                </div>
                <div>
                    <label>Product Name:</label>
                    <input type='text' id='product_name' value={product_name} onChange={product_nameChange}></input>
                </div>
                <div>
                    <label>Product Price:</label>
                    <input type='text' id='product_price' value={product_price} onChange={product_priceChange}></input>
                </div>
                <div>
                    <label>Selling Price:</label>
                    <input type='text' id='selling_price' value={selling_price} onChange={selling_priceChange}></input>
                </div>
                <div>
                    <label>Warning:</label>
                    <input type='text' id='warning' value={warning} onChange={warningChange}></input>
                </div>
                <button type='submit' className='btn btn-primary' onClick={handleSubmit}>SUBMIT</button>
                <button type='submit' className='btn btn-danger'onClick={get_records}>GET PRODUCTS</button>
            </form>
        )
};



export default FunctionForm