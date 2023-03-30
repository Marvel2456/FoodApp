import React from 'react'
import Food from '../assets/food.jpg'

const FoodList = (props) => {
  return (
    <div className='container bg-gray-200 pt-5 px-4'>
      <div className='bg-white grid grid-cols-3 rounded-lg gap-2'>
        <div className='p-3 items-center justify-center'>
          <img src={Food} alt='/' />
        </div>
        <div className='pt-2'>
          <h3 className='font-bold text-2xl'>{props.name}</h3>
          <p className='text-gray-500 font-semibold'>Green Leaf Eatry</p>
          <p className='text-orange-400 font-semibold'>Closed.</p>
          <p className='text-gray-500 font-semibold'>Opens @ 11:00 AM</p>
        </div>
        <div className='pt-16'>
          <h3 className='font-semibold text-gray-500'>GHC <span className='text-orange-400'>{props.price}</span></h3>
        </div>

      </div>
    </div>
  )
}

export default FoodList
