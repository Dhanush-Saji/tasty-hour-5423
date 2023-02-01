import React, { useState } from 'react'
import { Grid, Text, useDisclosure} from '@chakra-ui/react';
import { Input } from '@chakra-ui/react';
import { Box } from '@chakra-ui/react';
import { Flex } from '@chakra-ui/react';
import { Button, Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,useToast } from '@chakra-ui/react';
import { addAddresstoRedux } from '../../Redux/Address/Address.action';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

const Address = () => {
    const AddressData = useSelector((store)=>store.addressReducer.address)
    const toast = useToast()
    const dispatch = useDispatch()
    const [address, setaddress] = useState({
        first:"",
        last:"",
        addr:"",
        mob:""
    })
    const { isOpen, onOpen, onClose } = useDisclosure()
    const addAddressModal = () =>{
        onOpen()
    }
    const saveAddress = () =>{
        if((address.first == '') || (address.last == '') || (address.addr == '') || (address.mob == '')){
            toast({
                description: "Please fill all the fields",
                status: 'error',
                position: 'top',
                duration: 3000,
                color:'white'
              })
        }
        else{

            dispatch(addAddresstoRedux(address))
            onClose()
        }
    }
  return (
    <>
    <Grid  templateColumns={{base:'repeat(1,1fr)',md:'repeat(5,1fr)'}} p='5' gap='20px'>
        {
            AddressData.map((item)=>(
                <Box border="2px solid grey" w='150px' minHeight='150px' p='1'>
                    <Text>{item.first}</Text>
                    <Text>{item.last}</Text>
                    <Text>{item.addr}</Text>
                    <Text>{item.mob}</Text>
                </Box>
            ))
        }
        <Box>
        <Button onClick={addAddressModal} border="2px dashed grey" w='150px' h='150px' bg='transparent'>+ Add address</Button>
        </Box>
        <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay backdropFilter='blur(10px)' />
        <ModalContent p='3' w={{base:'90%',md:'100%'}}>
          <ModalHeader>Add Address</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
          <Box mb='5'>
        <label>First Name</label>
        <Input value={address.first} onChange={(e)=>{
            setaddress({...address,first:e.target.value})
        }} size='md' />
        </Box>
        <Box  mb='5'>
        <label>Last Name</label>
        <Input value={address.last} onChange={(e)=>{
            setaddress({...address,last:e.target.value})
        }} size='md' />
        </Box>
        <Box  mb='5'>
        <label>Address line 1</label>
        <Input value={address.addr} onChange={(e)=>{
            setaddress({...address,addr:e.target.value})
        }} size='md' />
        </Box>
        <Box  mb='5'>
        <label>Mobile Number</label>
        <Input value={address.mob} onChange={(e)=>{
            setaddress({...address,mob:e.target.value})
        }} size='md' />
        </Box>
        <Button onClick={saveAddress} w='100%' colorScheme='teal'>Add Address</Button>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Grid>
    </>
  )
}

export default Address