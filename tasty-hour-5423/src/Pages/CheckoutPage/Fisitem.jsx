import React from "react";
import "./Fi.css"

export const Fisitem = ({ el }) => {
  return (
    <div className="bodycontekdgjkjg">
      <div className="imgcontaine"> <img src={el.image} alt="" /></div>
      <div className="datacontainer"><h3>{el.name}</h3><p>Estimated delivery time 26 Jan 2023 09:59 PM</p></div>
    </div>
  );
};
