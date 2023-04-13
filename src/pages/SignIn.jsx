import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { userAuth } from '../context/AuthContext'


export default function SignIn() {

    const [credentials, setCredentials] = React.useState({
        email: '', password: ''
    })
    const {user, signIn, error} = userAuth()
    const navigate = useNavigate()

    const handleSubmit = (event) =>{
        event.preventDefault()
        signIn(credentials.email, credentials.password)
    }

    function handleChange(event){
        setCredentials(prevCred =>{
            return{...prevCred,
                [event.target.name]: event.target.value
            }

        })
    }

  return (
    <div className='text-white h-screen'>
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/f1c3c4eb-2fea-42c7-9ebd-1c093bd8a69d/9c9af369-7a8c-4c8f-8e4a-d6c9d655f713/IN-en-20230403-popsignuptwoweeks-perspective_alpha_website_medium.jpg" alt="Background Image" 
        className='h-full w-full'
        />
        <div className='w-full h-screen bg-black/60 absolute top-0 left-0'></div>
        <div className='absolute top-0 left-0 w-full h-screen flex justify-center items-center'>
            <div className='w-[350px] h-[450px] md:w-[400px] md:h-[525px] bg-black/75 z-10 rounded p-10'>
                <h2 className='font-semibold text-2xl md:text-4xl mb-6'>Sign In</h2>
                {error?<p className='text-red-600 p-1' >{error}</p>: null} {/*Conditionally rendered error message*/}
                <form onSubmit={handleSubmit}>
                    <input type="email" placeholder='Email' required
                     name='email'
                     onChange={handleChange}
                     value={credentials.email}
                    className='bg-gray-700 pl-2 w-full h-[45px] rounded mb-6'
                    />
                    <input type="password" placeholder='Password' required
                     name='password'
                     onChange={handleChange}
                     value={credentials.password}
                    className='bg-gray-600 pl-2 w-full h-[45px] rounded mb-14'
                    />
                    <button className='w-full h-[45px] bg-[#e50914] rounded mb-4'>Sign In</button>
                    <div className='flex justify-between items-center text-gray-500 text-sm mb-8'>
                    <label>
                        <input type="checkbox" name="" id="checkbox"
                        className='w-4 h-4 mr-1'/>
                        Remember Me
                    </label> 
                        <p className='cursor-pointer'>Need help?</p>
                    </div>
                    <p className='text-gray-500'>New to Netflix?
                        <Link to='/signup'>
                        <span className='text-white'> Sign Up</span>
                        </Link>
                    </p>
                </form>

            </div>
        </div>
        
    </div>
  )
}
