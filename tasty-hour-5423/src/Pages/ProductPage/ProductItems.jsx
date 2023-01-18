import { Box, Img } from '@chakra-ui/react';
import React from 'react'

const ProductItems = (products) => {
  console.log("i am products",products);
  return (
    <Box padding="14px 0px 15px 15px" margin="15px 0 0 0" height="353px" width="90%" border="1px solid black" textAlign="center">
      <Box border="1px solid black" width="96%" height="227px"><Img src={products.image} height="100%" width="100%"/></Box>
    </Box>
  )
}

export default ProductItems
