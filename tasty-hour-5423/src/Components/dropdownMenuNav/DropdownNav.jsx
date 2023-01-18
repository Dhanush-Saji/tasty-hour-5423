import React,{useState} from "react";
import {
  useDisclosure,
  MenuItem,
  Menu,
  MenuButton,
  MenuList,
  Box,
  Text,
} from "@chakra-ui/react";

const DropdownNav = () => {
    const [isAuth, setIsAuth] = useState(true);
    const { isOpen, onOpen, onClose } = useDisclosure();
  return <Box className="account_cart">
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
  </Box>;
};

export default DropdownNav;
