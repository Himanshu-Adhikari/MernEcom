import React from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from './home/Home'
import Contacts from './Contacts/Contacts'
import Signup from './component/Signup'
function App() {
  return (
    <>
    <div  className='dark:bg-slate-900 dark:text-white'>

     <BrowserRouter>
     <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/contact' element={<Contacts/>}></Route>
      <Route path='/signup' element={<Signup/>}></Route>
     </Routes>
     </BrowserRouter>
    </div>
    </>
  )
}

export default App
