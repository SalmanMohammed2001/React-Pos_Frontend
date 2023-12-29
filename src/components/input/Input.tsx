import {HTMLInputTypeAttribute} from "react";




interface data{
    label:string,
    name:string,
    placeholder:string,
    types:HTMLInputTypeAttribute | undefined,
    // eslint-disable-next-line @typescript-eslint/ban-types
    callBack: Function

}

function Input(prpos:data){



    return(
        <div className="form-group">
            <label htmlFor={prpos.name}>{prpos.label}</label>
            <input type={prpos.types} className="form-control" id={prpos.name} name={prpos.name} placeholder={prpos.placeholder}
                   onChange={(e)=>prpos.callBack(e.target.value)}/>
        </div>

    )
}

export default Input