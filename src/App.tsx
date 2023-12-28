
import './App.css'
import Header from "./components/layout/Header.tsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./views/Home.tsx";
import Customer from "./views/Customer.tsx";
import Product from "./views/Product.tsx";
import Order from "./views/Order.tsx";

function App() {


  return (
    <div>
        <BrowserRouter>
            <Header/>
            <Routes>
                {<Route path={"/"} element={<Home/>}/>}
                {<Route path={"/customer"} element={<Customer/>}/>}
                {<Route path={"/product"} element={<Product/>}/>}
                {<Route path={"/order"} element={<Order/>}/>}
            </Routes>
        </BrowserRouter>

    </div>
  )
}

export default App
