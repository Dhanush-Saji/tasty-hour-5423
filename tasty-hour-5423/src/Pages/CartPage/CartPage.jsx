import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Cart.css";
import { Navigate, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import{DeleteIcon} from '@chakra-ui/icons'
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
import { addProductQntyCart, addProductToCart, removeItemFromCart } from "../../Redux/Cart/Cart.action";
import IncrementComponent from './../../Components/CartPage/IncrementComponent';

const CartPage = () => {
  const AddressData = useSelector((store)=>store.addressReducer.address)
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [value, setValue] = useState("");
  const toast = useToast()
  const [quantity, setquantity] = useState(0);
  let data = useSelector((store) => store.cartReducer.cart)
  console.log(data);
  const [total, settotal] = useState(0);
  const redirectToAddress = () =>{
    navigate('/address')
  }
  const moveToCheckout = () =>{
    if(AddressData.length == 0){
      toast({
        title: 'No places to ship',
        description: "Please add an address.",
        status: 'error',
        position: 'top',
        duration: 5000,
      })
    }
    else{

      navigate('/checkout')
    }
  }
  useEffect(() => {
    let sum = 0;
    let qnty = 0;
    data.map((item) => (sum += item.price * item.quantity));
    data.map((item) => (qnty += item.quantity));
    settotal(sum);
    setquantity(qnty)
    console.log(qnty);
  }, [data,total,quantity]);
 console.log(quantity);
  return (
    <>
        <VStack  p='5' w='100%'>
          <Text as="b">My Cart({quantity} items)</Text>
        
        <hr />
      <Grid  w='100%' templateColumns={{base:'repeat(1,1fr)',md:'70% 30%'}}>
        <VStack p="5">
          {data.map((item) => (
            <Box  key={item._id}>
              <Flex key={item._id} w='100%' justifyContent='space-between'
                boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"
                borderRadius="0.5rem" flexDirection={{base:'column',md:'row'}} alignItems='center'
                p="5"
              >
                <Image
                  boxSize="100px"
                  objectFit="cover"
                  src={item.image}
                  alt="product image"
                />
                <Text maxW='200px'>{item.name}</Text>
                <IncrementComponent qnty={item.quantity} item={item} />
              </Flex>
            </Box>
          ))}
          <Flex w='100%'>
            <VStack justifyContent='center'>
              <Text>Delivery To:</Text>
              {
                AddressData.length>0?(
                  <Box  bg='rgb(218, 218, 218)' w='150px' minHeight='150px' p='3' borderRadius='15px'>
                    <Text>{AddressData[0].first}</Text>
                    <Text fontSize='sm'>{AddressData[0].last}</Text>
                    <Text fontSize='sm'>{AddressData[0].addr}</Text>
                    <Text fontSize='sm'>{AddressData[0].mob}</Text>
                </Box>
                ):(
                  <Button onClick={redirectToAddress} border="2px dashed grey" w='150px' h='150px' bg='transparent'>+ Add address</Button>
                )
              }
              
            </VStack>
          </Flex>
        </VStack>
        <VStack pt="5">
        <VStack justifyContent='center' bg='#902735' boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"
                borderRadius="0.5rem" w='100%' p='5' gap='2'>
              <Heading  color='white' size='md'>PRICE DETAILS</Heading>
              <Flex w='100%' alignItems='center' justifyContent='space-between'>
                <Text color='white'>Total quantity :</Text>
                <Button>{quantity}</Button>
              </Flex>
              <Flex w='100%' alignItems='center' justifyContent='space-between'>
                <Text color='white'>Total amount : </Text>
                <Button>{total}</Button>
              </Flex>
              <Button onClick={moveToCheckout} w='100%' style={{marginTop:'20px'}} colorScheme={'teal'}>Go to checkout</Button>
            </VStack>
            </VStack>
      </Grid>
      </VStack>
    </>
  );
};

export default CartPage;
