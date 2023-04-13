import React from 'react'
import axios from 'axios'
import requests from '../components/Requests'

export default function Main() {
    const [movies, setMovies] = React.useState([])

    const movie = movies[Math.floor(Math.random() * movies.length)]

    React.useEffect(()=>{
        axios.get(requests.popular).then(response => 
          setMovies(response.data.results))
    },[])

    const image = movie? movie.backdrop_path:""
    const date = movie? movie.release_date:""
    const title = movie? movie.title:""
    const overview = movie? movie.overview:""

    function truncateString(str, num){
      return(str.length>num?str.slice(0,num) + '...':str)

    }
            

  return (
    <div className='w-full h-[550px] relative'>
      <div className='absolute w-full h-[550px] bg-gradient-to-tr from-black'></div>
        <img src={`https://image.tmdb.org/t/p/original${image}`} alt='' className='w-full h-full object-cover' />
      <div className='text-white flex flex-col absolute top-[20%] gap-3 p-4 md:p-8'>
        <h1 className='text-3xl md:text-5xl font-semibold'>{title}</h1>
      <div className='gap-8'>
        <button className='h-10 min-w-20 bg-white text-black border px-5 py-1 mr-4 rounded hover:bg-gray-200'>Play</button>
        <button className='h-10 min-w-20 border-white border-2 px-5 py-1 rounded hover:bg-[rgb(255,255,255,0.4)]'>Watch Later</button>
      </div>
        <p className='text-gray-400'>Released on: {date}</p>
        <p className='w-full md:w-[60%] lg:w-[40%]'>{truncateString(overview, 200)}</p>
      </div>
      <div className='h-24 absolute top-[83%]  w-full bg-gradient-to-t from-[#141414] to-transparent '> </div>
    </div>
  )
}

