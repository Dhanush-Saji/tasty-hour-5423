import React from 'react'
import { Flex } from '@chakra-ui/react';
import {DataGrid} from '@mui/x-data-grid'
import { Box } from '@mui/system';
import './UserOverview.css'
import { userDataDummy } from './../../data/userDataDummy';
import { useMemo } from 'react';
import { Button,Stack,Typography  } from '@mui/material';
import {MdDelete} from 'react-icons/md'
import {HiOutlinePlusSm} from 'react-icons/hi'


const UserOverview = () => {
  const rows = useMemo(
    () => userDataDummy.map((row, index) => ({ ...row, id: row._id })),
    [userDataDummy]
  );
  const columns = useMemo(()=>[
  { 
    field: "_id",
    headerName: "ID",
    align:'center',
    headerAlign: 'center',
    flex:1,
  },
  {
    field: "first_name",
    headerName: "Name",
    align:'center',
    headerAlign: 'center',
    flex:1,
  },
  {
    field: "email",
    headerName: "Email",
    align:'center',
    headerAlign: 'center',
    flex:1,
  },
  {
    field: "timestamp",
    headerName: "Last Login",
    align:'center',
    headerAlign: 'center',
    flex:1,
  },
  {
    field: "phone",
    headerName: "Phone Number",
    align:'center',
    headerAlign: 'center',
    flex:1,
  },
  {
    field: "gender",
    headerName: "",
    align:'center',
    headerAlign: 'center',
    flex:1,
    renderCell: ({ row }) =>
      <Button size="small" variant="contained" onClick={() => console.log(row)} startIcon={<MdDelete />} color="error" sx={{borderRadius: 8}}>
        Delete
      </Button>,
  },])
  return (
    <>
    <Box component="div" sx={{ p: 4, width:'100%'}}>
    <Stack direction="row" justifyContent='space-between'>
      <Stack>
      <Typography fontWeight='bold' color='white' variant='h4'>User Overview</Typography>
      <Typography my='5px' mt='5px' color='#7D7D7D' variant='h6' sx={{fontSize:'0.8rem'}}>This data is directly fetching database perform cautiously</Typography>
      </Stack>
      <div style={{display:'flex',alignItems:'center'}}>
      <Button sx={{
    ':hover': {
      bgcolor: '#d39f1b'
    },backgroundColor:'#FFC01E',color:'#1A1C22'
  }}  height='1px' size="medium" variant="contained" onClick={() => {}} startIcon={<HiOutlinePlusSm />}>
        Add user
      </Button>
      </div>
    </Stack>
      <Box  height='60vh' sx={{
        mt:'10px',border:'none',"& .MuiDataGrid-root":{border:'none',padding:'0.5rem',color:'white'},
        "& .MuiDataGrid-row":{border:'none'},"& .MuiDataGrid-columnHeaders":{color:"#7D7D7D"},
        "& .MuiDataGrid-cell":{},"& .MuiTablePagination-root":{color:"#7D7D7D"},
        "& .MuiSvgIcon-root":{color:"#7D7D7D"}
        }}>
        <DataGrid  className='datagrid' rows={rows} columns={columns} pageSize={5} getRowClassName={(params) =>
          params.indexRelativeToCurrentPage % 2 === 0 ? 'even' : 'odd'
        } />
        </Box>
    </Box>
    </>
  )
}

export default UserOverview