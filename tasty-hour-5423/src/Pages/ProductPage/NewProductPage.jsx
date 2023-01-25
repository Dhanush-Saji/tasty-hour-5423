import React, { useState } from "react";
import { Box, SimpleGrid, Show, Hide } from "@chakra-ui/react";
import Styles from "../../ProductPageCss/Product.module.css";
import "./newstyles.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  getdata,
  searchdata,
  sortdata,
} from "../../Redux/Product_redux/action";
import Filtering from "../../Components/Filtering";
import ProductItems from "./ProductItems";
import Pagination from "../../hooks/Pagination";
import LargePage from "./LargePage";
import SmallPage from "./SmallPage";
import SmallProductDrawer from "./SmallProductDrawer";

const NewProductPage = () => {
  const dispatch = useDispatch();
  const Productdata = useSelector((items) => items.ProductReducer);
  console.log(Productdata);
  const [search, setSeacrh] = useState("");
  useEffect(() => {
    dispatch(getdata);
  }, []);
  function Searchdata(e) {
    const { value } = e.target;
    setSeacrh({ ...search, name: value });
    dispatch(searchdata(search));
  }

  return (
    <Box>
      <Show above="lg">
        <LargePage />
      </Show>
      <Show below="md">
        <SmallProductDrawer />
        <SmallPage />
        <Pagination />
      </Show>
    </Box>
  );
};

export default NewProductPage;
