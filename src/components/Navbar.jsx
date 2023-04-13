import React from 'react'
import logo from '../assets/Netflix_Logo.png'
import { Link, useNavigate } from 'react-router-dom'
import { userAuth } from '../context/AuthContext'

export default function Navbar() {

  const {user, logOut} = userAuth()
  const navigate = useNavigate()

  const handleLogout = async () =>{
    try{
      await logOut()
      location.reload()
      navigate('/')
    }
    catch(error){
      alert(error)
    }
  }

  return (
    <div className='flex justify-between absolute w-full z-50'>
        <Link to='/'>
          <img src={logo} alt="Netflix Logo" className='h-20 w-36 cursor-pointer'/>
        </Link>

        {user?
          <div className='pt-6 pr-4'>
            <Link to='/account'>
              <button className='text-[#e50914]  h-8 w-24 bg-white rounded mr-6 hover:bg-gray-200'>My Account</button>
            </Link>
              <button onClick={handleLogout} className='bg-[#e50914] text-white h-8 w-20 rounded hover:bg-red-800'>Log out</button>
          </div>
          :
          <div className='pt-6 pr-4'>
            <Link to='/signup'>
              <button className='text-[#e50914]  h-8 w-20 bg-white rounded mr-6 hover:bg-gray-200'>Sign Up</button>
            </Link>
            <Link to='/signin'>
              <button className='bg-[#e50914] text-white h-8 w-20 rounded hover:bg-red-800'>Sign In</button>
            </Link>
          </div>
        }
      </div>
  )
}
