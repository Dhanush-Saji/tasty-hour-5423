import React from "react";
import { Box, Text, Heading } from "@chakra-ui/react";
import "./footer.css";
import payment_options from "../../assets/payment_options-removebg-preview.png";

const Footer = () => {
  return (
    <Box className="footer">
      <Box>
        <Heading as="h5" size="md">
          About Us
        </Heading>
        <Text>
          India's most convenient online grocery channel Buyerapp Fresh and
          Smart makes your grocery shopping even simpler. No more hassles of
          sweating it out in crowded markets, grocery shops & supermarkets - now
          shop from the comfort of your home.
        </Text>
      </Box>
      <Box>
        <Heading as="h5" size="md">
          Payment Options
        </Heading>
        <img src={payment_options} alt="payment_options" />
      </Box>
      <Box>
        <Heading as="h5" size="md">
          Top Categories
        </Heading>
        <Text>Grocery</Text>
      </Box>
      <Box>
        <Heading as="h5" size="md">
          Policies & Info
        </Heading>

        <Text>
          Privacy Policy
          <br />
          Terms & Conditions <br />
          Shipping Policy <br />
          Return & Refund
        </Text>
      </Box>
    </Box>
  );
};

export default Footer;
