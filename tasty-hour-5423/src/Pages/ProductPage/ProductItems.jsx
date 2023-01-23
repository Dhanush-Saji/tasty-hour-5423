import { Box, Button, Img } from "@chakra-ui/react";
import React from "react";
import Styles from "../../ProductPageCss/Product.module.css";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { Link, useNavigate } from "react-router-dom";
import { addTocart, getdata } from "../../Redux/cartReducer/action";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { useToast } from "@chakra-ui/react";
const ProductItems = (products) => {
  const toast = useToast();
  const dispatch = useDispatch();

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
          position:top
        });
      })
      .then((e) => {
        console.log(e);
      });
  };
  const navigate = useNavigate();
  return (
    <Box
      padding="10px 12px 10px 12px"
      margin="15px 0 0 0"
      height="353px"
      width="95%"
      cursor="pointer"
      textAlign="center"
      className={Styles.cart}
    >
      <Box width="100%" height="227px">
        <Img
          src={products.image}
          height="100%"
          width="100%"
          onClick={() => {
            navigate("/singlepage", { state: products });
          }}
        />
        <Box fontSize="20px" className={Styles.name}>
          {products.name}
        </Box>
        <Box fontSize="25px" paddingTop="13px" color="#fba937!important">
          {products.price}
        </Box>
        <Box>
          <Button className={Styles.button} onClick={PostTocart}>
            <HiOutlineShoppingBag style={{ background: "white" }} />
            <span style={{ marginLeft: "10px", color: "white" }}>
              Add to Cart
            </span>
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default ProductItems;
