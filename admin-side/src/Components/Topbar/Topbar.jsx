import React from "react";
import { FiSearch } from "react-icons/fi";
import { MdNotificationsNone } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";

import {
  Flex,
  Text,
  Box,
} from "@chakra-ui/react";
import "./Topbar.css";

const Topbar = () => {
  return (
    <Flex px='7'
      justifyContent="space-between"
      bg="#1A1C22"
      w="full"
      h="9%"
      alignItems="center"
    >
      <Text color='white' fontWeight='semibold' fontSize='xl'>Hello, Dhanush</Text>
      <Flex alignItems='center' color='#898989' gap='1rem'>
      <Box display='flex' alignItems='center' className="topbarSearch" px='2' borderRadius='md'>
        <input className="topbarSearch" type="text" placeholder="  Search..." />
        <FiSearch />
      </Box>
      <MdNotificationsNone size='1.5rem' />
      {/* <MdOutlineLightMode size='1.5rem' /> */}
      </Flex>
    </Flex>
  );
};

export default Topbar;
