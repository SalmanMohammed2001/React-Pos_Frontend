import {Link} from "react-router-dom";


function Header(){
    return(
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <div className="navbar-brand" >
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Wattpad-logo-vector.svg/1200px-Wattpad-logo-vector.svg.png" alt=""
                             className={'logo'}/>
                    </div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
                            aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to={"/"}>Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={"/customer"}>customer</Link>
                            </li>
                            <li className="nav-item">
                                <Link to={"/product"} className="nav-link" >Product</Link>
                            </li>
                            <li className="nav-item">
                                <Link to={"/order"} className="nav-link " aria-disabled="true">Order</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export  default Header;

