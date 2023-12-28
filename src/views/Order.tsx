import Input from "../components/input/Input.tsx";
import React from "react";

function Order(){

    const bottomContext:React.CSSProperties={
        width:'100%',
        display:'flex',
        alignContent:'center',
        justifyContent:'space-between'
    }

    const totalText:React.CSSProperties={
        color:'red'
    }
    return(
        <div className="container pt-3">
            <div className="row ">
                <div className="col-12 col-sm-6 col-md-3 mb-3">
                    <div className="form-group">
                        <label htmlFor="customer">Select Customer</label>
                        <select  id='customer' className='form-control'>
                            <option value="#" disabled  defaultValue='Use Option'>Use Option</option>
                            <option value="#">Customer 1</option>
                            <option value="#">Customer 2</option>
                        </select>
                    </div>
                </div>
                <div className="col-12 col-sm-6 col-md-3 mb-3">

                    <Input
                        label={"Customer Name"}
                        name={"customerName"}
                        placeholder={" "}
                        types={"text"}/>

                </div>
                <div className="col-12 col-sm-6 col-md-3 mb-3">
                    <Input
                        label={"Customer Address"}
                        name={"customerAddress"}
                        placeholder={""}
                        types={"text"}/>
                </div>
                <div className="col-12 col-sm-6 col-md-3 mb-3">
                    <Input
                        label={"Customer Salary"}
                        name={"customerSalary"}
                        placeholder={""}
                        types={"number"}/>
                </div>
            </div>
            <hr/>
            <div className="row">
                <div className="col-12 col-sm-6 col-md-3 mb-3 mt-2">
                    <div className="form-group">
                        <label htmlFor="product">Select Product</label>
                        <select  id='product' className='form-control'>
                            <option value="#" disabled  defaultValue='Use Option'>Use Option</option>
                            <option value="#">Product 1</option>
                            <option value="#">Product 2</option>
                        </select>
                    </div>
                </div>

                <div className="col-12 col-sm-6 col-md-3 mb-3 mt-2">
                    <Input
                        label={"Product Description"}
                        name={"description"}
                        placeholder={""}
                        types={"text"}/>
                </div>
                <div className="col-12 col-sm-6 col-md-2  mb-3 mt-2">
                    <Input
                        label={"Unite Price"}
                        name={"unitePrice"}
                        placeholder={""}
                        types={"number"}/>

                </div>
                <div className="col-12 col-sm-6 col-md-2 mb-3 mt-2">
                    <Input
                        label={"Qty On Hand"}
                        name={"qtyOnHand"}
                        placeholder={""}
                        types={"number"}/>
                </div>

                <div className="col-12 col-sm-6 col-md-2 mb-3 mt-2">
                    <Input
                        label={"Qty"}
                        name={" qty"}
                        placeholder={""}
                        types={"number"}/>
                </div>
            </div>
            <br/>
            <div className="row">
                <div className="col-12">
                    <button className={"btn btn-primary col-12"}> Add Product</button>
                </div>
            </div>
            <hr/>
            <div className="row">
                <div className="col-12">
                    <table className='table table-hover table-bordered'>
                        <thead>
                        <tr>
                            <th>#Id</th>
                            <th>Product Name</th>
                            <th>unite Price</th>
                            <th>qty</th>
                            <th>Total</th>
                            <th>Delete</th>

                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>#1001</td>
                            <td>product 1</td>
                            <td>250</td>
                            <td>50.00</td>
                            <td>5000.00</td>
                            <td>
                                <button className='btn btn-outline-danger btn-sm'>Delete</button>
                            </td>
                        </tr>
                        </tbody>
                    </table>

                    <br/>

                    <div className="bottom-context" style={bottomContext}>

                        <div className="total-outer" style={totalText}>
                            <h1>
                                Total:2500
                            </h1>
                        </div>
                        <div className="place-order-button-context">
                            <button className='btn btn-primary '>Place Order</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Order