import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { NavLink, useNavigate, useParams } from 'react-router-dom'

function Delete() {
    const {userId} =useParams()
    
    const[user,setuser] = useState({})

    const navigate =useNavigate()

    async function fetchAllData(){
        const result = await axios.get(`http://127.0.0.1:8000/proj/student/${userId}/`)
        setuser(result.data)
    }
    function deleteData(){
        axios.delete(`http://127.0.0.1:8000/proj/student/${userId}/`);
        navigate('/show')
      }
    
    useEffect( ()=>{
        fetchAllData();
    },[])
  return (
    <div>
        <center>
            <h2> Do you really want to delete this <span style={{color:"red"}}>{user.roll} {user.name}</span>record ??</h2>

            <button onClick={deleteData} className='btn btn-success col-2 m-3'>YES</button>
            <NavLink to='/show' className='btn btn-warning col-2 '> NO</NavLink>
        </center>
    </div>
  )
}

export default Delete