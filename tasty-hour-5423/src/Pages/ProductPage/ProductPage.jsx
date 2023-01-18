import React from "react";
import { Box, SimpleGrid } from "@chakra-ui/react";
import Styles from "../../ProductPageCss/Product.module.css";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getdata } from "../../Redux/Product_redux/action";
import ProductItems from "./ProductItems";
const ProductPage = () => {
  const dispatch = useDispatch();
  const Productdata = useSelector((items) => items.ProductReducer);
  console.log(Productdata.data.length, "hhhh");
  useEffect(() => {
    dispatch(getdata);
  }, []);
  return (
    <Box className={Styles.maindiv}>
      <Box className={Styles.innermaindiv}>
        <Box
          width="16%"
          border="1px solid black"
          height="100vh"
          borderRight="1px solid #DDDDDDOundefined"
          padding="0px 15px 0px 15px"
          position="relative"
          float="left"
        >
          <Box
            padding="0px 0px 0px 25px"
            height="100%"
            border="1px solid red"
          ></Box>
        </Box>

        <Box
          border="1px solid green"
          width="84%"
          height="4%"
          float="left"
          fontSize="20px"
          padding="7px 7px 4px 35px"
          lineHeight="25px"
          fontWeight="600"
        >
          <span style={{ marginLeft: "10px" }}>
            Sort By:<span style={{ marginLeft: "15px" }}>Popular</span>
            <span style={{ marginLeft: "10px" }}>|</span>
          </span>
          <span style={{ marginLeft: "10px" }}>
            Price:<span>Low to Hight</span>{" "}
            <span style={{ marginLeft: "10px" }}>|</span>
          </span>
          <span style={{ marginLeft: "10px" }}>
            Price:<span>High to Low</span>{" "}
            <span style={{ marginLeft: "10px" }}>|</span>
          </span>

          <span style={{ marginLeft: "10px" }}>
            Discount <span style={{ marginLeft: "10px" }}>|</span>
          </span>
          <span style={{ marginLeft: "10px" }}>New Arrivals</span>
        </Box>
        <Box
          border="1px solid blue"
          width="84%"
          height="auto"
          float="left"
          // padding="0px 15px 0px 15px"
        >
          <SimpleGrid columns={[2, 4, 4]}>
            {Productdata.data.length > 0 &&
              Productdata.data.map((items) => <ProductItems {...items} />)}
          </SimpleGrid>
        </Box>
      </Box>
    </Box>
  );
};

export default ProductPage;
