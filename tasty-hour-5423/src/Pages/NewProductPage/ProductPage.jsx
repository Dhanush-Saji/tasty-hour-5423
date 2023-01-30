import React, { useState } from "react";
import {BiFilterAlt} from 'react-icons/bi'
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
  AccordionItem,Spacer,Hide,
  Button,
  AccordionButton,
  AccordionIcon,useDisclosure,Checkbox,useToast,
  VStack,Toast,styled,
  Grid,Modal,ModalOverlay,ModalContent,ModalBody,ModalFooter,ModalHeader,ModalCloseButton,
  GridItem,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { getProductsFromDb } from "../../Redux/products/Products.action";
import { useSelector } from 'react-redux';
import './ProductPage.css'
import { addProductToCart } from "../../Redux/Cart/Cart.action";
import NoData from "../../Components/NoData/NoData";
const ProductPage = () => {
  const toast = useToast()
  const dispatch = useDispatch()
  const { isOpen:cardisOpen, onOpen:cardonOpen, onClose:cardonClose } = useDisclosure()
  const { isOpen:filterisOpen, onOpen:filteronOpen, onClose:filteronClose } = useDisclosure()
  const [modalData, setmodalData] = useState({})
  const {products,isLoading} = useSelector((store)=>store.productReducer)
  const sortByPopular = () =>{
  }
  const addToCart = (item) =>{
   toast({
      title: 'Add to cart',
      status: 'success',
      duration: 1000,
    })
    dispatch(addProductToCart(item))
  }
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
          <Hide below='md'>
            <Accordion allowMultiple w='100%'>
              <AccordionItem>
                  <AccordionButton>
                    <Box as="span" flex="1" textAlign="left">
              <Text as="b" fontSize="lg"> Price</Text>
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                <AccordionPanel pb={4}>
                  <VStack>
                <Checkbox colorScheme='green'>100-299</Checkbox>
                <Checkbox colorScheme='green'>300-499</Checkbox>
                <Checkbox colorScheme='green'>500-799</Checkbox>
                <Checkbox colorScheme='green'>Above 800</Checkbox>
                </VStack>
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem>
                  <AccordionButton>
                    <Box as="span" flex="1" textAlign="left">
              <Text as="b" fontSize="lg"> Category</Text>
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                <AccordionPanel pb={4}>
                  <VStack>
                <Checkbox colorScheme='green'>Home Decor</Checkbox>
                <Checkbox colorScheme='green'>Tote Bags</Checkbox>
                <Checkbox colorScheme='green'>Kitchen Ware</Checkbox>
                <Checkbox colorScheme='green'>Ceramic Bags</Checkbox>
                <Checkbox colorScheme='green'>Idols</Checkbox>
                </VStack>
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem>
                  <AccordionButton>
                    <Box as="span" flex="1" textAlign="left">
              <Text as="b" fontSize="lg">Returnable</Text>
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                <AccordionPanel pb={4}>
                  <VStack>
                <Checkbox colorScheme='green'>Yes</Checkbox>
                <Checkbox colorScheme='green'>No</Checkbox>
                </VStack>
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem>
                  <AccordionButton>
                    <Box as="span" flex="1" textAlign="left">
              <Text as="b" fontSize="lg">Cancellable</Text>
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                <AccordionPanel pb={4}>
                  <VStack>
                <Checkbox colorScheme='green'>Yes</Checkbox>
                <Checkbox colorScheme='green'>No</Checkbox>
                </VStack>
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
            </Hide>
          </VStack>
          </GridItem>
        <GridItem w='100%'>
        <Stack>
          <Flex mt='5' ml='5' gap='5'>
            <Box sx={{cursor:'pointer'}} onClick={sortByPopular}><Text as="b" fontSize="lg">Sort By: Popular</Text></Box>
            <Box sx={{cursor:'pointer'}}><Text as="b" fontSize="lg">Low to High</Text></Box>
            <Box sx={{cursor:'pointer'}}><Text as="b" fontSize="lg">High to Low</Text></Box>
            <Hide above='md'>
            <BiFilterAlt onClick={()=>{filteronOpen()}} />
            </Hide>
          </Flex>
          {
            isLoading?(<div><NoData /></div>):(
              <>
              <Grid  templateColumns={{base:'repeat(1, 1fr)',md:'repeat(2, 1fr)',lg:'repeat(3, 1fr)'}} gap={6} p='7'>
            {
              products.map((item)=>(

                <GridItem key={item._id}>
                  <VStack className="gridItemBorder"  p='4'>
                    <VStack  onClick={()=>{
                    setmodalData(item)
                    cardonOpen()
                    }}>
                    <Image boxSize='100px' objectFit='cover' src={item.image} alt='product image' />
                    <Text fontSize="sm">{item.name}</Text>
                    <Text as="b" fontSize="lg">₹{item.price}</Text>
                    </VStack>
                    <Button onClick={()=>{
                      addToCart(item)
                    }} _hover={{ bg: '#661720' }} backgroundColor='#8f2734' color='white' variant='outline'>Add to Cart</Button>
                  </VStack>
                </GridItem>
              ))
            }
          </Grid>
              </>
            )
          }
          </Stack>
          </GridItem>
            </Grid>
          
        <Modal isOpen={cardisOpen} onClose={cardonClose}>
        <ModalOverlay />
        <ModalContent  w={{base:'90%', md:'100%'}}>
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
          <VStack justifyContent='center'>
          <Text textAlign='center' fontSize="lg">Return Window</Text>
          <Text fontSize="lg">{modalData.return_window}</Text>
          </VStack>
          <VStack>
          <Text fontSize="lg">Cancellable</Text>
          <Text fontSize="lg">{modalData.cancellable?'True':'False'}</Text>
          </VStack>
          </Flex>
          </ModalBody>
          <ModalFooter justifyContent={'center'}>
          <Button w='100%' _hover={{ bg: '#661720' }} backgroundColor='#8f2734' color='white' variant='outline' onClick={()=>{
            addToCart(modalData)
          }}>Add to Cart</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <Modal isOpen={filterisOpen} onClose={filteronClose}>
        <ModalOverlay />
        <ModalContent  w={{base:'90%', md:'100%'}}>
          <ModalHeader>Filter By</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
          <Accordion allowMultiple w='100%'>
              <AccordionItem>
                  <AccordionButton>
                    <Box as="span" flex="1" textAlign="left">
              <Text as="b" fontSize="lg"> Price</Text>
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                <AccordionPanel pb={4}>
                  <VStack>
                <Checkbox colorScheme='green'>100-299</Checkbox>
                <Checkbox colorScheme='green'>300-499</Checkbox>
                <Checkbox colorScheme='green'>500-799</Checkbox>
                <Checkbox colorScheme='green'>Above 800</Checkbox>
                </VStack>
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem>
                  <AccordionButton>
                    <Box as="span" flex="1" textAlign="left">
              <Text as="b" fontSize="lg"> Category</Text>
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                <AccordionPanel pb={4}>
                  <VStack>
                <Checkbox colorScheme='green'>Home Decor</Checkbox>
                <Checkbox colorScheme='green'>Tote Bags</Checkbox>
                <Checkbox colorScheme='green'>Kitchen Ware</Checkbox>
                <Checkbox colorScheme='green'>Ceramic Bags</Checkbox>
                <Checkbox colorScheme='green'>Idols</Checkbox>
                </VStack>
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem>
                  <AccordionButton>
                    <Box as="span" flex="1" textAlign="left">
              <Text as="b" fontSize="lg">Returnable</Text>
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                <AccordionPanel pb={4}>
                  <VStack>
                <Checkbox colorScheme='green'>Yes</Checkbox>
                <Checkbox colorScheme='green'>No</Checkbox>
                </VStack>
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem>
                  <AccordionButton>
                    <Box as="span" flex="1" textAlign="left">
              <Text as="b" fontSize="lg">Cancellable</Text>
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                <AccordionPanel pb={4}>
                  <VStack>
                <Checkbox colorScheme='green'>Yes</Checkbox>
                <Checkbox colorScheme='green'>No</Checkbox>
                </VStack>
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Flex>
  );
};

export default ProductPage;
