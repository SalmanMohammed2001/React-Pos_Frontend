function Customer(){
    return(
        <div className="container pt-3">
            <form action="" >
                <div className="row">
                    <div className="col-12 col-sm-6 col-md-3">
                        <div className="form-group">
                            <label htmlFor="customername">Customer Name</label>
                            <input type="text" className="form-control" id='customerName'/>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-3">
                        <div className="form-group">
                            <label htmlFor="customername">Customer Name</label>
                            <input type="text" className="form-control" id='customerName'/>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-3">
                        <div className="form-group">
                            <label htmlFor="customerAddress">Customer Address</label>
                            <input type="text" className="form-control" id='customerAddes'/>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-3">
                        <div className="form-group">
                            <label htmlFor="customerSalary">Customer Salary</label>
                            <input type="text" className="form-control" id='customerSalary'/>
                        </div>
                    </div>
                </div>

                <div className="row mt-3">
                    <div className="col-12">
                        <button className='btn btn-primary col-12' type="button">Save Customer</button>
                    </div>
                </div>
                <hr/>
                <div className="row mt-3">
                    <div className="col-12">
                        <form className="col-12">

                            <input type="search" className='form-control' placeholder='Search Customer'/>
                        </form>
                    </div>
                </div>
            </form>
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