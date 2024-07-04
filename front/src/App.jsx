import React from 'react'
import {BrowserRouter,Routes,Route, Navigate} from "react-router-dom"
import Home from './home/Home'
import Contacts from './Contacts/Contacts'
import Signup from './component/Signup'
import {Toaster} from 'react-hot-toast'
import { useAuth } from './context/Auth'
function App() {
  const [authUser,setauthUSer]=useAuth();
  console.log(authUser);
  return (
    <>
    <div  className='dark:bg-slate-900 dark:text-white'>

     <BrowserRouter>
     <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/contact' element={authUser?<Contacts/>:<Navigate to="/signup"/>}></Route>
      <Route path='/signup' element={<Signup/>}></Route>
     </Routes>
     </BrowserRouter>
     <Toaster/>
    </div>
    </>
  )
}

export default App
