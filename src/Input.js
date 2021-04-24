import React from "react";

function Input(props){
    return(
        <div className="input">
                <h1>TOKEN</h1>
                <input 
                    type={props.inputType} 
                    placeholder={props.placeholder}
                    value={props.value}
                    />
        </div>
    )
}
export default Input;