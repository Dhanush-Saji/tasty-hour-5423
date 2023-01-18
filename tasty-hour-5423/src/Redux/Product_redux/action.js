import {
  post_request,
  post_success,
  post_error,
  get_request,
  get_success,
  get_error,
} from "./actionTypes";
import axios from "axios";
const REQUEST = () => {
  return {
    type: post_request,
  };
};
const SUCCESS = (payload) => {
  return {
    type: post_success,
    payload,
  };
};
const ERROR = () => {
  return {
    type: post_error,
  };
};

/* for Getting the whole Data */
const GET_PRODUCT_REQUEST = () => {
  return {
    type: get_request,
  };
};
const GET_PRODUCT_SUCCESS = (payload) => {
 
  return {
    type: get_success,
    payload,
  };
};
const GET_PRODUCT_ERROR = () => {
  return {
    type: get_error,
  };
};
// const postdata = (data) => (dispatch) => {
//   dispatch(REQUEST());

//   return axios
//     .post("http://localhost:8080/products", data)
//     .then((res) => {
//       console.log("adde", res.data);
//       SUCCESS(res.data);
//     })
//     .catch((err) => {
//       ERROR();
//     });
// };

/* For Getting the data */
const getdata = (dispatch) => {
  // console.log(data);
  dispatch(GET_PRODUCT_REQUEST());
  return axios
    .get("http://localhost:8080/products")
    .then((res) => {
      dispatch(GET_PRODUCT_SUCCESS(res.data));
    })
    .catch((err) => {
      dispatch(GET_PRODUCT_ERROR());
    });
};
export { getdata };
