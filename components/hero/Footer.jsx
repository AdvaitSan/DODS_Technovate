import React from 'react'
import icons from './icons.png'
const Footer = () => {
  return (
    <div className=' gradient_color border-t-2  '>
        <ul className=' flex text-white gap-x-32 ml-11 pt-10 pb-6'>
            <li className=' uppercase font-bold text-3xl'>Solana Crowdfunding</li>
            <li>Copyright © 2021 - 2023 Solana Crowdfunding. All rights reserved.</li>
            <li><img src="./icons.png" alt="" /></li>
        </ul>
      
    </div>
  )
}

export default Footer
