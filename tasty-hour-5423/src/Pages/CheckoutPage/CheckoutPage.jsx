import React, { useEffect, useState } from 'react'
import { Flex, FormLabel,Heading, Grid, GridItem, Input, VStack,FormControl,FormHelperText,FormErrorMessage, Text } from '@chakra-ui/react';
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';
import { Box } from '@chakra-ui/react';
import { Button } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { useToast } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { addProductToOrders } from '../../Redux/Orders/Orders.action';
import { emptyCart } from '../../Redux/Cart/Cart.action';

const CheckoutPage = () => {
    const data = useSelector((store)=>store.cartReducer.cart)
    const [qnty, setqnty] = useState(0)
    const [amount, setamount] = useState(0)
    const [details, setdetails] = useState({
        cvc: '',
    expiry: '',
    focus: '',
    name: '',
    number: '',
    })
    const toast = useToast()
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const placeOrder = () =>{
      if(details.cvc == '' || details.expiry == '' || details.name == '' || details.number == ''){
        toast({
          title: 'Please add card details',
          description: "Your card details are safe with us",
          status: 'error',
          position: 'top',
          duration: 5000,
        })
      }
      else{
        let order = {
          paymentDetails:details,
          orderDetails:data
        }
        dispatch(addProductToOrders(order))
        dispatch(emptyCart())
        toast({
          title: 'Hurray.. !',
          description: "Order successful",
          status: 'success',
          position: 'top',
          duration: 5000,
        })
        navigate('/')
      }
    }
    useEffect(()=>{
        let sum = 0;
    let qntysum = 0;
    data.map((item) => (sum += item.price * item.quantity));
    data.map((item) => (qntysum += item.quantity));
        setqnty(qntysum)
        setamount(sum)
    },[])
  return (
    <Grid
    templateAreas={{base:`"nav""header"`,md:`"header nav"`}}
    gridTemplateColumns={{base:'repeat(1,1fr)',md:'60% 40%'}}>
    <VStack area={'header'} p='2rem' >
        <VStack justifyContent={'center'}>
        <Cards
          cvc={details.cvc}
          expiry={details.expiry}
          focus={details.focus}
          name={details.name}
          number={details.number}
        />
        <FormControl>
      <FormLabel  mt='15px'>Card Number</FormLabel>
      <Input value={details.number} w='100%' name='number' placeholder='...' onFocus={(e)=>{setdetails({...details,focus:e.target.name})}} onChange={(e)=>{
            setdetails({...details, number: e.target.value})
        }} type='number' />

      <FormLabel  mt='15px'>Card Name</FormLabel>
      <Input value={details.name} w='100%' name='name' placeholder='...' onFocus={(e)=>{setdetails({...details,focus:e.target.name})}} onChange={(e)=>{
            setdetails({...details, name: e.target.value})
        }} type='text' />
        <Flex gap='1rem' mt='15px'>
            <Box>

        <FormLabel>Expiry Date</FormLabel>
            <Input value={details.date} w='100%' name='date' placeholder='...' onFocus={(e)=>{setdetails({...details,focus:e.target.name})}} onChange={(e)=>{
                setdetails({...details, expiry: e.target.value})
            }} type='number' />
            </Box>
            <Box>

        <FormLabel>CVV</FormLabel>
            <Input value={details.cvv} w='100%' name='cvv' placeholder='...' onFocus={(e)=>{setdetails({...details,focus:e.target.name})}} onChange={(e)=>{
                setdetails({...details, cvc: e.target.value})
            }} type='number' />
            </Box>

        </Flex>
        <Button onClick={placeOrder} w='100%' style={{marginTop:'20px'}} colorScheme={'teal'}>Go to checkout</Button>
    </FormControl>
        
        
        </VStack>
    </VStack>
    <GridItem p="5" area={'nav'} w='100%'>
        <VStack justifyContent='center' bg='#902735' boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"
                borderRadius="0.5rem" w='100%' p='5' gap='2'>
              <Heading  color='white' size='md'>PRICE DETAILS</Heading>
              <Flex w='100%' alignItems='center' justifyContent='space-between'>
                <Text color='white'>Total quantity :</Text>
                <Button>{qnty}</Button>
              </Flex>
              <Flex w='100%' alignItems='center' justifyContent='space-between'>
                <Text color='white'>Total amount : </Text>
                <Button>{amount}</Button>
              </Flex>
            </VStack>
            </GridItem>
    </Grid>
  )
}

export default CheckoutPage