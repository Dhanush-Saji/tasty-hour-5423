import {
  get_request,
  get_success,
  get_error,
  post_request,
  post_success,
  post_error
} from "./actionTypes";
import axios from "axios";
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

/* POST ACTIONS */
// const POST_PRODUCT_REQUEST = () => {
//   return {
//     type: post_request,
//   };
// };
// const POST_PRODUCT_SUCCESS = (payload) => {
//   return {
//     type: post_success,
//     payload,
//   };
// };
// const POST_PRODUCT_ERROR = () => {
//   return {
//     type: post_error,
//   };
// };

/*Action  For Getting the data */
const getdata = (dispatch) => {
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
const sortdata=(price)=>(dispatch)=>{
dispatch(GET_PRODUCT_REQUEST())
  return axios.get("http://localhost:8080/products",{ params: { price: price } }).then((res)=>{
   
    console.log(res.data);
    dispatch(GET_PRODUCT_SUCCESS(res.data))
  })
}
const pagination=(data)=>(dispatch)=>{
  dispatch(GET_PRODUCT_REQUEST())
    return axios.get("http://localhost:8080/products",{ params: { page: data,limit:40 } }).then((res)=>{
     
      console.log(res.data);
      dispatch(GET_PRODUCT_SUCCESS(res.data))
    })
  }
  const filterdata=(data)=>(dispatch)=>{
   
    dispatch(GET_PRODUCT_REQUEST())
    return axios.get("http://localhost:8080/products/filter",{ params: { price: data } }).then((res)=>{
     
      console.log(res.data);
      dispatch(GET_PRODUCT_SUCCESS(res.data))
    })
  .catch((err)=>{
dispatch(GET_PRODUCT_ERROR())
  })
}
const searchdata=(data)=>(dispatch)=>{
  console.log("i am data",data);
  
  dispatch(GET_PRODUCT_REQUEST())
  return axios.get("http://localhost:8080/products/search",{ params:data  }).then((res)=>{
   
    console.log(res.data);
    dispatch(GET_PRODUCT_SUCCESS(res.data))
  })
.catch((err)=>{
dispatch(GET_PRODUCT_ERROR())
})
}



export { getdata,sortdata,filterdata ,searchdata,pagination};
