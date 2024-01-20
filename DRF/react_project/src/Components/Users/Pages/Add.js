import React, { useEffect, useState } from 'react'
import {useForm} from 'react-hook-form'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import {ErrorMessage} from '@hookform/error-message';
import Navbar from '../../Layout/Navbar';
import { createPostAPI } from  "../../../MyApiServices/myapiServies"

function Add() {
    const{register,handleSubmit,reset}=useForm();
    const navigate =useNavigate();

    // function saveData(data){
    //   axios.post('http://127.0.0.1:8000/proj/student/',data);
    //   console.log(data)
    //   navigate('/show')
    // }

    const [errMsg,setErrorMsg] = useState('')

    useEffect(()=>{
      const user = sessionStorage.getItem('token')
      console.log("token---->", user)
      if(!user){
          navigate('/login');
      }
    },[])

    const saveData = async (postData) =>{
      try{
            await createPostAPI(postData);
            console.log('added data--->>>', postData)
            navigate('/show');
      }
      catch(error){
        if(error.response.status === 401){
          setErrorMsg('Please Login With Valid Credentials')
        }
      }
    }
  return (
    <div className='container'>
      <Navbar/>
    <form onSubmit={handleSubmit(saveData)}>
        <label>Enter Roll</label>
        <input type="number" className="form-control" {...register('roll')}/><br/>

        <label>Enter Name</label>
        <input type="text" className="form-control" {...register('name')}/><br/>
        <label>Enter Marks</label>
        <input type="number" className="form-control" {...register('marks')}/><br/>

        <input type="submit" value='ADD STUDENT' className="btn btn-success col-4 "/>
        <input type="reset" value='RESET' className="btn btn-warning col-4 float-end"/>
      </form>
    </div>
  )
}

export default Add