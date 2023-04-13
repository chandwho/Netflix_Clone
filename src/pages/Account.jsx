import React from 'react'
import SavedMovies from '../components/SavedMovies'

export default function Account(props) {
  return (
    <div className='h-screen'>
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/f1c3c4eb-2fea-42c7-9ebd-1c093bd8a69d/9c9af369-7a8c-4c8f-8e4a-d6c9d655f713/IN-en-20230403-popsignuptwoweeks-perspective_alpha_website_medium.jpg" alt="Background Image" 
        className='h-[60%] w-full object-cover'
        />
        <div className='w-full h-[60%] bg-black/60 absolute top-0 left-0'></div>
        <div className='absolute top-[45%] p-4 md:p-8 text-2xl md:text-4xl text-white font-bold'>
            <h2>Favourite Movies</h2>
        </div>
        <SavedMovies/>
    </div>
  )
}


{/* <div className='w-[200px] md:w-[250px] lg:w-[280px] cursor-pointer relative inline-block m-2 rounded-md hover:scale-1.1'>
<img src={`https://image.tmdb.org/t/p/w500${props.url}`} alt={props.title} className='rounded-md'/>
<div className='absolute top-0 left-0 w-full h-full opacity-0 hover:bg-black/60 hover:opacity-100 flex justify-center items-end rounded-md'>
    <p className='font-semibold md:text-lg'>{props.title}</p>
    <p className='absolute top-3 left-4 text-xl md:text-2xl'
    >{props.like?<FaHeart/>:<FaRegHeart/>}</p>
</div>
</div> */}