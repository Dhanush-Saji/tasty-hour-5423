import React, { useEffect, useState } from "react";
import logo from "../../assets/logo-removebg.png";
import "./navbar.css";
import { Box, Image, useToast, Text, Input } from "@chakra-ui/react";
import { IoLocationOutline } from "react-icons/io5";
import { FaUserAlt } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoMdArrowDropup } from "react-icons/io";
import { BsHeart } from "react-icons/bs";
import { AiOutlineShoppingCart } from "react-icons/ai";
import SmallScreenSearchModal from "../smallscreenseacrhmodal/SmallScreenSearchModal";
import axios from "axios";
import { useUserAuth } from "../../Context/AuthContext";

import {
  useDisclosure,
  MenuItem,
  Menu,
  MenuButton,
  MenuList,
  Button,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

import locationFn from "../../API/location";
import DropdownNav from "../dropdownMenuNav/DropdownNav";
import { useDispatch, useSelector } from "react-redux";

const getQueryData = (payload) => {
  // return axios.get(url, payload);
};

// {isOpen ? <IoMdArrowDropup /> : <IoMdArrowDropdown />}
const Navbar = () => {
  const [location, setLocation] = useState({});
  const [isAuth, setIsAuth] = useState(false || localStorage.getItem("auth"));
  const navigate = useNavigate();
  const [count, setCount] = useState(0);
  const { user } = useUserAuth();
  const dispatch = useDispatch();
  const [query, setQuery] = useState("");

  // let data = useSelector((store) => store.CartReducer.cartData);
  // setCount(data.length);
  const handleQuerry = (e) => {
    setQuery(e);
    console.log(query);

    // **callMethod(payload).then((res)=>{
    //   //do Something
    // })
  };

  useEffect(() => {
    // const val= user?.displayName || ""
    locationFn().then((res) => {
      setLocation(JSON.parse(localStorage.getItem("location")));
    });
  }, []);

  // console.log(location);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {cart} = useSelector((store)=>store.cartReducer)
  return (
    <Box className="nav" w='100%'>
      <Box className="nav_logo">
        <Image
          src={logo}
          alt="logo"
          onClick={() => {
            navigate("/");
          }}
          style={{ cursor: "pointer" }}
        />
      </Box>
      <Box className="input_search">
        <Input
          type="text"
          placeholder={`You are searching for ${location.state}`}
          className="visible_nav_text_largeScreen"
          onChange={(e) => handleQuerry(e.target.value)}
        />
        <SmallScreenSearchModal
          state={location.state}
          handleQuerry={handleQuerry}
        />
        <Text className="input_search">
          <IoLocationOutline className="large_font smallest_size" />
          <Text>
            <span className="smallest_size">{location.city}, </span>
            <span>{location.state}</span>
          </Text>
        </Text>
      </Box>
      <Box className="account_cart">
        <DropdownNav />
        <Box className="wishlist_in">
          <BsHeart
            onClick={() => navigate("/wishlist")}
            style={{ cursor: "pointer" }}
          />{" "}
          <Text className="visible_nav_text_largeScreen">WishList</Text>
        </Box>

        <Box className="wishlist_in">
          <AiOutlineShoppingCart
            onClick={() => navigate("/cart")}
            style={{ cursor: "pointer" }}
          />
          <Text
            onClick={() => navigate("/cart")}
            style={{ cursor: "pointer" }}
            className="visible_nav_text_largeScreen"
          >
            Cart
          </Text>
          <Text className="cart_item_count">{cart.length}</Text>
        </Box>
      </Box>
    </Box>
  );
};

export default Navbar;
{
  /* <Box>
          {isAuth ? (
            <Menu isOpen={isOpen}>
              <MenuButton
                bgColor="#902735"
                borderradius={5}
                display="flex"
                // backgroundcolor="902735"
                padding="1"
                onMouseEnter={onOpen}
                onMouseLeave={onClose}
                color="white"
                borderRadius={3}
                p={2}
              >
                My Account
              </MenuButton>
              <MenuList onMouseEnter={onOpen} onMouseLeave={onClose}>
                <MenuItem
                  _hover={{ backgroundColor: "#902735", textColor: "white" }}
                >
                  My Account
                </MenuItem>
                <MenuItem
                  _hover={{ backgroundColor: "#902735", textColor: "white" }}
                >
                  My orders
                </MenuItem>
                <MenuItem
                  _hover={{ backgroundColor: "#902735", textColor: "white" }}
                >
                  My WishList
                </MenuItem>
                <MenuItem
                  _hover={{ backgroundColor: "#902735", textColor: "white" }}
                >
                  My Address
                </MenuItem>
                <MenuItem
                  _hover={{ backgroundColor: "#902735", textColor: "white" }}
                >
                  My Bank Details
                </MenuItem>
                <MenuItem
                  _hover={{ backgroundColor: "#902735", textColor: "white" }}
                >
                  My Shared Products
                </MenuItem>
                <MenuItem
                  _hover={{ backgroundColor: "#902735", textColor: "white" }}
                >
                  Wallet
                </MenuItem>
                <MenuItem
                  _hover={{ backgroundColor: "#902735", textColor: "white" }}
                >
                  Raise Ticket
                </MenuItem>
                <MenuItem
                  _hover={{ backgroundColor: "#902735", textColor: "white" }}
                >
                  Signout
                </MenuItem>
              </MenuList>
            </Menu>
          ) : (
            <Text>Register/login</Text>
          )}
        </Box> */
}
