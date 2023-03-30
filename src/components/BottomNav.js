import React from 'react'
import {CiForkAndKnife} from 'react-icons/ci'
import {FaStoreAlt} from 'react-icons/fa'
import {RiListOrdered} from 'react-icons/ri'

const BottomNav = () => {
  return (
    <div className='pt-5 bg-gray-100 pb-5'>
        <div className='grid grid-cols-3 gap-20 px-16'>
            <div className=' items-center text-orange-400'>
                <div><CiForkAndKnife size={40} /></div>
                <p>Dishes</p>
            </div>
            <div className=' items-center text-gray-500'>
                <div className='pl-4'><FaStoreAlt size={40} /></div>
                <p>Foodjoints</p>
            </div>
            <div className=' items-center text-gray-500'>
                <div className='pl-4'><RiListOrdered size={40} /></div>
                <p>My Orders</p>
            </div>
        </div>
        
      
    </div>
  )
}

export default BottomNav
