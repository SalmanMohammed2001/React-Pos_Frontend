
interface  data{
    label:string,
    name:string,
    row:number,

}

function Textarea(props:data){

    return(
        <div className="form-group">
            <label htmlFor={props.name}>{props.label}</label>
            <textarea name={props.name} id={props.name}  rows={props.row} className={"col-12"}/>
        </div>
    )
}

export default Textarea;