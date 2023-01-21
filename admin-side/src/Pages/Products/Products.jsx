import React from 'react'
import {DataGrid,GridToolbar} from '@mui/x-data-grid'
import { Box } from '@mui/system';
import './Products.css'
import { productDataDummy } from '../../data/productDataDummy';
import { useMemo } from 'react';
import { Button,Stack,Typography,IconButton} from '@mui/material';
import {MdDelete} from 'react-icons/md'
import {HiOutlineRefresh} from 'react-icons/hi'
import {HiOutlinePlusSm} from 'react-icons/hi'
import { useState } from 'react';
import {useNavigate} from 'react-router-dom'


const Products = () => {
  const navigate = useNavigate();
  const [name, setname] = useState("")
  const [category, setcategory] = useState("")
  const [image, setimage] = useState("")
  const [desc, setdesc] = useState("")
  const [price, setprice] = useState(0)
  const [returnable, setreturnable] = useState(false)
  const [cancellable, setcancellable] = useState(false)
  const [timeToShip, settimeToShip] = useState(0)
  const [returnWindow, setreturnWindow] = useState(0)
  const rows = useMemo(
    () => productDataDummy.map((row, index) => ({ ...row, id: row._id })),
    [productDataDummy]
  );
  const columns = useMemo(()=>[
  { 
    field: "_id",
    headerName: "ID",
    flex:1,
    
    
  },
  {
    field: "images",
    headerName: "Images",
    flex:1,
    
    
    renderCell: ({ row }) =>
      <img src={row.images} alt="Product image" />,
  },
  {
    field: "name",
    headerName: "Product Name",
    flex:1,
    
  },
  {
    field: "category",
    headerName: "Category",
    flex:1,
    
  },
  {
    field: "price",
    headerName: "Price",
    flex:1,
    
    
  },
  {
    field: "cancellable",
    headerName: "",
    flex:1,
    
    
    renderCell: ({ row }) =>
    <Button sx={{
      ':hover': {
        bgcolor: '#d39f1b'
      },backgroundColor:'#FFC01E',color:'#1A1C22',
    }}  height='1px' size="small" variant="contained" onClick={() => {}} startIcon={<HiOutlineRefresh />}>
          Update
        </Button>,
  },
  {
    field: "",
    headerName: "",
    align:'center',
    headerAlign: 'center',
    
    
    renderCell: ({ row }) =>
     <IconButton aria-label="delete" color="error" onClick={()=>console.log(row)}>
      <MdDelete />
      </IconButton>,
  },
],[])
const addProductDirect = () =>{
  navigate('/addproducts')
}
  return (
    <>
    <Box  m="20px">
    <Stack direction="row" justifyContent='space-between'>
      <Stack>
      <Typography fontWeight='bold' color='white' variant='h4'>Products</Typography>
      <Typography my='5px' mt='5px' color='#7D7D7D' variant='h6' sx={{fontSize:'0.8rem'}}>This data is directly fetching from database perform cautiously</Typography>
      </Stack>
      <div style={{display:'flex',alignItems:'center'}}>
      <Button variant="contained" startIcon={<HiOutlinePlusSm />} onClick={addProductDirect}>Add Products</Button>
      </div>
    </Stack>
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
    </Box>
    </>
  )
}

export default Products