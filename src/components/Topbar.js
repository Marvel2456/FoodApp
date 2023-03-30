import React from 'react'
import {GiNetworkBars} from 'react-icons/gi'
import {MdNetworkWifi} from 'react-icons/md'
import {BsBatteryHalf} from 'react-icons/bs'
import {BsBellFill} from 'react-icons/bs'
import {IoMdCart} from 'react-icons/io'
import {FaUser} from 'react-icons/fa'

const Topbar = () => {
  return (
    <div className='container bg-gray-300'>
        <div className='flex pt-3 px-8 items-center justify-between'>
            <p className='font-semibold'>8:04</p>
            <div className='flex items-center gap-2'>
              <GiNetworkBars />
              <MdNetworkWifi />
              <BsBatteryHalf />
            </div>
        </div>
        <div className='flex pt-8 pb-3 px-3 space-x-2 justify-between'>
            <h3 className='text-3xl font-bold'>Foodjoint</h3>
            <div className='flex items-center gap-2'>
              <BsBellFill size={27} style={{color:'grey'}} />
              <IoMdCart size={27} style={{color:'orange'}} />
              <FaUser size={27} style={{color:'grey'}} />
            </div>
        </div> 
        <div className='border-2 border-grey-800 border-x-grey-800 drop-shadow-md'></div>
    </div>
  )
}

export default Topbar
