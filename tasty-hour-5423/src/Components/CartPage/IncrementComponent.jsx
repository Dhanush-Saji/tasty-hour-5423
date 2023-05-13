import React from 'react'
import{DeleteIcon} from '@chakra-ui/icons'
import { useDispatch, useSelector } from "react-redux";
import {
  Box,
  Button,
  Flex,
  Grid,
  Image,
  Text,
  VStack,
  Heading,
  useToast,
} from "@chakra-ui/react";
import { addProductToCart } from '../../Redux/Cart/Cart.action';
const IncrementComponent = ({item,qnty}) => {
  
  console.log(qnty);
  const dispatch = useDispatch()
    const removeItem = ()=>{
        console.log('removeItem');
    }
    const incrementQnty = ()=>{
      dispatch(addProductToCart(item))
    }
  return (
    <>
    <VStack justifyContent={'space-between'}>
                <Flex alignItems={"center"} gap="2">
                  <Button colorScheme="teal" size="md">
                    -
                  </Button>
                  <Heading as="h5" size="sm">{qnty}
                  </Heading>
                  <Button colorScheme="teal" size="md" onClick={()=>{incrementQnty(item)}}>
                    +
                  </Button>
                </Flex>
                <Button onClick={()=>{removeItem()}} colorScheme='red' size="sm"><DeleteIcon /></Button>
                </VStack>
    </>
  )
}

export default IncrementComponent