import { VStack, Image, Flex, Text,Spacer } from "@chakra-ui/react";
import React from "react";
import { MdSpaceDashboard, MdOutlineReviews } from "react-icons/md";
import { AiOutlineUser } from "react-icons/ai";
import { BsClipboardCheck } from "react-icons/bs";
import { BiBox } from "react-icons/bi";
import { IoIosHelpBuoy } from "react-icons/io";
import { FiHelpCircle } from "react-icons/fi";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
import avatar from "../../assets/avatar.png";
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
  return (
    <VStack bg="#1A1C22" h="100vh"  pb='10'>
      {/* Logo Box */}
      <Flex alignItems={"center"} py="20px">
        <Link to="/" className="logo">
          <Image m="auto" src={logo} alt="logo" w="50%" objectFit="contain" />
        </Link>
      </Flex>
      {/* Navlinks */}
      <div className="navlinkParentDiv">
        {sideBarLinks.map((singleLink) => (
          <NavLink key={singleLink.title}
            to={singleLink.link} className={({isActive})=>isActive?"activeNavLink":"normalNavLink"} >
            <Flex alignItems={"center"} gap="5" pl='5'>
              {singleLink.icon}
              <Text fontSize="sm" fontWeight="normal">
                {singleLink.title}
              </Text>
            </Flex>
          </NavLink>
        ))}
      </div>
      <Spacer />
      <Flex  bg='#282C35' w='85%' borderRadius='lg' p='2' gap='4'>
        <Image src={avatar} alt="avatar" w="20%" objectFit="contain" />
        <Flex flexDirection='column'>
          <Text fontWeight='medium' fontSize='md' color='white'>Dhanush Saji</Text>
          <Text color='#A9A9A9' fontSize='sm'>View Profile</Text>
        </Flex>
      </Flex>
    </VStack>
  );
};

export default Sidebar;
