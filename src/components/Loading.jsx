import React from 'react'
import Lodear from '../asset/Loder.gif'

const Loading = () => {
  return (
    <div className='w-full h-screen flex justify-center items-center bg-black'>
      <img src={Lodear} alt="" className='h-[50%]' />
    </div>
  )
}

export default Loading
