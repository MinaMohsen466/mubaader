import React from 'react'
import './Banner.css'
import banner from '../../../images/mubaader-tree.jpg'

const Banner = () => {
  return (
    <div className='banner'>
      <img src={banner} alt="banner" />
    </div>
  )
}

export default Banner
