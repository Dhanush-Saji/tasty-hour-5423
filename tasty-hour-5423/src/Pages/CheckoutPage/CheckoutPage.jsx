import React, { useState } from "react";
import "./Chekout.css";
import { BsCreditCardFill } from "react-icons/bs";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from "@chakra-ui/react";
const CheckoutPage = () => {
  const [poup, Setpopup] = useState(false);

  const Toglepoup = () => {
    Setpopup(!poup);
  };
  return (
    <div className="chceckout_body">
      <div className="adresscontaner">
        <p className="stpetseterdjfgu">Step 1</p>
        <h1 className="contenerheading234">Shiping Details</h1>

        <p className="Shipto2586">Ship To</p>
        <button onClick={Toglepoup} className="adresschangerbtn">
          Change Address
        </button>
        <div className={poup ? "modal" : "closedmodal"}>
          <div className="modalcontent">
            <div onClick={Toglepoup} className="closebtn123">
              Close
            </div>
            <h1 className="addheadingmodal">Add New Address</h1>
            <div className="modalinputcontainer2">
              <input type="text" placeholder="First Name" />
              <input type="text" placeholder="Last Name" />
            </div>
            <div className="modalinputcontainer2">
              <input type="text" placeholder="Mobail No " />
              <input type="text" placeholder="Email" />
            </div>
            <div className="modalinputcontainer2">
              <input type="text" placeholder="Country" />
              <input type="text" placeholder="Pincode" />
            </div>
            <div className="modalinputcontainer2">
              <input type="text" placeholder="City/District/Town" />
              <input type="text" placeholder="State" />
            </div>
            <textarea
              placeholder="Adress"
              cols="75"
              rows="4"
              className="sdrtshfsh"
            ></textarea>
            <div className="addsavignbtn ">SAVE ADDRESS</div>
          </div>
        </div>
      </div>
      <div className="paymentcontaner">
        <p className="stpetseterdjfgu">Step 1</p>
        <h1 className="contenerheading234">
          Payment
          <span className="totalpriceinfo3098">| You Pay :₹ 1867.00</span>
        </h1>
        <h2 className="payopheadi34">Payment Option</h2>
        <Accordion>
          <AccordionItem className="dropdwnmodle098">
            <AccordionButton>
              <div className="paymentdetailcontener">
                <BsCreditCardFill />
                <h1>Debit Card</h1>
              </div>
            </AccordionButton>

            <AccordionPanel>
              <p className="formlabel">Card Number</p>
              <input placeholder="Card Number" className="paymentforminput3" />
              <p className="formlabel">Name On Card</p>
              <input placeholder="Name on card" className="paymentforminput3" />
              <p className="formlabel">Expiry Date</p>
              <div className="cardexpiredetailss">
                <input type="text" placeholder="Month" />
                <input type="text" placeholder="Year" />
                <input type="text" placeholder="CVV" />
              </div>
              <div className="paymentsubmitbtn979">PAY SECURELY ₹1867.00</div>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem className="dropdwnmodle098">
            <AccordionButton>
              <div className="paymentdetailcontener">
                <BsCreditCardFill />
                <h1>Credit Card</h1>
              </div>
            </AccordionButton>

            <AccordionPanel>
              <p className="formlabel">Card Number</p>
              <input placeholder="Card Number" className="paymentforminput3" />
              <p className="formlabel">Name On Card</p>
              <input placeholder="Name on card" className="paymentforminput3" />
              <p className="formlabel">Expiry Date</p>
              <div className="cardexpiredetailss">
                <input type="text" placeholder="Month" />
                <input type="text" placeholder="Year" />
                <input type="text" placeholder="CVV" />
              </div>
              <div className="paymentsubmitbtn979">PAY SECURELY ₹1867.00</div>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem className="dropdwnmodle098">
            <AccordionButton>
              <div className="paymentdetailcontener">
                <BsCreditCardFill />
                <h1>Net Banking</h1>
              </div>
            </AccordionButton>

            <AccordionPanel>
              <p>
                We will redirect to your bank website to authorize the payment.
                Your order will get confirmed post paymen
              </p>
              <select placeholder="Select Your bank" className="paymentselecttag234">
                <option value="">Select Your bank</option>
                <option value="SBI">State bank of India</option>
                <option value="SBI">Central bank of India</option>

                <option value="SBI">Bank of Badoda</option>
                <option value="SBI">ICICI</option>
                <option value="SBI">Bank of Maharashtra</option>  
                <option value="SBI">Kotak Mahindra</option>
                <option value="SBI">AXIS Bank</option>

              </select>
              <div className="paymentsubmitbtn979">PAY SECURELY ₹1867.00</div>
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem className="dropdwnmodle098">
            <AccordionButton>
              <div className="paymentdetailcontener">
                <BsCreditCardFill />
                <h1>UPI</h1>
              </div>
            </AccordionButton>

            <AccordionPanel>
            <p className="formlabel">Enter UPI ID</p>
              <input placeholder="yourname@upi" className="paymentforminput3" />
              <div className="paymentsubmitbtn979">PAY SECURELY ₹1867.00</div>
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem className="dropdwnmodle098">
            <AccordionButton>
              <div className="paymentdetailcontener">
                <BsCreditCardFill />
                <h1>Wallet</h1>
              </div>
            </AccordionButton>

            <AccordionPanel>
            <p>
                Select Your Wallet
              </p>
              <select placeholder="Select Your bank" className="paymentselecttag234">
                <option value="">Select Your Wallet</option>
                <option value="SBI">Airtel Payment Bank</option>
                <option value="SBI">Amazon Pay</option>

                <option value="SBI">Phone Pay</option>
                <option value="SBI">ICICI</option>
                <option value="SBI">Google Pay</option>  
                <option value="SBI">Paytm</option>
                <option value="SBI">Freecharge</option>

              </select>
              <div className="paymentsubmitbtn979">PAY SECURELY ₹1867.00</div>
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem className="dropdwnmodle098">
            <AccordionButton>
              <div className="paymentdetailcontener">
                <BsCreditCardFill />
                <h1>Cash On Dilivery</h1>
              </div>
            </AccordionButton>

            <AccordionPanel>
              <div>
                <p>Please pay a total amount of ₹ 1867.00 upon delivery</p>
              </div>
              <div className="paymentsubmitbtn979">PLACE ORDER</div>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </div>
      <div className="cartitemcontaner"></div>
    </div>
  );
};

export default CheckoutPage;
