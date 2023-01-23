import React, { useEffect, useState } from "react";
import "./singlePage.css";
import { BsFillBagPlusFill } from "react-icons/bs";
import { CiTwitter } from "react-icons/ci";
import { BsWhatsapp } from "react-icons/bs";
import { AiOutlineFacebook } from "react-icons/ai";
import { Link, Navigate, useLocation } from "react-router-dom";
import axios from "axios";
import { Box, Heading, Text, useToast } from "@chakra-ui/react";
import { useSelector } from "react-redux";

const postToCart = () => {
  // return axios.post("", payload);
};


const SinglePage = ({ id }) => {
  const [desc, setDescription] = useState(false);
  const Productdata = useSelector((items) => items.ProductReducer);
  const toast = useToast();
  const location = useLocation()
  const {name,image,returnable,price,cancellable,description,return_window,category,discount,popular } = location.state
  const [data, setData] = useState({
    images:image,
    title: name,
    price: price,
    description:description,
    category: category,
    returnable,cancellable,return_window,discount,popular
  });
  const PostTocart=() => {
   
    return axios 
.post(`https://finalcart.onrender.com/cart`,{...products,"qty":1}).then((r)=>{
  // alert("Product added to cart")
  toast({
    title: "Product added to cart successfully",
    status: "success",
    isClosable: true,
    duration: 5000,
  });
}).then((e)=>{
    console.log(e)
})

  }
  const handlePost = () => {
    postToCart(data).then((res) => {
      toast({
        title: "Product added to cart successfully",
        status: "success",
        isClosable: true,
        duration: 5000,
      });
    });
  };

  // setData(
  //   Productdata.filter((el, i) => {
  //     return id === el._id;
  //   })
  // );

  console.log(desc);
  return (
    <div className="indivisualPage">
      <div className="topSection">
        <div className="left-img">
          <div className="left-carousel">
            <img
              style={{ width: "90%" }}
              src={data.images}
              // src="https://www.jiomart.com/images/product/600x600/rvjf0pciix/finish-dishwasher-all-in-1-max-powerball-lemon-60-tablets-world-s-no-1-dishwashing-brand-product-images-orvjf0pciix-p591300720-0-202205140128.jpg"
              alt="demo1"
            />
            <img
              style={{ width: "90%" }}
              src={data.images}
              // src="https://www.jiomart.com/images/product/600x600/rvjf0pciix/finish-dishwasher-all-in-1-max-powerball-lemon-60-tablets-world-s-no-1-dishwashing-brand-product-images-orvjf0pciix-p591300720-0-202205140128.jpg"
              alt="demo1"
            />
            <img
              style={{ width: "90%" }}
              src={data.images}
              // src="https://www.jiomart.com/images/product/600x600/rvjf0pciix/finish-dishwasher-all-in-1-max-powerball-lemon-60-tablets-world-s-no-1-dishwashing-brand-product-images-orvjf0pciix-p591300720-0-202205140128.jpg"
              alt="demo1"
            />
            <img
              style={{ width: "90%" }}
              src={data.images}
              // src="https://www.jiomart.com/images/product/600x600/rvjf0pciix/finish-dishwasher-all-in-1-max-powerball-lemon-60-tablets-world-s-no-1-dishwashing-brand-product-images-orvjf0pciix-p591300720-0-202205140128.jpg"
              alt="demo1"
            />
            <img style={{ width: "90%" }} src={data.images} alt="demo1" />
          </div>
          <div className="right-main">
            <img style={{ width: "90%" }} src={data.images} alt={data.title} />
          </div>
        </div>
        <div className="right-data">
          <h3 className="product__name space_top_bottom">
            <b>{data.title}</b>
          </h3>
          <h4 className="product__name-light space_top_bottom">
            {data.category}
          </h4>

          <p className="space_top_bottom">
            <b className="space_Between">₹ {data.price} </b> M.R.P:
            <span className="crossedLine">₹ {data.price + 299}</span>
          </p>
          <p className="space_top_bottom">
            <span>
              You Save: ₹ <b className="green__text space_Between">233.00</b>
            </span>
            <span>Inclusive of all taxes</span>
          </p>
          <p className="space_top_bottom">
            <b>Sold by</b>{" "}
            <b className="blue_text">O-KARMICA WELLNESS PRIVATE LIMITED</b>
          </p>
          <p className="space_top_bottom">
            Inaugural Offer <b>Free Shipping</b>
          </p>
          <button
            onClick={PostTocart}
            className="space_top_bottom btn cart-btn"
          >
            <span>Add to Cart</span>
            <BsFillBagPlusFill style={{ width: "35px" }} />
          </button>
          <div className="social__links space_top_bottom">
            <a href="https://twitter.com/i/flow/login" target="_blank">
              <CiTwitter style={{ width: "40px" }} />
            </a>
            <a href="https://www.whatsapp.com/" target="_blank">
              <BsWhatsapp style={{ width: "40px" }} />
            </a>
            <a href="https://www.facebook.com/" target="_blank">
              <AiOutlineFacebook style={{ width: "40px" }} />
            </a>
          </div>
        </div>
      </div>
      <div className="mid__section space_top_bottom space_Between">
        <h3 className="space_top_bottom">
          <b>Description</b>{" "}
          {/* <a
            className="btn"
            onClick={() => setDescription(!desc)}
            style={{ marginRight: "1re3" }}
          >
            {desc ? "Show Less" : "Show More"}
          </a> */}
        </h3>
        <div className="visible">
          <Heading as='h3' size='md' mb={2}>{data.title}</Heading>
          <p>{data.description}</p>
        </div>
        {/* {desc && (
          <Box className="invisible">
            <Text className="smallSpace">
              It has added fabrics conditioners that soften the fabric and leave
              your clothes with a light fragrance. Its advanced nanotechnology
              helps faster stain removal in machines, and it penetrates clothes
              fibres much faster and removes tough stains in the washing machine
              itself. Removes tough soiling and accumulated yellowish layer on
              the clothes to prevent fast ageing.
            </Text>
            <Text className="smallSpace">
              <strong>Stain Removal: </strong>Zimmer Aufraumen power Laundry
              Liquid Detergent’s advanced nanotechnology helps faster stain
              removal in machines; it penetrates clothes fibres much faster and
              removes tough stains in the machine itself.
            </Text>
            <Text className="smallSpace">
              <strong>Colour Care: </strong> Although its fast action removes
              tough stains in machines but retains the original colour of the
              fabric.
            </Text>
            <Text className="smallSpace">
              <strong>Fresh Fragrance: </strong>the mild natural fragrance
              boosters ensures that your clothes look not only fresh but also
              smell fresh rather smell of chemical.
            </Text>
            <Text className="smallSpace">
              <strong>The softness of Clothes: </strong>added fabric conditioner
              protects the fibre of clothes and ensures softness of the clothes
              is maintained along with cleaning
            </Text>
            <Text className="smallSpace">
              <strong>Saves Water: </strong>Our High performing, the low foaming
              formula helps use lesser water per a load of laundry, thereby
              saving at least 50*365 = 18250 litres of water per year.
            </Text>
          </Box>
        )} */}
      </div>
    </div>
  );
};

export default SinglePage;
