import { Box, Button, Img } from "@chakra-ui/react";
import React from "react";
import Styles from "../../ProductPageCss/Product.module.css";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { Link, useNavigate } from "react-router-dom";
const ProductItems = (products) => {
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
          <Button className={Styles.button}>
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
