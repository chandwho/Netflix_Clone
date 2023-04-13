import React from 'react'
import { createContext } from "react"
import {auth, db} from '../firebase'
import { useNavigate } from 'react-router-dom'
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
} from 'firebase/auth'
import {setDoc, doc} from 'firebase/firestore'


const AuthContext = createContext()

    export function AuthContextProvider({children}){
        const [user, setUser] = React.useState({})
        const [error, setError] = React.useState()
        const navigate = useNavigate()

        async function signUp(email, password){
            try{
                await createUserWithEmailAndPassword(auth, email, password)
                await setDoc(doc(db,'users',email), 
                {savedMovies: []})
                navigate('/')
            }catch(error) {setError(error.message)}
            
        }
        async function signIn(email, password){
            try{
                await signInWithEmailAndPassword(auth, email, password)
                navigate('/')
            }catch(error) {setError(error.message)}
        }   
        function logOut(){
            return signOut(auth)
        }
         
        React.useEffect(() =>{
            const subscribed = onAuthStateChanged(auth, (currentUser) =>{
                setUser(currentUser)
            })
            return () =>{
                subscribed()
            }
        })
    return( 
        <AuthContext.Provider value={{signUp, signIn, logOut, user, error}}>
            {children}
        </AuthContext.Provider>
    )
}

{/*Custom hook to export context */}
export function userAuth(){
    return React.useContext(AuthContext) 
}