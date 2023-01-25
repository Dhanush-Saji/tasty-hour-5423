import React from "react";
import { Box, Heading } from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import "./navlist.css";

const Navlist = () => {
  const navigate = useNavigate();
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
          onClick={() => navigate("/product2")}
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
          onClick={() => navigate("/product2")}
        >
          Products Near Me
        </Heading>
      </Box>
    </Box>
  );
};

export default Navlist;
