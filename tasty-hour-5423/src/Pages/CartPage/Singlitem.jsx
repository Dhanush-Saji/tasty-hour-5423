import { isDisabled } from "@testing-library/user-event/dist/utils";
import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getdata, Deletdata } from "../../Redux/cartReducer/action";

import "./Singlitem.css";
import axios from "axios";
export const Singlitem = ({ el }) => {
  const [count, setCount] = useState(1);
  const [price,setPrice]=useState(el.price)
  const dispatch = useDispatch();

  const Handleremove = () => {
    dispatch(Deletdata(el.id)).then(() => dispatch(getdata()));
  };
  const handleupdate = () => {
    axios
      .patch(`https://finalcart.onrender.com/cart/${el.id}`, {
        ...el,
        qty: count,
      })
      .then((e) => console.log(e.data))
      .then(()=>dispatch(getdata()))
  };

  return (
    <>
      <div className="itembody">
        <div className="imgbody">
          <img src={el.image} alt="" className="itemimg" />
          <div className="titalbody">
            <h1 className="tital2344">{el.name}</h1>
            <p className="removebtn" onClick={Handleremove}>
              Remove
            </p>
          </div>
          <div className="qtybody">
            <button
              className="qtyadustbtn2335"
              onClick={() => {
                setCount(count - 1)
                handleupdate()
              }}
              disabled={count == 1 ? true : false}
            >
              -
            </button>
            <h1>{count}</h1>
            <button
              className="qtyadustbtn2335"
              onClick={() => {
                setCount(count + 1)
                handleupdate()
              }}
            >
              +
            </button>
          </div>
        </div>
        <div className="pricebody">
          <div className="deliverybody123">
            <h2>Estimated delivery time 29 Jan 2023 </h2>
            <h2>07:24 PM</h2>
          </div>
          <div className="privhds3">
            <h1>₹ {el.price * count}</h1>
          </div>
        </div>
      </div>
      {/*    This is for the Responsive components..... /*/}
      <div className="resbody">
        <div className="resimggbody2376">
          <img src={el.images} alt="" className="resimg7654" />
          <div className="restitlbody8765">
            <h1 className="resmainheadingtitla324">{el.name}</h1>
            <h6 className="deliverydeatales2154">
              Estimated delivery time 22 Jan 2023{" "}
            </h6>
            <h6 className="deliverydeatales2154">07:24 PM</h6>
            <p className="removebtn" onClick={Handleremove}>
              Remove
            </p>
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
            <h1 className="resprice53647">₹ {el.price * count}</h1>
          </div>
        </div>
      </div>
    </>
  );
};
