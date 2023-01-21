import { VStack, Image, Flex, Text,Spacer,PopoverContent,Portal,PopoverTrigger,Popover,PopoverArrow,PopoverCloseButton,PopoverBody,Button, useDisclosure } from "@chakra-ui/react";
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
  const {isOpen:isLogoutOpen,onOpen:onLogoutOpen,onClose:onLogoutClose} = useDisclosure()
  const sideBarLinks = [
    // {
    //   title: "Dashboard",
    //   icon: <MdSpaceDashboard />,
    //   link: "/",
    // },
    {
      title: "Users",
      icon: <AiOutlineUser />,
      link: "/",
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
    <VStack bg="#1A1C22" h={{ base: '100vh'}}  pb='8' justifyContent={{lg:'space-between'}}>
      {/* Logo Box */}
      <VStack  mb={{base:'20px',lg:'0px'}}>
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
      </VStack>
      {/* <Spacer /> */}
      <Popover autoFocus={false}
      isOpen={isLogoutOpen}
      onOpen={onLogoutOpen}
      onClose={onLogoutClose}
      >
      <PopoverTrigger>
      <Flex  flexDirection={{base:'column',lg:'row'}}  bg='#282C35' w='85%' borderRadius='lg' p='3' gap='4' style={{cursor: 'pointer'}}>
        <Image src={avatar} alt="avatar" w="20%" objectFit="contain" />
        <Flex flexDirection='column'>
          <Text fontWeight='medium' fontSize='md' color='white'>Dhanush Saji</Text>
          <Text color='#A9A9A9' fontSize='sm'>View Profile</Text>
        </Flex>
      </Flex>
      </PopoverTrigger>
  <Portal>
    <PopoverContent w='100%' p='1rem' bg='grey' borderColor='0px'>
      <PopoverArrow />
      {/* <PopoverCloseButton /> */}
      <PopoverBody>
        <Button colorScheme='gray' onClick={()=>{onLogoutClose()}}>Log Out</Button>
      </PopoverBody>
    </PopoverContent>
  </Portal>
</Popover>


    </VStack>
  );
};

export default Sidebar;
