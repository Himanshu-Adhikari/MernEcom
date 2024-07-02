import React from 'react'
import Navbar from '../component/Navbar'
import Foot from '../component/Foot'
import Contact from '../component/Contact';
function Contacts() {
  return (
    <>
    <Navbar/>
    <div className='min-h-screen'>
    <Contact/>
    </div>
    <Foot/>
    </>
  )
}

export default Contacts;
