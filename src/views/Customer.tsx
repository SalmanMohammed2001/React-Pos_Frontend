function Customer(){
    return(
        <div className="container">
            <div className="row pt-4">
                <div className="col-12 col-sm-6 col-md-3">
                    <label htmlFor="nic">Nic</label>
                    <input type="text" name="nic" id="nic" className="form-control"/>
                </div>
                <div className="col-12 col-sm-6 col-md-3">
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" id="name" className="form-control"/>
                </div>

                <div className="col-12 col-sm-6 col-md-3">
                    <label htmlFor="address">Address</label>
                    <input type="text" name="address" id="address" className="form-control"/>
                </div>

                <div className="col-12 col-sm-6 col-md-3">
                    <label htmlFor="salaey">Salary</label>
                    <input type="text" name="salary" id="salary" className="form-control"/>
                </div>
                <div className="col-12  mt-3">
                 <button className="btn btn-primary col-12">Save customer </button>
                </div>
            </div>
        </div>
    )
}

export default Customer