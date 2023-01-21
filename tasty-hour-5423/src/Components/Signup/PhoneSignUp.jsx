import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Alert } from "react-bootstrap";
import { Button } from "react-bootstrap";
// import "react-phone-number-input/style.css";
// import 'react-phone-input-2/lib/style.css'
// import PhoneInput from "react-phone-input-2";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { useUserAuth } from "../../Context/AuthContext";
import { Box, Heading, useToast } from "@chakra-ui/react";
import {
  getUserLoginError,
  getUserLoginReq,
  getUserLoginSuccess,
} from "../../Redux/AuthReducer/action";

import { useDispatch } from "react-redux";

const PhoneSignUp = () => {
  const [error, setError] = useState("");
  const [number, setNumber] = useState("");
  const [flag, setFlag] = useState(false);
  const [otp, setOtp] = useState("");
  const [result, setResult] = useState("");
  const [confirmObj, setConfirmObj] = useState("");
  const { setUpRecaptha } = useUserAuth();
  const navigate = useNavigate();
  const toast = useToast();
  const dispatch = useDispatch();

  const getOtp = async (e) => {
    e.preventDefault();
    console.log(number);
    setError("");
    dispatch(getUserLoginReq());
    if (number === "" || number === undefined)
      return setError("Please enter a valid phone number!");
    try {
      const response = await setUpRecaptha(number);
      setResult(response);
      console.log(response);
      setFlag(true);
    } catch (err) {
      setError(err.message);
    }
  };

  const verifyOtp = async (e) => {
    e.preventDefault();
    setError("");
    if (otp === "" || otp === null) return;
    try {
      await result.confirm(otp);
      dispatch(getUserLoginSuccess({ user: number, token: otp }));
      toast({
        description: "Login Suucessfull",
        status: "success",
        position: "top",
        isClosable: true,
        duration: 7000,
      });
      navigate("/");
    } catch (err) {
      setError(err.message);
      dispatch(getUserLoginError());
    }
  };

  return (
    <>
      <Box
        m="auto"
        p="1rem"
        h="50vh"
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "0.5rem",
          textAlign: "center",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Heading as="h3" size="md">
          Firebase Phone Auth
        </Heading>
        {error && <Alert variant="danger">{error}</Alert>}
        <Form onSubmit={getOtp} style={{ display: !flag ? "block" : "none" }}>
          <Form.Group className="mb-3" controlId="formBasicPhoneNumber">
            <PhoneInput
              defaultCountry="IN"
              value={number}
              onChange={setNumber}
              placeholder="Enter Phone Number"
              className="mb-1"
            />
            <div id="recaptcha-container"></div>
          </Form.Group>
          <div className="button-right mb-1">
            <Link to="/">
              <Button variant="secondary">Cancel</Button>
            </Link>
            &nbsp;
            <Button type="submit" className="mb-1" variant="primary">
              Send Otp
            </Button>
          </div>
        </Form>

        <Form onSubmit={verifyOtp} style={{ display: flag ? "block" : "none" }}>
          <Form.Group className="mb-3" controlId="formBasicOtp">
            <Form.Control
              type="otp"
              placeholder="Enter OTP"
              onChange={(e) => setOtp(e.target.value)}
            />
          </Form.Group>
          <div className="button-right">
            <Link to="/">
              <Button variant="secondary">Cancel</Button>
            </Link>
            &nbsp;
            <Button type="submit" variant="primary">
              Verify
            </Button>
          </div>
        </Form>
      </Box>
    </>
  );
};

export default PhoneSignUp;
