import React from 'react'
import Lottie from 'lottie-react';
import './NoData.css'
import noData from '../../assets/noData.json'

const NoData = () => {
    // const defaultOptions = {
    //     loop: true,
    //     autoplay: true,
    //     animationData: loader,
    //     rendererSettings: {
    //       preserveAspectRatio: "xMidYMid slice"
    //     }
    //   };
  return (
    <div className='noDataClassParent'>
        <div className='noDataClass'>
        <Lottie animationData={noData} loop={true} height={20} width={20} />
        </div>
    </div>
  )
}

export default NoData
