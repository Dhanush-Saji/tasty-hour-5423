import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./../Pages/HomePage/HomePage";
// import ProductPage from "./../Pages/ProductPage/ProductPage";
import CartPage from "./../Pages/CartPage/CartPage";
// import Signup from "../Components/Signup/Signup";
// import Login from "../Components/Login/Login";
import PhoneSignUp from "../Components/Signup/PhoneSignUp";
import ProductPage from './../Pages/NewProductPage/ProductPage';
import Address from './../Pages/AddressPage/Address';
import CheckoutPage from "../Pages/CheckoutPage/CheckoutPage";
const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path='/address' element={<Address />} />
        <Route path="/phonesignup" element={<PhoneSignUp />} />
        {/* <Route path="/login" element={<Login />} /> */}
      </Routes>
    </>
  );
};

export default AllRoutes;
