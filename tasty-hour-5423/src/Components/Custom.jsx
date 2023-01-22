import { AccordionPanel, Box } from "@chakra-ui/react";
import React from "react";
import data from "../Data/db.json";
import { filterdata } from "../Redux/Product_redux/action";
import { useDispatch } from "react-redux";
const Custom = () => {
  const dispatch = useDispatch();
  function handleChange(e) {
    console.log(e.target.value);
    dispatch(filterdata(e.target.value));
  }
  return (
    <AccordionPanel overflow="scroll" height="150px" fontSize="17px">
      <>
        <Box>
          {data.Prices.map(
            (items, i) =>
              items.price && (
                <Box key={i} padding="5px" position="relative">
                  <input
                    type="checkbox"
                    value={items.price}
                    id=""
                    onChange={handleChange}
                  />{" "}
                  <label style={{ marginLeft: "5px" }} position="absolute">
                    {items.price}
                  </label>
                </Box>
              )
          )}
        </Box>
      </>
    </AccordionPanel>
  );
};

export default Custom;
