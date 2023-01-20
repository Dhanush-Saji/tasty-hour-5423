import React from "react";
import "./Cart.css";
import { Singlitem } from "./Singlitem";
import { Loader } from "./Loader";
import { Navigate, useNavigate } from "react-router-dom";
const CartPage = () => {
  const navigate=useNavigate()
  return (
    <div className="Cartbody">
      <div className="carthead">
        <h1>My Cart(3 items)</h1>
        <h1>Total Payable : ₹ 1373.8</h1>
      </div>
      <div className="listheading">
        <div className="subhead">
          <h1>Item Details</h1>
          <h1>Quantity</h1>
        </div>
        <div className="subhead">
          <h1>Delivery</h1>
          <h1>Price</h1>
        </div>
      </div>

      <div className="allcartprod">
        <Singlitem />
        <Singlitem />
        <Singlitem />
      </div>
      <div className="nfjhfhthckdkkjd4">
        <div className="addressbody87">
          <h1 className="Addheadingcalss34">Dellivery To:</h1>
          <p className="adresdescripton47">
           No Adress Added yet...
          </p>
        </div>
        <div className="payssbody87">
          <h1 className="Addheadingcalss34">PRICE DETAILS</h1>
          <div className="finalpric546"><h1>Price</h1><h1>₹2354</h1></div>
          <div className="finalpric546_2"><h1>SubTotal</h1><h1>₹2354</h1></div>
          <div className="palceorderbtn87" onClick={()=>navigate("/checkout")}>Place Order</div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
