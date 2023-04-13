import React from 'react'
import { MdChevronLeft, MdChevronRight} from 'react-icons/md'
import { userAuth } from '../context/AuthContext'
import { db } from '../firebase'
import { updateDoc, doc, onSnapshot } from 'firebase/firestore'
import { AiOutlineClose } from 'react-icons/ai'

/* onSnapshot:  listen to a document with the onSnapshot() method. 
An initial call using the callback you provide creates a document snapshot immediately with the current contents of the single document. 
Then, each time the contents change, another call updates the document snapshot.*/
export default function SavedMovies() {

    const {user} = userAuth()
    const [movies, setMovies] = React.useState([])

    const movieRef = doc(db, 'users', `${user.email}`)

    React.useEffect( () =>{
        onSnapshot(doc(db, 'users', `${user.email}`), (doc) =>{
            console.log(doc)
            setMovies(doc.data().savedMovies) /*Receiving data from firebase and setting state*/ 
        })
    },[user.email])

    const removeMovie = async(movieId) =>{
        try{
            const updatedArray = movies.filter(movie =>(movie.id !== movieId))
            await updateDoc(movieRef, {
                savedMovies: updatedArray
            })
        }catch(error){
            alert(error.message)
        }
    }

    const rowItem = movies.map((movie, id) =>{
        return(
            <div className='w-[200px] md:w-[250px] lg:w-[280px] cursor-pointer relative inline-block m-2 rounded-md hover:scale-1.1'>
                <img src={`https://image.tmdb.org/t/p/w500${movie.url}`} alt={movie.title} className='rounded-md'/>
                <div className='absolute top-0 left-0 w-full h-full opacity-0 hover:bg-black/60 hover:opacity-100 flex justify-center items-end rounded-md'>
                    <p className='font-semibold md:text-lg'>{movie.title}</p>
                    <p 
                    onClick={() =>removeMovie(movie.id)}
                    className='absolute top-2 right-3 text-xl text-gray-300'>
                        <AiOutlineClose/></p>
                </div>
            </div>    
        ) 
    })
    

    let slider = document.getElementById('slider')

    function slideLeft(){ 
        slider.scrollLeft = slider.scrollLeft - 500
    }
    function slideRight(){
        slider.scrollLeft = slider.scrollLeft + 500
    }

  return (
        <div className='text-white mt-6'>
            {/* <h2 className='md:text-xl font-bold p-4'>{props.title}</h2> */}
            <div className='relative group'>
                <MdChevronLeft className='absolute top-1/2 rounded-full text-4xl md:text-6xl lg:text-7xl cursor-pointer z-10 translate-y-[-50%] hidden group-hover:block'
                onClick={slideLeft}
                />
                {/*id to target the specific row. Gave unique id at Home */ }
                <div id={'slider'} className='overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide'>
                {rowItem}
                </div>
                <MdChevronRight className='absolute top-1/2 right-0 rounded-full text-4xl md:text-6xl lg:text-7xl cursor-pointer z-10 translate-y-[-50%] hidden group-hover:block'
                onClick={slideRight}
                />
            </div>
        </div>
  )
}
