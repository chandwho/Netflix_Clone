import React from 'react'
import Navbar from './components/Navbar'
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import { AuthContextProvider } from './context/AuthContext'
import Account from './pages/Account'
import ProtectedRoute from './components/ProtectedRoute' 

export default function App() {
  return (
    <div>
      <AuthContextProvider>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/signin' element={<SignIn/>}/>
          <Route path='/signup' element={<SignUp/>}/>
          <Route path='/account' element={<ProtectedRoute><Account/></ProtectedRoute>}/> {/*Protected route navigates to account page only if user is logged in(Check ProtectedRoute component)*/}
        </Routes>
      </AuthContextProvider>
    </div>
  )
}
