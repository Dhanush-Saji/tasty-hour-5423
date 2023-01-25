import React, { ReactNode } from "react";
import {
  IconButton,
  Box,
  CloseButton,
  Flex,
  Icon,
  useColorModeValue,
  Link,
  Drawer,
  DrawerContent,
  Text,
  useDisclosure,
  BoxProps,
  FlexProps,
  useToast
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
import {
  FiHome,
  FiTrendingUp,
  FiCompass,
  FiStar,
  FiSettings,
  FiMenu,
  FiFilter,
} from "react-icons/fi";
import { IconType } from "react-icons";
import { ReactText } from "react";
import Filtering from "../../Components/Filtering";
import ProductItems from "./ProductItems";
import Pagination from "../../hooks/Pagination";
import { useState } from "react";
import Footer from "../../Components/Footer/Footer";

const LinkItems = [
  { name: "Low to High", value: "price_low_to_high" },
  { name: "High to Low", value: "price_high_to_low" },
];

export default function SmallProductDrawer({ children }) {
  const dispatch = useDispatch();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const Productdata = useSelector((items) => items.ProductReducer);
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
  console.log(search);

  return (
    <>
      <Box
        style={{ width: "100%" }}
        bg={useColorModeValue("gray.100", "gray.900")}
      >
        <SidebarContent
          onClose={() => onClose}
          display={{ base: "none" }}
          style={{ width: "100%", border: "5px solid red" }}
        />
        <Drawer
          autoFocus={false}
          isOpen={isOpen}
          placement="left"
          onClose={onClose}
          returnFocusOnClose={false}
          onOverlayClick={onClose}
          size="full"
          // style={{border:"3px solid black"}}
        >
          <DrawerContent>
            <SidebarContent onClose={onClose} />
          </DrawerContent>
        </Drawer>
        {/* mobilenav */}
        <MobileNav display={{ base: "flex" }} onOpen={onOpen} />
        <Box p="4">{children}</Box>
      </Box>
      {/* <Footer /> */}
    </>
  );
}

const SidebarContent = ({ onClose, ...rest }) => {
  return (
    <Box
      bg={useColorModeValue("white", "gray.900")}
      borderRight="1px"
      borderRightColor={useColorModeValue("gray.200", "gray.700")}
      w={{ base: "full" }}
      m="auto"
      textAlign="center"
      pos="fixed"
      h="full"
      {...rest}
      //   border="4px solid blue"
    >
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
          Sort And Filter
        </Text>
        <CloseButton display={{ base: "flex" }} onClick={onClose} />
      </Flex>
      {LinkItems.map((link, i) => (
        <NavItem key={i} onClick={() => dispatch(sortdata(link.value))}>
          {link.name}
        </NavItem>
      ))}
    </Box>
  );
};

const NavItem = ({ icon, children, ...rest }) => {
  return (
    <Link
      href="#"
      style={{ textDecoration: "none" }}
      _focus={{ boxShadow: "none" }}
    >
      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: "cyan.400",
          color: "white",
        }}
        {...rest}
      >
        {icon && (
          <Icon
            mr="4"
            fontSize="16"
            _groupHover={{
              color: "white",
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    </Link>
  );
};

const MobileNav = ({ onOpen, ...rest }) => {
  return (
    <Flex
      //   ml={{ base: 0}}
      px={{ base: 4 }}
      //   border="5px solid blue"
      height="20"
      alignItems="center"
      bg={useColorModeValue("white", "gray.900")}
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue("gray.200", "gray.700")}
      justifyContent="flex-start"
      {...rest}
    >
      <IconButton
        variant="outline"
        onClick={onOpen}
        aria-label="open menu"
        icon={<FiMenu />}
      />

      <Text fontSize="2xl" ml="8" fontFamily="monospace" fontWeight="bold">
        Filter/Sort
      </Text>
    </Flex>
  );
};
