import React from 'react'
import Movies from './Movies'
import {MdChevronLeft, MdChevronRight} from 'react-icons/md'
import movieTrailer from 'movie-trailer'
import YouTube from 'react-youtube'

export default function Row(props) {

    const [movies, setMovies] = React.useState([])
    const [like, setLike] = React.useState(false)
    const [trailerUrl, setTrailerUrl] = React.useState("")

    React.useEffect(() =>{
        fetch(props.url)
        .then(response => response.json())
        .then(data => setMovies(data.results))
        
    },[props.url])

    function handleClick(movie){
        if(trailerUrl){
            setTrailerUrl("")
        }else{
            //grabs youtube trailer url that matches the movie/show name
            movieTrailer(movie.name || movie.title || "")
            .then(url => {
                const urlParams = new URLSearchParams(new URL(url).search)
                setTrailerUrl(urlParams.get('v'))
            })
            .catch(err => alert(err))
        }
    }

    //Closing trailer by setting url to empty string
    function closeTrailer(){
        if(trailerUrl){
            setTrailerUrl("")
        }
    }

    //Conditional rendering of <Movie/> only if backdrop path is present
    const rowItem = movies.map((movie, id) =>{
        return(movie.backdrop_path?
            <Movies
                id={movie.id}
                url={movie.backdrop_path}
                title={movie.title || movie.name}
                like={like}
                handleClick={() =>handleClick(movie)}
                key={id}
            />  
            : ""    
        ) 
    })
    
    const opts = {
        height: '400',
        width: '100%',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },
      }

    //Targets the slider div
    let slider = document.getElementById('slider' + props.id)

    function slideLeft(){ 
        slider.scrollLeft = slider.scrollLeft - 500
    }
    function slideRight(){
        slider.scrollLeft = slider.scrollLeft + 500
    }
 
  return (
    <div className='text-white md:ml-10'>
        <h2 className='md:text-xl font-bold pt-4 px-4'>{props.title}</h2>
        <div className='relative group'>
            <MdChevronLeft className='absolute top-1/2 rounded-full text-4xl md:text-6xl lg:text-7xl cursor-pointer z-10 translate-y-[-50%] hidden group-hover:block'
            onClick={slideLeft}
            />
            {/*id to target the specific row. Gave unique id at Home */ }
            <div id={'slider' + props.id} className='overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide px-3'>
            {rowItem}
            </div>
            <MdChevronRight className='absolute top-1/2 right-0 rounded-full text-4xl md:text-6xl lg:text-7xl cursor-pointer z-10 translate-y-[-50%] hidden group-hover:block'
            onClick={slideRight}
            />
        </div>
        {/*Shows youtube trailer, closes youtube window when unhovered*/}
        {trailerUrl &&<div className='w-full h-[440px] py-5'
        onMouseLeave={closeTrailer}>
         <YouTube videoId={trailerUrl} opts={opts}
        ></YouTube>
        </div>}
    </div>
  )
}
