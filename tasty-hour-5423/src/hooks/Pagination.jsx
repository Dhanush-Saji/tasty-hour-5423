import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import data from "../Data/db.json";
import Styles from "../ProductPageCss/Product.module.css";
import { useDispatch } from "react-redux";
import { pagination } from "../Redux/Product_redux/action";
const Pagination = () => {
  const dispatch = useDispatch();
  function handleClick(page) {
    dispatch(pagination(page));
  }
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        with: "90%",
        margin: "auto",
      }}
    >
      <nav aria-label="...">
        <ul class="pagination">
          <li class="page-item disabled">
            <a class="page-link">Previous</a>
          </li>
          {data.pagination.map((page, i) => (
            <li class="page-item" key={i}>
              <a
                class="page-link"
                href="#"
                onClick={() => {
                  handleClick(page.page);
                }}
              >
                {page.page}
              </a>
            </li>
          ))}

          <li class="page-item">
            <a class="page-link" href="#">
              Next
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;
