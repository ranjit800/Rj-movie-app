import React from 'react'
import notfound from '../asset/404.gif'
// import { Link, useNavigate } from 'react-router-dom'

const NotFound = () => {
  // const navigate = useNavigate
  return (
    <div className=' w-full h-screen flex justify-center items-center bg-black'>
       
      <img src={notfound} alt="" className='h-[50%]' />
    </div>
  )
}

export default NotFound
