import Input from "../components/input/Input.tsx";
import {useState} from "react";
import axios from "axios";


interface Customer {
    _id:string,
    nic:string,
    name:string,
    address:string,
    salary:number
}

function Customer() {

    const [nic, setNic] = useState('')
    const [name, setName] = useState('')
    const [address, setAddress] = useState('')
    const [salary, setSalary] = useState<number | "">('')


    const saveCustomer= async ()=>{
        console.log(nic,name,address,salary)
     const response= await  axios.post('http://localhost:3000/api/v1/customers/create',{
            nic,name,address,salary
        })
        console.log(response)
    }

    return (
        <div className="container pt-3">
                <div className="row">
                    <div className="col-12 col-sm-6 col-md-3 mb-3">
                        <Input
                            label={"Customer Nic"}
                            name={"customerNic"}
                            placeholder={""}
                            types={"text"}
                        callBack={setNic}/>
                    </div>
                    <div className="col-12 col-sm-6 col-md-3 mb-3">

                            <Input
                                label={"Customer Name"}
                                name={"customerName"}
                                placeholder={" "}
                                types={"text"}
                                callBack={setName}/>

                    </div>
                    <div className="col-12 col-sm-6 col-md-3 mb-3">
                        <Input
                            label={"Customer Address"}
                            name={"customerAddress"}
                            placeholder={""}
                            types={"text"}
                            callBack={setAddress}/>
                    </div>
                    <div className="col-12 col-sm-6 col-md-3 mb-3">
                        <Input
                            label={"Customer Salary"}
                            name={"customerSalary"}
                            placeholder={""}
                            types={"number"}
                            callBack={setSalary}
                        />
                    </div>
                </div>

                <div className="row mt-3 ">
                    <div className="col-12 mb-3">
                        <button className='btn btn-primary col-12' type="button" onClick={saveCustomer}>Save Customer</button>
                    </div>
                </div>
                <hr/>
                <div className="row mt-3">
                    <div className="col-12 mb-3">
                        <form className="col-12">
                            <input type="search" className='form-control' placeholder='Search Customer'/>
                        </form>
                    </div>
                </div>

            <div className="row mt-3">
                <div className="col-12">
                    <table className="table table-hover table-bordered">
                        <thead>
                        <tr>
                            <th>#Id</th>
                            <th>Nic</th>
                            <th>Name</th>
                            <th>Address</th>
                            <th>Salary</th>
                            <th>Delete</th>
                            <th>Update</th>
                        </tr>
                        </thead>

                        <tbody>
                        <tr>
                            <td>#1001</td>
                            <td>9524798258v</td>
                            <td>nimal</td>
                            <td>colombo</td>
                            <td>5000.00</td>
                            <td>
                                <button className="btn btn-outline-danger btn-sm "> Delete</button>
                            </td>
                            <td>
                                <button className="btn btn-outline-success btn-sm "> Update</button>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>


        </div>
    )
}

export default Customer