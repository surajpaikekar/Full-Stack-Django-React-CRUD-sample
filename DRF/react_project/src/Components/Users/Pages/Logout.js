import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import Navbar from '../../Layout/Navbar';
function Logout() {
  const nav = useNavigate();
  useEffect(()=>{
    sessionStorage.clear();
    nav('/login');

  });
  return (
    <>
      <Navbar/>
      <div className='container'>Logout</div>
    </>
  )
}

export default Logout;