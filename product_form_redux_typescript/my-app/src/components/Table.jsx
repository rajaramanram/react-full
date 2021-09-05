import React,{useEffect,useState} from 'react';
import { useDispatch, useSelector } from "react-redux";
import {RootState } from './store_redux';
import MaterialTable from "material-table";

import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import { forwardRef } from 'react';
import Remove from '@material-ui/icons/Remove';
import Check from '@material-ui/icons/Check';
import Clear from '@material-ui/icons/Clear';
import English from './en.json';
import Tamil from './tn.json';
import {IntlProvider} from 'react-intl';
import {Fragment} from 'react';



/*const tableIcons = {

    Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
    Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
    
    Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />)

};*/

function Table() {
    
    const [locale,setLocale] = useState("");
    //const [lang, setLang] = useState(Tamil);
    //const { productList } = useSelector( (state: RootState) => state.ProductReducer);
    

    console.log ("paylod --------");
    //console.log(productList);
    const [data, setData] = useState([]); //table data
    //const data = productList
    console.log(data+"==========================data")
    const [columns, setColumns] = useState([]);

    
    //product_id":1,"product_name":"cake","product_price":10,"selling_price":20,"warning":30,
    /*var columns=[
        {title: "PRODUCT ID", field: "product_id"},
        {title: "PRODUCT NAME", field: "product_name"},
        {title: "PRODUCT PRICE", field: "product_name"},
        {title: "SELLING PRICE", field: "product_name"},
        
        
        ]8/
    
    /*useEffect(() => { 
        console.log("use Effect running")

        setData(productList)
        console.log(data+"==========================data")
    }, [])*/
    // icons={tableIcons}
    //<h1>table component</h1>
    const changeLang = (getLang)=>{
        setLocale(getLang);
        switch(getLang){
            case "en-US":
                //setLang(English);
                //console.log(English)
                
                    setColumns(English.columns)
                    console.log("columns"+columns)
                    setData(English.data)
                
                break;
                
            case "en":
                //setLang(Tamil);
                //console.log(Tamil)
                setColumns(Tamil.columns)
                console.log("columns"+columns)
                setData(Tamil.data)
                break;
            
            default:
                //setLang(English)
                setColumns(English.columns)
                console.log("default columns"+columns)
                setData(English.data)
                break;


            
        }
    }
    return (
        
            <IntlProvider locale={locale}>
            <div>
            <MaterialTable
                        columns={columns}
                        data={data}
                        options={{ 
                            pageSize: 10,
                            pageSizeOptions: [5, 10, 20],
                        }}
            />
            <button type='submit' className='btn btn-primary' onClick={()=>changeLang("en-US")}>English</button>
            <button type='submit' className='btn btn-danger'onClick={()=>changeLang("en")}>Tamil</button>

        </div>
        </IntlProvider>
    )
}

export default Table




