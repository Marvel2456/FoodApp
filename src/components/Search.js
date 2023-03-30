import React from 'react'
import {AiOutlineSearch} from 'react-icons/ai'


const Search = () => {
  return (
    <div>
        <div className='container bg-gray-200 pt-8 px-5'>
          <div className='px-5 flex bg-white rounded-lg justify-between items-center'>
            <input size={30} placeholder='Search' className='px-2 py-5 text-2xl' />
            <AiOutlineSearch size={30} style={{color:'black'}} />
          </div>
        </div>
    </div>
  )
}

export default Search
