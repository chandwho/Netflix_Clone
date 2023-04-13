import React from 'react'
import { FaHeart, FaRegHeart } from 'react-icons/fa'
import { userAuth } from '../context/AuthContext'
import { arrayUnion, doc, updateDoc } from 'firebase/firestore'
import { db } from '../firebase'

export default function Movies(props) {

    const {user} = userAuth()
    const [like, setLike] = React.useState(false)
    const [saved, setSaved] = React.useState(false)

    const setMovie = async () =>{
        if(user){
            const movieRef = doc(db, 'users',`${user.email}` )
            setLike(!like)
            setSaved(true)
            await updateDoc(movieRef, 
                {savedMovies: arrayUnion({
                   id:props.id,
                   url:props.url,
                   title:props.title
                    })
                }
            )
        }
        else
        alert('Login to save movie')
    }

    function handleClick(){

    }


  return (
        <div className='w-[200px] md:w-[250px] lg:w-[280px] cursor-pointer relative inline-block m-[6px] rounded transition-transform duration-450 hover:scale-[1.05] whitespace-pre-wrap text-center'
        onClick={props.handleClick}>
            <img src={`https://image.tmdb.org/t/p/w500${props.url}`} 
            alt={props.title} 
            className='rounded'/>
            <div className='absolute top-0 left-0 w-full h-full opacity-0 hover:bg-black/60 hover:opacity-100 flex flex-wrap justify-center items-end rounded'>
                <p className='font-semibold md:text-lg'>{props.title}</p>
                <p className='absolute top-3 left-4 text-xl md:text-2xl'
                onClick={setMovie}
                >{like?<FaHeart className='text-[#e50914]'/>:<FaRegHeart/>}</p>
            </div>
        </div>
  )
}
