import React from "react";
import { Box, SimpleGrid } from "@chakra-ui/react";
import Styles from "../../ProductPageCss/Product.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getdata, searchdata, sortdata } from "../../Redux/Product_redux/action";
import { RotatingLines } from "react-loader-spinner";
import Filtering from "../../Components/Filtering";
import ProductItems from "./ProductItems";
import Pagination from "../../hooks/Pagination";
import { useState } from "react";
const ProductPage = () => {

 
    const dispatch = useDispatch();
    const Productdata = useSelector((items) => items.ProductReducer);
   console.log("i am productsdada",Productdata);
    useEffect(() => {
      console.log("chekking");
      dispatch(getdata);
    }, []);
   
    if (Productdata.loading === true) {
      return (
        <Box display="flex" justifyContent="center" alignItems="center">
          <RotatingLines
            strokeColor="grey"
            strokeWidth="5"
            animationDuration="1.75"
            width="96"
            visible={true}
          />
        </Box>
      );
    }

    return (
      <Box className={Styles.maindiv}>
       <Box className={Styles.innermaindiv}>
          <Box
            width="16%"
            height="100vh"
            borderRight="1px solid #DDDDDDOundefined"
            padding="0px 15px 0px 15px"
            position="relative"
            float="left"
          >
            <Box height="100%">
              <Box
                fontSize="28px"
                fontWeight="700"
                borderBottom="DDDDDDOundefined"
                textAlign="left"
                padding="15px 10px 15px 10px"
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
            cursor="pointer"
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
              Price:<span>Low to Hight</span>{" "}
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
          <Box width="84%" height="auto" float="left">
            <SimpleGrid columns={[2, 2, 4]}>
              {Productdata && Productdata.data &&
                Productdata.data.length > 0 &&
                Productdata.data.map(
                  (items, i) =>
                    i < 40 && <ProductItems {...items} key={items._id} />
                )}
            </SimpleGrid>
            <Box
              width="100%"
              display="flex"
              justifyContent="center"
              alignItems="center"
              marginTop="80px"
            >
              <Pagination />
            </Box>
          </Box>
        </Box>
      </Box>
  );
};

export default ProductPage;
