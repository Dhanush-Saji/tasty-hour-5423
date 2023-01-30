import React from 'react'
import Lottie from 'lottie-react';
import './NoData.css'
import noData from '../../assets/noData.json'

const NoData = () => {
  return (
    <div className='noDataClassParent'>
        <div className='noDataClass'>
        <Lottie animationData={noData} loop={true} height={40} width={40} />
        </div>
    </div>
  )
}

export default NoData
