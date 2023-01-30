import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./../Pages/HomePage/HomePage";
// import ProductPage from "./../Pages/ProductPage/ProductPage";
import CartPage from "./../Pages/CartPage/CartPage";
import CheckoutPage from "./../Pages/CheckoutPage/CheckoutPage";
import Wishlist from "./../Pages/Wishlist/Wishlist";
import SinglePage from "./../Pages/SinglePage/SinglePage";
// import Signup from "../Components/Signup/Signup";
// import Login from "../Components/Login/Login";
import PhoneSignUp from "../Components/Signup/PhoneSignUp";
import NewProductPage from "../Pages/ProductPage/NewProductPage";
import ProductPage from './../Pages/NewProductPage/ProductPage';
const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductPage />} />
        {/* <Route path="/product2" element={<NewProductPage />} /> */}
        {/* <Route path="/singlepage" element={<SinglePage />} /> */}
        <Route path="/cart" element={<CartPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        {/* <Route path="/wishlist" element={<Wishlist />} /> */}
        {/* <Route path='/register' element={<Signup />} /> */}
        <Route path="/phonesignup" element={<PhoneSignUp />} />
        {/* <Route path="/login" element={<Login />} /> */}
      </Routes>
    </>
  );
};

export default AllRoutes;
