import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
} from "@chakra-ui/react";
import data from "../Data/db.json";
import React from "react";
import Custom from "./Custom";
import '../Pages/ProductPage/newstyles.css'
const Filtering = () => {
 return (
    <div className="PRODUCT__FILTER__OPTIONS">
      <Accordion defaultIndex={[0]} allowMultiple>
        {data.Prices.map((items, i) =>
        i < 7 && (
              <AccordionItem key={i}>
                <h2>
                  <AccordionButton>
                    <Box as="span" flex="1" textAlign="left" fontWeight="530" fontSize="21px" padding="4px">
                      {items.title}
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
               <Custom/>
              </AccordionItem>
            )
        )}
      </Accordion>
    </div>
  );
};

export default Filtering;
