import { isDisabled } from "@testing-library/user-event/dist/utils";
import React, { useState } from "react";
import "./Singlitem.css";
export const Singlitem = () => {
  const [count, setCount] = useState(1);

  return (
    <>
      <div className="itembody">
        <div className="imgbody">
          <img
            src="https://cdn.plotch.io/image/upload/w_550/C/V/PLOspD07Fq1668492279_6b86b273ff34fce19d6b804eff5a3f5747ada4eaa22f1d49c01e52ddb7875b4b.png"
            alt=""
            className="itemimg"
          />
          <div className="titalbody">
            <h1 className="tital2344">Sea Side DIY Acrylic Painting</h1>
            <p className="removebtn">Remove</p>
          </div>
          <div className="qtybody">
            <button
              className="qtyadustbtn2335"
              onClick={() => setCount(count - 1)}
              disabled={count == 1 ? true : false}
            >
              -
            </button>
            <h1>{count}</h1>
            <button
              className="qtyadustbtn2335"
              onClick={() => setCount(count + 1)}
            >
              +
            </button>
          </div>
        </div>
        <div className="pricebody">
          <div className="deliverybody123">
            <h2>Estimated delivery time 22 Jan 2023 </h2>
            <h2>07:24 PM</h2>
          </div>
          <div className="privhds3">
            <h1>₹ {899.4 * count}</h1>
          </div>
        </div>
      </div>
      {/*    This is for the Responsive components..... /*/}
      <div className="resbody">
        <div className="resimggbody2376">
          <img
            src="https://cdn.plotch.io/image/upload/w_550/C/V/PLOspD07Fq1668492279_6b86b273ff34fce19d6b804eff5a3f5747ada4eaa22f1d49c01e52ddb7875b4b.png"
            alt=""
            className="resimg7654"
          />
          <div className="restitlbody8765">
            <h1 className="resmainheadingtitla324">
              Sea Side DIY Acrylic Painting
            </h1>
            <h6 className="deliverydeatales2154">Estimated delivery time 22 Jan 2023 </h6>
            <h6 className="deliverydeatales2154">07:24 PM</h6>
            <p className="removebtn">Remove</p>
          </div>
          
        </div>
        

        <div className="esqtybody4345">
          <div className="ressqtyadjuster">
          <button
              className="qtyadustbtn2335"
              onClick={() => setCount(count - 1)}
              disabled={count == 1 ? true : false}
            >
              -
            </button>
            <h1>{count}</h1>
            <button
              className="qtyadustbtn2335"
              onClick={() => setCount(count + 1)}
            >
              +
            </button>
          </div>
          <div className="respricebiody546978945">
          <h1 className="resprice53647">₹ {899.4 * count}</h1>
          </div>
        </div>
      </div>
    </>
  );
};
