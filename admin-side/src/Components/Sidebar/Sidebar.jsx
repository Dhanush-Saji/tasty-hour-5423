import { VStack, Image, Flex, Box, Text } from "@chakra-ui/react";
import React from "react";
import { MdSpaceDashboard, MdOutlineReviews } from "react-icons/md";
import { AiOutlineUser } from "react-icons/ai";
import { BsClipboardCheck } from "react-icons/bs";
import { BiBox } from "react-icons/bi";
import { IoIosHelpBuoy } from "react-icons/io";
import { FiHelpCircle } from "react-icons/fi";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
import "./Sidebar.css"

const Sidebar = () => {
  const sideBarLinks = [
    {
      title: "Dashboard",
      icon: <MdSpaceDashboard />,
      link: "/",
    },
    {
      title: "Users",
      icon: <AiOutlineUser />,
      link: "/users",
    },
    {
      title: "Orders",
      icon: <BsClipboardCheck />,
      link: "/orders",
    },
    {
      title: "Products",
      icon: <BiBox />,
      link: "/products",
    },
    {
      title: "Reviews",
      icon: <MdOutlineReviews />,
      link: "/reviews",
    },
    {
      title: "FAQ",
      icon: <FiHelpCircle />,
      link: "/faq",
    },
    {
      title: "Help & Support",
      icon: <IoIosHelpBuoy />,
      link: "/helpsupport",
    },
  ];
  const normalSidebarLinkStyle = {};
  // border="1px" borderColor="red.200"
  const active={
    color:'#1FCB4F',
    backgroundColor:'#383A3F',
    width:'100%',
    height: '50px',
    border:"1px",
    // border:"1px solid red",
    display:'flex'
  }
  const normal={
    color:'#A9A9A9',
    width:'100%',
    height: '50px',
    // border:"1px solid white",
    display:'flex'
  }
  return (
    <VStack bg="#1A1C22" h="100vh">
      <Flex alignItems={"center"} py="20px">
        <Link to="/" className="logo">
          <Image m="auto" src={logo} alt="logo" w="50%" objectFit="contain" />
        </Link>
      </Flex>
      <VStack alignItems={"left"} color={"#A9A9A9"} w='full'>
        {sideBarLinks.map((singleLink) => (
          <NavLink key={singleLink.title}
            to={singleLink.link} className={({isActive})=>isActive?"activeNavLink":"normalNavLink"} >
            <Flex alignItems={"center"} gap="5" pl='5'>
              {singleLink.icon}
              <Text fontSize="md" fontWeight="normal">
                {singleLink.title}
              </Text>
            </Flex>
          </NavLink>
        ))}
      </VStack>
    </VStack>
  );
};

export default Sidebar;
