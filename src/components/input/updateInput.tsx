import {HTMLInputTypeAttribute} from "react";

interface data{
    type:HTMLInputTypeAttribute | undefined,
    name:string,
    defaultValue:HTMLInputTypeAttribute | undefined,
    // eslint-disable-next-line @typescript-eslint/ban-types
    callBack: Function

}

function UpdateInput(props:data){
    return(
        <div className={"form-group"}>
            <input type={props.type} className={"form-control"} name={props.name} id={props.name} defaultValue={props.defaultValue}
                   onChange={(e)=>props.callBack(e.target.value)}/>
        </div>
    )
}

export default UpdateInput;