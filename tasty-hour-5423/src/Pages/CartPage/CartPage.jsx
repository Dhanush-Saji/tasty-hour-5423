import React,{useEffect,useState} from "react";
import "./Cart.css";
import { Singlitem } from "./Singlitem";
import { Loader } from "./Loader";
import { Navigate, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {getdata,Deletdata} from "../../Redux/cartReducer/action"
import axios from 'axios'

const CartPage = () => {
  const navigate=useNavigate()
 const dispatch=useDispatch()

 const [value, setValue] = useState("");

  const [subtotal, setSubtotal] = useState(0);
 let data = useSelector((store) => store.CartReducer.cartData);
 const [cartShowdata,setcartShowdata] = useState(data)

 let total = 0;
 data.forEach((ele) => {

    total += (ele.price*ele.qty) ;
  
});

useEffect(()=>{
 if(data.length===0){
   dispatch(getdata())
 }
 

},[dispatch,data.length])


 


  return (
    <div className="Cartbody">
      <div className="carthead">
        <h1>My Cart({data.length} items)</h1>
        <h1>Total Payable : ₹ {total}</h1>
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
       {data.length>0&&data.map((item)=>{
        return <Singlitem key={item.id} el={item}/>
       })}
    
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
          <div className="finalpric546"><h1>Price</h1><h1>₹{total}</h1></div>
          <div className="finalpric546_2"><h1>SubTotal</h1><h1>₹{total}</h1></div>
          <div className="palceorderbtn87" onClick={()=>navigate("/checkout")}>Place Order</div>
        </div>
      </div>
    </div>
  );
};


export default CartPage;
