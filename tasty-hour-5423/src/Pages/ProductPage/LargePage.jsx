import React, { useState } from "react";
import {
  Box,
  SimpleGrid,
  Stack,
  HStack,
  VStack,
  Text,
  Heading,
  Checkbox,
} from "@chakra-ui/react";
import Styles from "../../ProductPageCss/Product.module.css";
import "./newstyles.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  getdata,
  searchdata,
  sortdata,
} from "../../Redux/Product_redux/action";
import Filtering from "../../Components/Filtering";
import ProductItems from "./ProductItems";
import Pagination from "../../hooks/Pagination";

import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
const PostTocart = () => {
  return axios
    .post(`https://finalcart.onrender.com/cart`, { ...products, qty: 1 })
    .then((r) => {
      // alert("Product added to cart")
      toast({
        title: "Product added to cart successfully",
        status: "success",
        isClosable: true,
        duration: 5000,
        position: top,
      });
    })
    .catch((err) => {
      toast({
        title: "Something went Wrong",
        status: "error",
        isClosable: true,
        duration: 5000,
        position: top,
      });
    });
};

const LargePage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const Productdata = useSelector((items) => items.ProductReducer);
  console.log(Productdata);
  const [search, setSeacrh] = useState("");
  useEffect(() => {
    dispatch(getdata);
  }, []);
  function Searchdata(e) {
    const { value } = e.target;
    setSeacrh({ ...search, name: value });
    dispatch(searchdata(search));
  }

  return (
    <>
    <Box className="products-page">
      <Box className="left_options">
        <Heading>Filter By:</Heading>
        <Box
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "0.8rem",
            marginTop: "1rem",
          }}
        >
          <Checkbox
            size="md"
            onClick={() => dispatch(sortdata("price_low_to_high"))}
          >
            Low to High
          </Checkbox>
          <Checkbox
            size="md"
            onClick={() => dispatch(sortdata("price_high_to_low"))}
          >
            High to Low
          </Checkbox>
        </Box>
      </Box>
      <Box className="right_products">
        {Productdata.data.length > 0 &&
          Productdata.data.map((el, i) => {
            return (
              <Box w="100%" key={i}>
                <img
                  src={el.image}
                  onClick={() => {
                    navigate("/singlepage", { state: products });
                  }}
                />
                <Text>
                  <strong>{el.name}</strong>
                </Text>
                <Text className="gold">₹ {el.price}</Text>
                <Button
                  onClick={PostTocart}
                  style={{
                    color: "white",
                    background: "#902735",
                    border: "none",
                  }}
                >
                  Add to cart
                </Button>
              </Box>
            );
          })}
      </Box>
    </Box>
    <Pagination  />
    </>
    
  );
};

export default LargePage;
