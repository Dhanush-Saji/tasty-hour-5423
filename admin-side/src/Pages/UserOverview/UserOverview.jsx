import React from 'react'
import NoData from '../../Components/NoData/NoData'
import { useState } from 'react';
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios'
import { Flex } from '@chakra-ui/react';
import {DataGrid,GridToolbar} from '@mui/x-data-grid'
import { Box } from '@mui/system';
import './UserOverview.css'
import { userDataDummy } from './../../data/userDataDummy';
import { useMemo } from 'react';
import { Button,Stack,Typography,Tooltip  } from '@mui/material';
import {MdDelete} from 'react-icons/md'
import {FiRefreshCcw} from 'react-icons/fi'
import { getuserError, getuserRequest, getuserSuccess } from '../../redux/users/Users.action';
import Loader from '../../Components/Loader/Loader';


const UserOverview = () => {
  const [loading,setLoading] = useState(true)
  const dispatch = useDispatch()
  let {users:userData,isLoading} = useSelector((store)=>store.userData)
  const getUsers = () =>{
    dispatch(getuserRequest())
    axios.get("https://api.npoint.io/d9dedcefac61df863b04").then((res)=>dispatch(getuserSuccess(res.data))).catch((err)=>{
        console.log(err)
        dispatch(getuserError())})
}
  const rows = useMemo(
    () => userData.map((row, index) => ({ ...row, id: row._id })),
    [userData]
  );
  const columns = useMemo(()=>[
  { 
    field: "_id",
    headerName: "ID",

    flex:1,
  },
  {
    field: "first_name",
    headerName: "Name",

    flex:1,
  },
  {
    field: "email",
    headerName: "Email",

    flex:1,
  },
  {
    field: "timestamp",
    headerName: "Last Login",

    flex:1,
  },
  {
    field: "phone",
    headerName: "Phone Number",

    flex:1,
  },
  {
    field: "gender",
    headerName: "",

    flex:1,
    renderCell: ({ row }) =>
      <Button size="small" variant="contained" onClick={() => console.log(row)} startIcon={<MdDelete />} color="error" sx={{borderRadius: 8}}>
        Delete
      </Button>,
  },],[])
  useEffect(()=>{
    getUsers()
    const t = setTimeout(()=>{
      setLoading(isLoading)
    },1000)
    return () => {
      clearTimeout(t);
    }
  },[])
  const refreshData = () =>{
    setLoading(true)
    getUsers()
    const t = setTimeout(()=>{
      setLoading(isLoading)
    },1000)
    return () => {
      clearTimeout(t);
    }
  }
  return (
    <>
    <Box  m="20px">
    <Stack direction="row" justifyContent='space-between'>
      <Stack>
      <Typography fontWeight='bold' color='white' variant='h4'>User Overview</Typography>
      <Typography my='5px' mt='5px' color='#7D7D7D' variant='h6' sx={{fontSize:'0.8rem'}}>Easily manage and monitor all your users</Typography>
      </Stack>
      <Tooltip title="Refresh Data">
      <div onClick={refreshData} style={{cursor:'pointer',width:'50px',height: '50px',backgroundColor:'#7D7D7D',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',borderRadius:'50%'}} >
        <FiRefreshCcw size='2rem' color='white' />
      </div>
</Tooltip>
      </Stack>
      {
        loading?(<div><NoData /></div>):(
          <>
          <Box
          m="30px 0 0 0"
          // height="75vh"
          sx={{
            "& .MuiDataGrid-root": {
              border: "none",
            },
            "& .MuiDataGrid-cell": {
              borderBottom: "none",
              color:'white'
            },
            "& .MuiDataGrid-columnHeaders": {
              backgroundColor: '#3d4a70',
              borderBottom: "none",
              color:'white'
            },
            "& .MuiDataGrid-virtualScroller": {
              backgroundColor: '#343842',
            },
            "& .MuiDataGrid-footerContainer": {
              borderTop: "none",
              backgroundColor: '#3d4a70',
              color:'white'
            },
            "& .MuiCheckbox-root": {
              color: `white !important`,
            },
            "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
              color: `white !important`,
            },"& .MuiTablePagination-root":{color:"white"},
            "& .MuiSvgIcon-root":{color:"white"}
          }}
        >
          <DataGrid rows={rows}
            columns={columns}
            components={{ Toolbar: GridToolbar }} autoHeight getRowClassName={(params) =>
            params.indexRelativeToCurrentPage % 2 === 0 ? 'even' : 'odd'
          } className='datagridstyle' pageSize={5} />
          </Box>
          <Typography my='5px' mt='5px' color='error' variant='h5' sx={{fontSize:'0.9rem'}}>This data is directly fetching from database, use cautiously</Typography>
          </>
        )
      }
      
      </Box>
       
    </>
  )
}

export default UserOverview