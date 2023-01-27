import React, { useContext, useEffect, useState } from "react";
import {
  useDisclosure,
  MenuItem,
  Menu,
  MenuButton,
  MenuList,
  Box,
  Text,
  Button,
  Show,
  Hide
} from "@chakra-ui/react";
import { AiOutlineUser } from "react-icons/ai";
import { useNavigate } from "react-router";
import { userAuthContext } from "../../Context/AuthContext";
import { useUserAuth } from "../../Context/AuthContext";
import {CiLogin} from 'react-icons/ci'
const DropdownNav = () => {
  const [isAuth, setIsAuth] = useState(localStorage.getItem("auth"));
  const { isOpen, onOpen, onClose } = useDisclosure();
  // userAuthContext
  const [val, setVal] = useState("");
  const { user, logOut } = useUserAuth();

  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    setVal(user?.displayName || "");
  }, [user, isAuth, val]);
  console.log("user from dropdown", val);

  const navigate = useNavigate();
  return (
    <Box className="account_cart">
      {user ? (
        <Menu isOpen={isOpen}>
          <MenuButton
            bgColor="#902735"
            borderradius={5}
            // backgroundcolor="902735"
            padding="1"
            onMouseEnter={onOpen}
            onMouseLeave={onClose}
            color="white"
            borderRadius={3}
            p={2}
            _active={{ color: "white" }}
          >
            <AiOutlineUser className="visible_nav_text_smallscreen" />
            <Text className="visible_nav_text_largeScreen">
              {val === undefined ? <Text>My Account</Text> : val}
            </Text>
          </MenuButton>
          <MenuList onMouseEnter={onOpen} onMouseLeave={onClose}>
          <MenuItem
              _hover={{ backgroundColor: "#902735", textColor: "white" }}
            >
              <Show below='md'>{val === undefined ? <Text>My Account</Text> : val}</Show>
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
              onClick={() => {
                setIsAuth(localStorage.setItem("auth", false));
                handleSignOut();
              }}
            >
              Signout
            </MenuItem>
          </MenuList>
        </Menu>
      ) : (
        <Button onClick={() => navigate("/phonesignup")}>
          <Hide below="md">Register/Login</Hide>
          <Show below='md'><CiLogin/></Show>
        </Button>
      )}
    </Box>
  );
};

export default DropdownNav;
