import React from "react";
import { Box, SimpleGrid } from "@chakra-ui/react";
import Styles from "../../ProductPageCss/Product.module.css";
import './newstyles.css'
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getdata, searchdata, sortdata } from "../../Redux/Product_redux/action";
import Filtering from "../../Components/Filtering";
import ProductItems from "./ProductItems";
import Pagination from "../../hooks/Pagination";
import { useState } from "react";
const ProductPage = () => {
  const dispatch = useDispatch();
  const Productdata = useSelector((items) => items.ProductReducer);
  console.log(Productdata);
  const [search,setSeacrh]=useState("")
  useEffect(() => {
    dispatch(getdata);
  }, []);
  function Searchdata(e){
    const {value}=e.target
    setSeacrh({...search,name:value})
dispatch(searchdata(search))
  }
  
  console.log(search);
  return (
    <Box className={Styles.maindiv} >
     
      <Box className={Styles.innermaindiv} >
        <input type="text" placeholder="Enter Name" style={{border:"1px solid grey"}} onChange={Searchdata}/>
        <Box
          width="16%"
          height="100vh"
          borderRight="1px solid #DDDDDDOundefined"
          padding="0px 15px 0px 15px"
          position="relative"
          float="left"
          >
          <Box
            height="100%"
          >
            <Box
              fontSize="28px"
              fontWeight="700"
              borderBottom="DDDDDDOundefined"
              textAlign="left"
              padding="15px 10px 15px 10px"
              className="PRODUCT__FILTER__OPTIONS"
            >
              Filter by
            </Box>
            <Filtering />
          </Box>
        </Box>

        <Box
          width="84%"
          height="2%"
          float="left"
          fontSize="20px"
          padding="7px 7px 4px 35px"
          lineHeight="25px"
          fontWeight="450"
          className="PRODUCT__FILTER__OPTIONS"
          >
          <span
            style={{ marginLeft: "10px" }}
            onClick={() => dispatch(sortdata("popularBy"))}
          >
            Sort By:<span style={{ marginLeft: "15px" }}>Popular</span>
            <span style={{ marginLeft: "10px" }}>|</span>
          </span>
          <span
            style={{ marginLeft: "10px" }}
            onClick={() => dispatch(sortdata("price_low_to_high"))}
          >
            Price:<span>Low to High</span>{" "}
            <span style={{ marginLeft: "10px" }}>|</span>
          </span>
          <span
            style={{ marginLeft: "10px" }}
            onClick={() => dispatch(sortdata("price_high_to_low"))}
          >
            Price:<span>High to Low</span>{" "}
            <span style={{ marginLeft: "10px" }}>|</span>
          </span>

          <span style={{ marginLeft: "10px" }}>
            Discount <span style={{ marginLeft: "10px" }}>|</span>
          </span>
          <span style={{ marginLeft: "10px" }}>New Arrivals</span>
        </Box>
        <Box
          classname="PRODUCT__CONTENT"
        >
          <Box className="prod_grid">
            {Productdata.data &&
              Productdata.data.length > 0 &&
              Productdata.data.map(
                (items, i) =>
                i < 40 && <ProductItems {...items} key={items._id} />
                )}
               
          </Box>
          <Box  width="100%" display="flex"  justifyContent="center" alignItems="center" marginTop="80px">
        <Pagination/>
        </Box>
        </Box>
        
      </Box>
    </Box>
  );
};

export default ProductPage;
