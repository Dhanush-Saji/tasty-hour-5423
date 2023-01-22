import React, { useState } from 'react'
import './Login.css'
import { VStack, Input, Flex, Text,Spacer,PopoverContent,Portal,PopoverTrigger,Popover,PopoverArrow,PopoverCloseButton,PopoverBody,Button, useDisclosure } from "@chakra-ui/react";
import { loginError, loginRequest, loginSuccess } from '../../redux/auth/Auth.action';
import { useDispatch } from 'react-redux';
import { Navigate, useNavigate } from 'react-router-dom';
import { saveData } from '../../utils/AccessLocalStorage';
const LoginPage = () => {
  const navigate = useNavigate()
  const [text, settext] = useState('')
  const dispatch = useDispatch()
  const [password, setpassword] = useState('')
  const loginSubmit = async()=>{
    if(text == 'dhanush' && password == 'dhanush'){
      try {
        dispatch(loginRequest())
        dispatch(loginSuccess(true))
        let data = {text,password}
        let key = 'pass'
        saveData(key,data)
        settext('')
        setpassword('')
        navigate('/')
      } catch (error) {
        dispatch(loginError())
      }
      
      
        
    }
    else{
      alert("Invalid Credentials")
    }
    
  }
  return (
    <VStack minW={{base:'100%'}} className='loginParentDiv'>
      <VStack minW={{base:'70%',md:'50%'}} border='2px' className='loginChildDiv' p='5%'>
      <Text mb='20px' fontSize='2xl' as='b' color='rgb(189, 189, 189)'>CraftCo Admin</Text>
      <Flex alignItems='start' w='100%'><Text fontSize='sm'color='rgb(189, 189, 189)'>Username</Text></Flex>
      <Input value={text} onChange={(e)=>settext(e.target.value)} placeholder='Enter username' color='rgb(189, 189, 189)' border='none' />

      <Flex alignItems='start' w='100%'><Text fontSize='sm'color='rgb(189, 189, 189)'>Password</Text></Flex>
      <Input value={password} type='password' onChange={(e)=>setpassword(e.target.value)} placeholder='Enter password' color='rgb(189, 189, 189)' border='none' />

      <Button w='100%' style={{marginTop:'50px'}} onClick={loginSubmit}>Login</Button>
      </VStack>
    </VStack>
  )
}

export default LoginPage