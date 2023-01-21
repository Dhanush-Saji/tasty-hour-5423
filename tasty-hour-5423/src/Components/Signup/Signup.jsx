// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import "./signup.css";

// import {
//   Modal,
//   ModalOverlay,
//   ModalContent,
//   ModalHeader,
//   ModalFooter,
//   ModalBody,
//   ModalCloseButton,
//   Box,
//   Heading,
//   Input,
//   Button,
//   Text,
//   useDisclosure,
//   useToast,
//   VStack,
//   Stack,
//   Center,
//   PinInput,
//   PinInputField,
//   Spacer,
//   HStack,
//   Image,
// } from "@chakra-ui/react";
// import GoogleButton from "react-google-button";
// import PhoneInput from "react-phone-input-2";
// import { AppContext } from "../../Context/AppContextProvider";
// import { AuthContext } from "../../Context/AuthContextProvider";
// import { useContext } from "react";
// import { Link, useNavigate } from "react-router-dom";

// const registerUser = (payload) => {
//   axios.get("", payload);
// };

// function Signup() {
//   // const { isOpen, onOpen, onClose } = useDisclosure();

//   // const initialRef = React.useRef(null);
//   // const finalRef = React.useRef(null);
//   const [firstName, setFirstName] = useState();
//   const [lastName, setLastName] = useState();
//   const [email, setEmail] = useState();
//   const [password, setPassword] = useState();
//   const [phoneNo, setPhoneNo] = useState();
//   const toast = useToast();
//   const handleSubmit = () => {
//     let payload = { firstName, lastName, password, email, phoneNo };
//     registerUser(payload)
//       .then((res) => {
//         toast({
//           title: "Signup Successfull",
//           description:
//             "Account has been successfully created. You can Login Now!",
//           status: "success",
//           position: "top",
//           duration: 7000,
//           isClosable: true,
//         });
//       })
//       .catch((err) => {
//         toast({
//           title: "Signup Error",
//           status: "error",
//           position: "top",
//           duration: 7000,
//           isClosable: true,
//         });
//       });
//   };

//   return (
//     <Box className="signup">
//       <Box className="signup_box">
//         <Heading _hover={{ border: "1px solid white" }}>Signup</Heading>
//         <Input placeholder="Enter First Name" />
//         <Input placeholder="Enter Last Name" />
//         <Input placeholder="Enter Email" />
//         <Input placeholder="Enter Phone No." />
//         <Input placeholder="Enter Password" />

//         <Button onClick={handleSubmit}>Signup</Button>
//         <Text>
//           Already Have an Acoount?{" "}
//           <Link to="/login">
//             <strong>Login</strong>
//           </Link>
//         </Text>
//       </Box>
//     </Box>
//   );
// }

// export default Signup;
