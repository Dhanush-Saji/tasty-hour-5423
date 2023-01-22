import React, { useState, useEffect } from "react";
import axios from "axios";
import "./login.css";

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Box,
  Heading,
  Input,
  Button,
  Text,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

const loginUser = (payload) => {
  axios.get("", payload);
};

function Login() {
  // const { isOpen, onOpen, onClose } = useDisclosure();

  // const initialRef = React.useRef(null);
  // const finalRef = React.useRef(null);
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [phoneNo, setPhoneNo] = useState();
  const toast = useToast();
  const handleLogin = () => {
    let payload = { firstName, lastName, password, email, phoneNo };
    loginUser(payload)
      .then((res) => {
        toast({
          title: "Signup Successfull",
          description:
            "Account has been successfully created. You can Login Now!",
          status: "success",
          position: "top",
          duration: 7000,
          isClosable: true,
        });
      })
      .catch((err) => {
        toast({
          title: "Signup Error",
          status: "error",
          position: "top",
          duration: 7000,
          isClosable: true,
        });
      });
  };
  return (
    <Box className="signup">
      <Box className="signup_box">
        <Heading _hover={{ border: "1px solid white" }}>Login</Heading>
        <Input placeholder="Enter Email" />
        <Input placeholder="Enter Phone No." />
        <Input placeholder="Enter Password" />
        <Button onClick={handleLogin}>Login</Button>
        <Text>
          Need an Account?{" "}
          <Link to="/register">
            <strong>Signup</strong>
          </Link>
        </Text>
      </Box>
    </Box>
  );
}

export default Login;
