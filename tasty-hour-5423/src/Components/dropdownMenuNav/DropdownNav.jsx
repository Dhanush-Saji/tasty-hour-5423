import React, { useState } from "react";
import {
  useDisclosure,
  MenuItem,
  Menu,
  MenuButton,
  MenuList,
  Box,
  Text,
  Button
} from "@chakra-ui/react";
import {AiOutlineUser} from 'react-icons/ai'
import { useNavigate } from "react-router";


const DropdownNav = () => {
  const [isAuth, setIsAuth] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const navigate = useNavigate()
  return (
    <Box className="account_cart">
      {isAuth ? (
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
          ><AiOutlineUser className="visible_nav_text_smallscreen"/>
            <Text className="visible_nav_text_largeScreen">My Account</Text>
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
        <Button onClick={()=> navigate('/phonesignup')}>Register/login</Button>
      )}
    </Box>
  );
};

export default DropdownNav;
