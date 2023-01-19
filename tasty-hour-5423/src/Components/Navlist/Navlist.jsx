import React from "react";
import { Box, Heading } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import "./navlist.css";

const Navlist = () => {
  return (
    <Box className="navlist">
      <Box
      className="list_item"
        // _hover={{ backgroundColor: "white", color: "#902735", margin: "5px" }}
      >
        <Heading
          as="h4"
          size="md"
          className="colour_changer"
          // _hover={{ backgroundColor: "white", color: "#902735" }}
        >
          Home Decor
        </Heading>
      </Box>
      <Box
      className="list_item"
        // _hover={{ backgroundColor: "white", color: "#902735", margin: "5px" }}
      >
        <Heading
          as="h4"
          size="md"
          className="colour_changer"
          // _hover={{ backgroundColor: "white", color: "#902735" }}
        >
          Products Near Me
        </Heading>
      </Box>
    </Box>
  );
};

export default Navlist;
