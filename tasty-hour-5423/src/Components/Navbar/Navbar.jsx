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

import {
  useDisclosure,
  MenuItem,
  Menu,
  MenuButton,
  MenuList,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

import locationFn from "../../API/location";
import DropdownNav from "../dropdownMenuNav/DropdownNav";
import { useDispatch } from "react-redux";
import { searchdata } from "../../Redux/Product_redux/action";

const getQueryData = (payload) => {
  return axios.get(payload);
};

// {isOpen ? <IoMdArrowDropup /> : <IoMdArrowDropdown />}
const Navbar = () => {
  const [location, setLocation] = useState({});
  const [isAuth, setIsAuth] = useState(false);
  const navigate = useNavigate();
  const [count, setCount] = useState(0);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");

  const dispatch = useDispatch();
  const handleQuerry = (e) => {
    const { value } = e.target;
    setSearch({ ...search, name: value });
    dispatch(searchdata(search));
    setQuery(e);
  };

  useEffect(() => {
    locationFn().then((res) => {
      setLocation(JSON.parse(localStorage.getItem("location")));
    });
  }, []);

  // console.log(location);

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box className="nav">
      <Box className="nav_logo">
        <Image src={logo} alt="logo" />
      </Box>
      <Box className="input_search">
        <Input
          type="text"
          // placeholder={`You are searching for ${location.state}`}
          className="visible_nav_text_largeScreen"
          onChange={handleQuerry}
        />
        <SmallScreenSearchModal
          // state={location.state}
          handleQuerry={handleQuerry}
        />
        <Text className="input_search">
          <IoLocationOutline className="large_font smallest_size" />
          <Text>
            {/* <span className="smallest_size">{location.city}, </span> */}
            {/* <span>{location.state}</span> */}
          </Text>
        </Text>
      </Box>
      <Box className="account_cart">
        <DropdownNav />
        <Box className="wishlist_in">
          <BsHeart />{" "}
          <Text className="visible_nav_text_largeScreen">WishList</Text>
        </Box>

        <Box className="wishlist_in">
          <AiOutlineShoppingCart />
          <Text className="visible_nav_text_largeScreen">Cart</Text>
          <Text className="cart_item_count">{count}</Text>
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
