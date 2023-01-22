import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import data from "../Data/db.json";
import Styles from "../ProductPageCss/Product.module.css";
import { useDispatch } from "react-redux";
import { pagination } from "../Redux/Product_redux/action";
import { useState } from "react";
const Pagination = () => {
  const [pagedata, setpageData] = useState(0);
  const [pagedata1, setpageData1] = useState(pagedata);
  const [Active,setActive]=useState(false)
  const dispatch = useDispatch();
  function handleClick(page) {
    dispatch(pagination(page));
    setpageData(page + 1);
    setActive(true)
  }
  function locatetonext() {
    console.log(pagedata1);
    dispatch(pagination(pagedata1));
    const page = pagedata1;
    setpageData1(page + 1);
  }
  
  return (
    <div>
      <nav aria-label="...">
        <ul className="pagination">
          <li className="page-item disabled">
            <a className={Styles.pagination}>Previous</a>
          </li>
          {data.pagination.map((page, i) => (
            <li className="page-item" key={i}>
              <a
                style={{
                  border: "1px solid grey",
                  padding: "8px 15px 8px 15px",
                  marginLeft: "15px",
                
                }}
                href="#"
                onClick={() => {
                  handleClick(page.page);
                }}
                >
                {page.page}
              </a>
            </li>
          ))}

          <li className="page-item" onClick={locatetonext}>
            <a className={Styles.pagination} href="#" >
              Next
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;
