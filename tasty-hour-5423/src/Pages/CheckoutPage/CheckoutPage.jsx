import React,{useState} from "react";
import "./Chekout.css";

const CheckoutPage = () => {
  const  [poup,Setpopup]=useState(true)

  const Toglepoup=() => {
    Setpopup(!poup)
  }
  return (
    <div className="chceckout_body">
      <div className="adresscontaner">
        <p>Step 1</p>
        <h1>Shiping Details</h1>

        <p>Ship To</p>
        <button onClick={Toglepoup}>Change Address</button>
        <div className={poup?"modal":"closedmodal"}>
          <div className="modalcontent">
            <div onClick={Toglepoup} className="closebtn123">Close</div>
            <h1 className="addheadingmodal">Add New Address</h1>
            <div className="modalinputcontainer2"><input type="text" placeholder="First Name"/><input type="text" placeholder="Last Name"/></div>
            <div className="modalinputcontainer2"><input type="text" placeholder="Mobail No "/><input type="text" placeholder="Email"/></div>
            <div className="modalinputcontainer2"><input type="text" placeholder="Country"/><input type="text" placeholder="Pincode"/></div>
            <div className="modalinputcontainer2"><input type="text" placeholder="City/District/Town"/><input type="text" placeholder="State"/></div>
            <textarea placeholder="Adress" cols="75" rows="7" className="sdrtshfsh"></textarea>
            <div className="addsavignbtn ">SAVE ADDRESS</div>
          </div>
          

        </div>
      </div>
      <div className="paymentcontaner">
      
        <p>Step 1</p>
        <h1>Payment <span>You Pay :₹ 1867.00</span></h1>
      </div>
      <div className="cartitemcontaner"></div>
    </div>
  );
};

export default CheckoutPage;
