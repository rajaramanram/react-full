import React from 'react'

function LabelInput(props:{labelname:any,input_id:any,input_value:any,inputonChange:any}) {
    return (
        <div>
            <label>{props.labelname}</label>
            <input type='text' id={props.input_id} value={props.input_value} onChange={props.inputonChange}></input>
        </div>
    )
}

export default LabelInput
