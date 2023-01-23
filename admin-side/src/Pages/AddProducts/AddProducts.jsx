import React from 'react'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { Box,Button,TextField } from '@mui/material'
import {Formik} from 'formik'
import * as yup from 'yup'
import useMediaQuery from '@mui/material/useMediaQuery'
import './AddProducts.css'
import { useDispatch } from 'react-redux';
import { addProduct } from '../../redux/products/Products.action';
import { useNavigate } from 'react-router-dom';

const AddProducts = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
    const isNonMobile = useMediaQuery("(min-width:600px)")
    const initialValues={
        name: "",
      category: "",
      image: "",
      returnable: false,
      cancellable: false,
      popular:0,
      discount:0,
      returnWindow: 0,
      description: "",
      price: 0
    }
    const productSchema = yup.object().shape({
        name: yup.string().required("required"),
      category: yup.string().required("required"),
      image: yup.string(),
      returnable: yup.boolean().required("required"),
      cancellable: yup.boolean().required("required"),
      returnWindow: yup.number().required("required"),
      popular: yup.number().required("required"),
      discount: yup.number().required("required"),
      description: yup.string(),
      price: yup.number().required("required"),
    })
    const handleFormSubmit = (values) =>{
      // console.log(values)
      dispatch(addProduct(values))
      navigate('/products')

    }
  return (
    <>
    <Box  m="20px">
        <Formik
        onSubmit={handleFormSubmit}
        initialValues={initialValues}
        validationSchema={productSchema}
        >
        {({values,errors,touched,handleBlur,handleChange,handleSubmit})=>(
            <form onSubmit={handleSubmit}>
                <Box display='grid' gap='30px' gridTemplateColumns="repeat(4, minmax(0, 1fr))"
                sx={{"& >div":{gridColumn:isNonMobile?undefined:"span 4"}}}>

                    <TextField fullWidth
                    variant="filled"
                    type='text' label='Name' onBlur={handleBlur} onChange={handleChange} value={values.name} name="name" error={!!touched.name && !!errors.name} helperText={touched.name && errors.name}
                    sx={{gridColumn:"span 2","& .MuiFormLabel-root":{color:'#9b9b9b'},"& .MuiInputBase-input":{backgroundColor:'#9494943b',color:'#d8d8d8',borderRadius:'7px 7px 0px 0px'}}}
                     />
                    <TextField fullWidth
                    variant="filled"
                    type='text' label='Category' onBlur={handleBlur} onChange={handleChange} value={values.category} name="category" error={!!touched.category && !!errors.category} helperText={touched.category && errors.category}
                    sx={{gridColumn:"span 2","& .MuiFormLabel-root":{color:'#9b9b9b'},"& .MuiInputBase-input":{backgroundColor:'#9494943b',color:'#d8d8d8',borderRadius:'7px 7px 0px 0px'}}}
                     />
                    <TextField fullWidth
                    variant="filled"
                    type='text' label='Image URL' onBlur={handleBlur} onChange={handleChange} value={values.image} name="image" error={!!touched.image && !!errors.image} helperText={touched.image && errors.image}
                    sx={{gridColumn:"span 2","& .MuiFormLabel-root":{color:'#9b9b9b'},"& .MuiInputBase-input":{backgroundColor:'#9494943b',color:'#d8d8d8',borderRadius:'7px 7px 0px 0px'}}}
                     />
                     <TextField fullWidth
                    variant="filled"
                    type='text' label='Description' onBlur={handleBlur} onChange={handleChange} value={values.description} name="description" error={!!touched.description && !!errors.description} helperText={touched.description && errors.description}
                    sx={{gridColumn:"span 2","& .MuiFormLabel-root":{color:'#9b9b9b'},"& .MuiInputBase-input":{backgroundColor:'#9494943b',color:'#d8d8d8',borderRadius:'7px 7px 0px 0px'}}}
                     />
                     <TextField fullWidth
                    variant="filled"
                    type='text' label='Popular' onBlur={handleBlur} onChange={handleChange} value={values.popular} name="popular" error={!!touched.popular && !!errors.popular} helperText={touched.popular && errors.popular}
                    sx={{gridColumn:"span 2","& .MuiFormLabel-root":{color:'#9b9b9b'},"& .MuiInputBase-input":{backgroundColor:'#9494943b',color:'#d8d8d8',borderRadius:'7px 7px 0px 0px'}}}
                     />
                     <TextField fullWidth
                    variant="filled"
                    type='text' label='Discount' onBlur={handleBlur} onChange={handleChange} value={values.discount} name="discount" error={!!touched.discount && !!errors.discount} helperText={touched.discount && errors.discount}
                    sx={{gridColumn:"span 2","& .MuiFormLabel-root":{color:'#9b9b9b'},"& .MuiInputBase-input":{backgroundColor:'#9494943b',color:'#d8d8d8',borderRadius:'7px 7px 0px 0px'}}}
                     />
                     <TextField fullWidth
                    variant="filled"
                    type='text' label='Price' onBlur={handleBlur} onChange={handleChange} value={values.price} name="price" error={!!touched.price && !!errors.price} helperText={touched.price && errors.price}
                    sx={{gridColumn:"span 2","& .MuiFormLabel-root":{color:'#9b9b9b'},"& .MuiInputBase-input":{backgroundColor:'#9494943b',color:'#d8d8d8',borderRadius:'7px 7px 0px 0px'}}}
                     />
                    <TextField fullWidth
                    variant="filled"
                    type='text' label='Return Period' onBlur={handleBlur} onChange={handleChange} value={values.returnWindow} name="returnWindow" error={!!touched.returnWindow && !!errors.returnWindow} helperText={touched.returnWindow && errors.returnWindow}
                    sx={{gridColumn:"span 2","& .MuiFormLabel-root":{color:'#9b9b9b'},"& .MuiInputBase-input":{backgroundColor:'#9494943b',color:'#d8d8d8',borderRadius:'7px 7px 0px 0px'}}}
                     />
                     <FormControl sx={{gridColumn:"span 2","& .MuiFormLabel-root":{color:'#9b9b9b'},"& .MuiFormControlLabel-root":{color:'white'},"& .css-hyxlzm":{color:'#9b9b9b'}}}>
                        <FormLabel id="demo-radio-buttons-group-label">Cancellable</FormLabel>
                        <RadioGroup
                        onChange={handleChange}
                        value={values.cancellable}
                          aria-labelledby="demo-radio-buttons-group-label"
                          // defaultValue="female"
                          name="radio-buttons-group"
                        >
                          <FormControlLabel name='cancellable' value={true} control={<Radio />} label="Yes" />
                          <FormControlLabel name='cancellable' value={false} control={<Radio />} label="No" />
                        </RadioGroup>
                      </FormControl>
                     <FormControl sx={{gridColumn:"span 2","& .MuiFormLabel-root":{color:'#9b9b9b'},"& .MuiFormControlLabel-root":{color:'white'},"& .css-hyxlzm":{color:'#9b9b9b'}}}>
                        <FormLabel id="demo-radio-buttons-group-label">Returnable</FormLabel>
                        <RadioGroup
                        onChange={handleChange}
                        value={values.returnable}
                          aria-labelledby="demo-radio-buttons-group-label"
                          // defaultValue="female"
                          name="radio-buttons-group"
                        >
                          <FormControlLabel name='returnable' value={true} control={<Radio />} label="Yes" />
                          <FormControlLabel name='returnable' value={false} control={<Radio />} label="No" />
                        </RadioGroup>
                      </FormControl>
                    
                </Box>
                <Box display='flex' justifyContent='end' mt='20px'>
                    <Button type='submit' color='primary' variant='contained'>Add Product</Button>
                </Box>
            </form>
        )}
        </Formik>
    </Box>
    </>
  )
}

export default AddProducts