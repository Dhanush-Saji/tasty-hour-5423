import React from 'react'
import { Flex,Text,Box } from '@chakra-ui/react';
import {HiUserGroup} from 'react-icons/hi'
import {GiWallet} from 'react-icons/gi'
import {TbTrafficLights} from 'react-icons/tb'

const Dashboard = () => {
  const dashboardCards = [
    {
      title: "Today's traffic",
      secondTitle: "800",
      icon: <TbTrafficLights color='#1FCB4F' />,
    },
    {
      title: "Today's sales",
      secondTitle: "₹600",
      icon: <GiWallet  color='#1FCB4F' />,
    },
    {
      title: "Total users",
      secondTitle: "1500",
      icon: <HiUserGroup  color='#1FCB4F' />,
    },
    {
      title: "Total sales",
      secondTitle: "₹10,000",
      icon: <GiWallet  color='#1FCB4F' />,
    },
  ];
  return (
    <>
    <Flex  p='4' justifyContent='space-evenly'>
      {
        dashboardCards.map((item)=>(
          <Flex  bg='#1A1C22' borderRadius='lg' p='2' pl='4' w='22%' gap='6' alignItems='center'>
          <Box bg='#282C35' p='3' borderRadius='lg'>
            {item.icon}
          </Box>
          <Flex flexDirection='column'>
            <Text color='#A9A9A9' fontSize='0.8rem'>{item.title}</Text>
            <Text fontWeight='medium' fontSize='1.4rem' color='white'>{item.secondTitle}</Text>
          </Flex>
      </Flex>
        ))
      }
      
    </Flex>
    </>
  )
}

export default Dashboard