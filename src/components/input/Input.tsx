import {HTMLInputTypeAttribute} from "react";


interface data{
    label:string,
    name:string,
    placeholder:string,
    types:HTMLInputTypeAttribute | undefined,

}

function Input(prpos:data){

    return(
        <div className="form-group">
            <label htmlFor={prpos.name}>{prpos.label}</label>
            <input type={prpos.types} className="form-control" id={prpos.name} name={prpos.name} placeholder={prpos.placeholder}/>
        </div>

    )
}

export default Input