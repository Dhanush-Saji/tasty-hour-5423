import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import {
  HStack,
  Stack,
  Box,
  AccordionPanel,
  Text,
  Flex,
  Image,
  Accordion,
  AccordionItem,Spacer,
  Button,
  AccordionButton,
  AccordionIcon,useDisclosure,
  VStack,
  Grid,Modal,ModalOverlay,ModalContent,ModalBody,ModalFooter,ModalHeader,ModalCloseButton,
  GridItem
} from "@chakra-ui/react";
import { useEffect } from "react";
import { getProductsFromDb } from "../../Redux/products/Products.action";
import { useSelector } from 'react-redux';
import './ProductPage.css'
const ProductPage = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [modalData, setmodalData] = useState({})
  const modalOpen = (item) =>{
    onOpen()
    setmodalData(item)
    console.log(modalData);
  }
  const {products} = useSelector((store)=>store.productReducer)
  const sortByPopular = () =>{
  }
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getProductsFromDb())
    },[])
  return (
    <Flex>
        <Grid p='5' templateColumns={{base:'repeat(1, 1fr)',md:'15% 85%'}}>
          <GridItem>
          <VStack>
          <Text as="b" fontSize="2xl">
            Filter By
          </Text>
            <Accordion allowMultiple>
              <AccordionItem>
                  <AccordionButton>
                    <Box as="span" flex="1" textAlign="left">
              <Text as="b" fontSize="lg">
                      Price
                  </Text>
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                <AccordionPanel pb={4}>

                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </VStack>
          </GridItem>
        <GridItem>
        <Stack>
          <Flex mt='5' ml='5' gap='5'>
            <Box sx={{cursor:'pointer'}} onClick={sortByPopular}><Text as="b" fontSize="lg">Sort By: Popular</Text></Box>
            <Box sx={{cursor:'pointer'}}><Text as="b" fontSize="lg">Low to High</Text></Box>
            <Box sx={{cursor:'pointer'}}><Text as="b" fontSize="lg">High to Low</Text></Box>
          </Flex>
          <Grid  templateColumns={{base:'repeat(1, 1fr)',md:'repeat(2, 1fr)',lg:'repeat(3, 1fr)'}} gap={6} p='7'>
            {
              products.map((item)=>(

                <GridItem key={item._id}>
                  <VStack className="gridItemBorder"  p='4' onClick={()=>{
                    setmodalData(item)
                    console.log(modalData);
                    onOpen()
                    }}>
                    <VStack>
                    <Image boxSize='100px' objectFit='cover' src={item.image} alt='product image' />
                    <Text fontSize="sm">{item.name}</Text>
                    <Text as="b" fontSize="lg">₹{item.price}</Text>
                    </VStack>
                    <Button _hover={{ bg: '#661720' }} backgroundColor='#8f2734' color='white' variant='outline'>Add to Cart</Button>
                  </VStack>
                </GridItem>
              ))
            }
          </Grid>
        </Stack>
        </GridItem>
          </Grid>
        <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader></ModalHeader>
          <ModalCloseButton />
          <ModalBody>
          <VStack>
          <Image boxSize='100px' objectFit='cover' src={modalData.image} alt='product image' />
          <Text as="b" fontSize="xl">{modalData.name}</Text>
          <Spacer />
          <Spacer />
          <Flex sx={{textAlign:'left'}} w='100%'>
          <Text  as='b' fontSize="lg">Description:</Text>
          </Flex>
          <Flex sx={{textAlign:'left'}} w='100%'>
          <Text fontSize="lg">{modalData.description}</Text>
          </Flex>
          <Flex justifyContent={'center'} w='100%'>
          <Text className="priceClass" as="b" fontSize="3xl">₹{modalData.price}</Text>
          </Flex>
          </VStack>
          <Flex justifyContent={'space-between'} w='100%' p='10px' backgroundColor='#55555581' borderRadius='5px'>
          <VStack>
          <Text fontSize="lg">Returnable</Text>
          <Text fontSize="lg">{modalData.returnable?'True':'False'}</Text>
          </VStack>
          <VStack>
          <Text fontSize="lg">Return Window</Text>
          <Text fontSize="lg">{modalData.return_window}</Text>
          </VStack>
          <VStack>
          <Text fontSize="lg">Cancellable</Text>
          <Text fontSize="lg">{modalData.cancellable?'True':'False'}</Text>
          </VStack>
          </Flex>
          </ModalBody>
          <ModalFooter justifyContent={'center'}>
          <Button w='100%' _hover={{ bg: '#661720' }} backgroundColor='#8f2734' color='white' variant='outline'>Add to Cart</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Flex>
  );
};

export default ProductPage;
