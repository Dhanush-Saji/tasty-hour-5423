import React, { useState } from "react";
import {
  Box,
  SimpleGrid,
  CloseButton,
  Flex,
  Icon,
  useColorModeValue,
  Link,
  Drawer,
  DrawerContent,
  Text,
  useDisclosure,
  IconButton,
  Button,
  useToast,
} from "@chakra-ui/react";
import Styles from "../../ProductPageCss/Product.module.css";
import "./newstyles.css";
import "./smallpage.css";
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
import {
  FiHome,
  FiTrendingUp,
  FiCompass,
  FiStar,
  FiSettings,
  FiMenu,
  FiFilter,
} from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import axios from "axios";




const LinkItems = [
  { name: "Home", icon: FiHome },
  { name: "Trending", icon: FiTrendingUp },
  { name: "Explore", icon: FiCompass },
  { name: "Favourites", icon: FiStar },
  { name: "Settings", icon: FiSettings },
];

const PostTocart = (el) => {

  const toast= useToast()

  return axios
    .post(`https://finalcart.onrender.com/cart`, { ...el, qty: 1 })
    .then((r) => {
      // alert("Product added to cart")
      Toast({
        title: "Product added to cart successfully",
        status: "success",
        isClosable: true,
        duration: 5000,
        position: "top",
      });
    })
    .catch((err) => {
      Toast({
        title: "Something went Wrong",
        status: "error",
        isClosable: true,
        duration: 5000,
        position: "top",
      });
    });
};

const SmallPage = () => {
  const dispatch = useDispatch();
  const Productdata = useSelector((items) => items.ProductReducer);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const navigate= useNavigate()
  // console.log(Productdata);



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
    <Box className="small_box">
      {Productdata.data.length > 0 &&
        Productdata.data.map((el, i) => {
          return (
            <Box w="100%" key={i}>
              <img
                src={el.image}
                onClick={() => {
                  navigate("/singlepage", { state: el });
                }}
              />
              <Text>
                <strong>{el.name}</strong>
              </Text>
              <Text className="gold">₹ {el.price}</Text>
              <Button
                onClick={() => PostTocart(el)}
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
  );
};

export default SmallPage;
