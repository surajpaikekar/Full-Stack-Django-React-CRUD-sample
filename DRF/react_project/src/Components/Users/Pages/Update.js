// import React, { useEffect } from 'react'
// import {useForm} from 'react-hook-form'
// import axios from 'axios'
// import { useNavigate, useParams } from 'react-router-dom'



// function Update() {
//     const{userId} =useParams()

//     const{register,handleSubmit,setValue} = useForm()
//     const navigate =useNavigate()

//     async function fetchuser(){
//         const result = await axios.get(`http://127.0.0.1:8000/proj/student/${userId}/`)
//         setValue('roll',result.data.roll)
//         setValue('name',result.data.name)
//         setValue('marks',result.data.marks)
        
//     }
    
//     useEffect( ()=>{
//         fetchuser();
//     },[])

//     function saveData(data){
//       axios.put(`http://127.0.0.1:8000/proj/student/${userId}/`,data);
//       navigate('/show')
//     }

//   return (
//     <div>
//     <form onSubmit={handleSubmit(saveData)}>
//         <label>Enter Roll</label>
//         <input type="number" className="form-control" {...register('roll')}/><br/>

//         <label>Enter Name</label>
//         <input type="text" className="form-control" {...register('name')}/><br/>
//         <label>Enter Marks</label>
//         <input type="number" className="form-control" {...register('marks')}/><br/>

//         <input type="submit" value='UPDATE STUDENT' className="btn btn-success col-4 "/>
//         <input type="reset" value='RESET' className="btn btn-warning col-4 float-end"/>
//       </form>
//     </div>
//   )
// }

// export default Update

import React, { useEffect, useState } from 'react'
import {useForm} from 'react-hook-form';
import { useParams, useNavigate } from 'react-router-dom';
import { getPostDetailsAPI, updatePostAPI } from "../../../MyApiServices/myapiServies"
import Navbar from '../../Layout/Navbar';

function Update() {
  const {register, handleSubmit,setValue} = useForm();

  let referer = document.referrer

  // const [post,setPost] = useState({})

  const {id} = useParams('id');

  const nav = useNavigate();
  

  async function getPostForEdit (){
    const result = await getPostDetailsAPI(id);
        setValue('roll',result.data.roll)
        setValue('name',result.data.name)
        setValue('marks',result.data.marks)
    // setPost( obj.data)
  }

  useEffect(()=>{
    getPostForEdit();
      },[])

  const updatePost = async (postData) =>{
    const token = sessionStorage.getItem('token')
    if(!token){
      nav('/login')
    }
    else{
      await updatePostAPI(postData);
      nav('/show')
    }

  }
  return (
    <>
    <Navbar/>
    <div className='container'>
        <center>
            <h3 className='text-info'>Edit Post</h3>
            <form onSubmit={handleSubmit(updatePost)}>
                <label>Enter Roll</label>
                <input type="number" className="form-control"  {...register('roll')} /><br/>

                <label>Enter Name</label>
                <input type="text" className="form-control" {...register('name')} /><br/>
                <label>Enter Marks</label>
                <input type="number" className="form-control" {...register('marks')}/><br/>
              
              <button type="submit" className="btn btn-success col-sm-5">Update Post</button>
              <button type="button" className="btn btn-danger col-sm-5 float-end" ><a style={{textDecoration:'none'}} href={`${referer}`}>React</a></button>     
            </form>
            
        </center>
    </div>
    </>
  )
}

export default Update;