import React from 'react'
import NoData from '../../Components/NoData/NoData'
import {DataGrid,GridToolbar} from '@mui/x-data-grid'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Box } from '@mui/system';
import './Products.css'
import { productDataDummy } from '../../data/productDataDummy';
import { useMemo } from 'react';
import { Button,Stack,Typography,IconButton,Tooltip} from '@mui/material';
import {FiRefreshCcw} from 'react-icons/fi'
import {MdDelete} from 'react-icons/md'
import {HiOutlineRefresh} from 'react-icons/hi'
import {HiOutlinePlusSm} from 'react-icons/hi'
import { useState } from 'react';
import {useNavigate} from 'react-router-dom'
import axios from 'axios';
import { getproductError, getproductRequest, getproductSuccess } from '../../redux/products/Products.action';


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
  const [loading,setLoading] = useState(true)
  const dispatch = useDispatch()
  let {products:productData,isLoading} = useSelector((store)=>store.productData)
  const getProducts = () =>{
    dispatch(getproductRequest())
    axios.get("http://localhost:8080/products").then((res)=>dispatch(getproductSuccess(res.data))).catch((err)=>{
        console.log(err)
        dispatch(getproductError())})
}
//changed _id
  const rows = useMemo(
    () => productData.map((row, index) => ({ ...row, id: row.id })),
    [productData]
  );
  const columns = useMemo(()=>[
  { 
    field: "id",
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
    }}  height='1px' size="small" variant="contained" onClick={() => {productUpdate(row)}} startIcon={<HiOutlineRefresh />}>
          Update
        </Button>,
  },
  {
    field: "",
    headerName: "",
    align:'center',
    headerAlign: 'center',
    
    
    renderCell: ({ row }) =>
     <IconButton aria-label="delete" color="error" onClick={()=>{productDelete(row)}}>
      <MdDelete />
      </IconButton>,
  },
],[])
const productDelete = (row) =>{
  console.log(row);
}
const productUpdate = (row) =>{
  // navigate('/updateproducts')
}
useEffect(()=>{
  getProducts()
  const t = setTimeout(()=>{
    setLoading(isLoading)
  },2000)
  return () => {
    clearTimeout(t);
  }
},[])
const refreshData = () =>{
  setLoading(true)
  getProducts()
  const t = setTimeout(()=>{
    setLoading(isLoading)
  },1000)
  return () => {
    clearTimeout(t);
  }
}
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
      <Tooltip title="Refresh Data">
      <div onClick={refreshData} style={{marginLeft:'1rem',cursor:'pointer',width:'50px',height: '50px',backgroundColor:'#7D7D7D',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',borderRadius:'50%'}} >
        <FiRefreshCcw size='2rem' color='white' />
      </div>
</Tooltip>
      </div>
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

export default Products