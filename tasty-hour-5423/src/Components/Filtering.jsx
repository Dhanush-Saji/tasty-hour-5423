import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
} from "@chakra-ui/react";
import React from "react";
import { useDispatch } from "react-redux";
const Filtering = () => {
  const dispatch = useDispatch();
  function handleChange(e) {
    console.log(e.target.value);
    dispatch(e.target.value);
  }


  
  return (
    <div>
      <Accordion
        efaultIndex={[0]}
        allowMultiple
        textAlign="left"
        fontWeight="530"
        fontSize="21px"
        padding="4px"
      >
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box
                as="span"
                flex="1"
                textAlign="left"
                fontWeight="630"
                fontSize="21px"
                padding="4px"
              >
                Price
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel
            pb={4}
            overflow="scroll"
            height="150px"
            fontSize="17px"
          >
            <Box padding="5px" position="relative" fontWeight="700">
              <input type="checkbox" id="" onChange={handleChange} value="1000-2000"/>{" "}
              <label style={{ marginLeft: "5px" }} position="absolute" >
                1000-2000
              </label>
              <br />
              <br />
              <input type="checkbox" id="" onChange={handleChange} />{" "}
              <label style={{ marginLeft: "5px" }} position="absolute">
                2000-5000
              </label>
              <br />
              <br />
              <input type="checkbox" id="" onChange={handleChange} />{" "}
              <label style={{ marginLeft: "5px" }} position="absolute">
                500-1000
              </label>
              <br />
              <br />
              <input type="checkbox" id="" onChange={handleChange} />{" "}
              <label
                style={{ marginLeft: "5px", overflow: "hidden" }}
                position="absolute"
              >
                Above 500
              </label>
              <br />
              <br />
              <input type="checkbox" id="" onChange={handleChange} />{" "}
              <label style={{ marginLeft: "5px" }} position="absolute">
                Below 500
              </label>
            </Box>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <h2>
            <AccordionButton marginTop="15px">
              <Box
                as="span"
                flex="1"
                textAlign="left"
                fontWeight="630"
                fontSize="21px"
                padding="4px"
              >
                Discount
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel
            pb={4}
            overflow="scroll"
            height="150px"
            fontSize="17px"
          >
            <Box
              padding="2px"
              position="relative"
              fontWeight="700"
              overflow="hidden"
            >
              <span style={{ display: "flex" }}>
                <input type="checkbox" id="" onChange={handleChange} />{" "}
                <label style={{ marginLeft: "5px" }} position="absolute">
                  0% or more
                </label>
              </span>
              <span style={{ display: "flex", marginTop: "10px" }}>
                <input type="checkbox" id="" onChange={handleChange} />{" "}
                <label style={{ marginLeft: "5px" }} position="absolute">
                  10% or more
                </label>
              </span>
              <span style={{ display: "flex", marginTop: "10px" }}>
                <input type="checkbox" id="" onChange={handleChange} />{" "}
                <label style={{ marginLeft: "5px" }} position="absolute">
                  20% or more
                </label>
              </span>
              <span style={{ display: "flex", marginTop: "10px" }}>
                <input type="checkbox" id="" onChange={handleChange} />{" "}
                <label style={{ marginLeft: "5px" }} position="absolute">
                  30% or more
                </label>
              </span>
              <span style={{ display: "flex", marginTop: "10px" }}>
                <input type="checkbox" id="" onChange={handleChange} />{" "}
                <label style={{ marginLeft: "5px" }} position="absolute">
                  40% or more
                </label>
              </span>
              <span style={{ display: "flex", marginTop: "10px" }}>
                <input type="checkbox" id="" onChange={handleChange} />{" "}
                <label style={{ marginLeft: "5px" }} position="absolute">
                  50% or more
                </label>
              </span>
            </Box>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <h2>
            <AccordionButton marginTop="15px">
              <Box
                as="span"
                flex="1"
                textAlign="left"
                fontWeight="630"
                fontSize="21px"
                padding="4px"
              >
                Category
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel
            pb={4}
            overflow="scroll"
            height="150px"
            fontSize="17px"
          >
            <Box
              padding="2px"
              position="relative"
              fontWeight="700"
              overflow="hidden"
            >
              <span style={{ display: "flex" }}>
                <input type="checkbox" id="" onChange={handleChange} />{" "}
                <label style={{ marginLeft: "5px" }} position="absolute">
                  Accessories
                </label>
              </span>
              <span style={{ display: "flex", marginTop: "10px" }}>
                <input type="checkbox" id="" onChange={handleChange} />{" "}
                <label style={{ marginLeft: "5px" }} position="absolute">
                  F&B
                </label>
              </span>
              <span style={{ display: "flex", marginTop: "10px" }}>
                <input type="checkbox" id="" onChange={handleChange} />{" "}
                <label style={{ marginLeft: "5px" }} position="absolute">
                  F&B
                </label>
              </span>
              <span style={{ display: "flex", marginTop: "10px" }}>
                <input type="checkbox" id="" onChange={handleChange} />{" "}
                <label style={{ marginLeft: "5px" }} position="absolute">
                  Fruits and Vegetables
                </label>
              </span>
              <span style={{ display: "flex", marginTop: "10px" }}>
                <input type="checkbox" id="" onChange={handleChange} />{" "}
                <label style={{ marginLeft: "5px" }} position="absolute">
                  Home & Decor
                </label>
              </span>
              <span style={{ display: "flex", marginTop: "10px" }}>
                <input type="checkbox" id="" onChange={handleChange} />{" "}
                <label style={{ marginLeft: "5px" }} position="absolute">
                  Grocries
                </label>
              </span>
            </Box>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <h2>
            <AccordionButton marginTop="15px">
              <Box
                as="span"
                flex="1"
                textAlign="left"
                fontWeight="630"
                fontSize="20px"
                // padding="2px"
                display="flex"
              >
                Store Name
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel
            pb={4}
            overflow="scroll"
            height="150px"
            fontSize="17px"
          >
            <Box
              padding="2px"
              position="relative"
              fontWeight="700"
              overflow="hidden"
            >
              <span style={{ display: "flex" }}>
                <input type="checkbox" id="" onChange={handleChange} />{" "}
                <label style={{ marginLeft: "5px" }} position="absolute">
                  AAP KI DUKAAN
                </label>
              </span>
              <span style={{ display: "flex", marginTop: "10px" }}>
                <input type="checkbox" id="" onChange={handleChange} />{" "}
                <label style={{ marginLeft: "5px" }} position="absolute">
                  Ameecart
                </label>
              </span>
              <span style={{ display: "flex", marginTop: "10px" }}>
                <input type="checkbox" id="" onChange={handleChange} />{" "}
                <label style={{ marginLeft: "5px" }} position="absolute">
                  F&Anuna
                </label>
              </span>
              <span style={{ display: "flex", marginTop: "10px" }}>
                <input type="checkbox" id="" onChange={handleChange} />{" "}
                <label style={{ marginLeft: "5px" }} position="absolute">
                  Arihant Enterprises
                </label>
              </span>
              <span style={{ display: "flex", marginTop: "10px" }}>
                <input type="checkbox" id="" onChange={handleChange} />{" "}
                <label style={{ marginLeft: "5px" }} position="absolute">
                  Embellish
                </label>
              </span>
              <span style={{ display: "flex", marginTop: "10px" }}>
                <input type="checkbox" id="" onChange={handleChange} />{" "}
                <label style={{ marginLeft: "5px" }} position="absolute">
                  Fomil
                </label>
              </span>
            </Box>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <h2>
            <AccordionButton marginTop="15px">
              <Box
                as="span"
                flex="1"
                textAlign="left"
                fontWeight="630"
                fontSize="21px"
                padding="4px"
              >
                Returnable
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
        </AccordionItem>
        <AccordionItem>
          <h2>
            <AccordionButton marginTop="15px">
              <Box
                as="span"
                flex="1"
                textAlign="left"
                fontWeight="630"
                fontSize="21px"
              >
                Cancellable
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default Filtering;
