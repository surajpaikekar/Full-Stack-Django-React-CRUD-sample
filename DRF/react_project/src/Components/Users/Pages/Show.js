// import axios from 'axios'
// import React, { useEffect, useReducer, useState } from 'react'
// import { NavLink } from 'react-router-dom'


// function Show() {
//     const[user,setuser] = useState([])

//     async function fetchAllData(){
//         const result = await axios.get("http://127.0.0.1:8000/proj/student/")
//         setuser(result.data)
//     }
    
//     useEffect( ()=>{
//         fetchAllData();
//     },[])



//   return (
//     <div>

//         <table className='table table-dark'>
//             <thead>
//                 <tr>
//                     <th>Roll</th>
//                     <th>Name</th>
//                     <th>Marks</th>
//                     <th>Action</th>
//                 </tr>
//             </thead>
//             <tbody>
//                 {
//                     user.map(obj =>{
//                         return(
//                             <tr>
//                                 <td>{obj.roll}</td>
//                                 <td>{obj.name}</td>
//                                 <td>{obj.marks}</td>
//                                 <td>
//                                     <NavLink to={`/update/${obj.id}`} ><button className='btn btn-success btn-sm m-3'>Update</button></NavLink>
//                                     <NavLink to={`/delete/${obj.id}`} ><button className='btn btn-warning btn-sm'>Delete</button></NavLink>
//                                 </td>
//                             </tr>
//                         )
//                     })
//                 }
//             </tbody>
//         </table>
//     </div>
//   )
// }

// export default Show

import React, { useEffect, useState } from 'react'
import { deletePostAPI, getAllPosts } from "../../../MyApiServices/myapiServies"
import { NavLink, useNavigate } from 'react-router-dom';

import Navbar from '../../Layout/Navbar';

function Show() {
  const [posts,setPosts] = useState([]);
  const [flag,setFlag] = useState(false)
  const nav = useNavigate()

  const allPostsData = async() =>{
      const posts = await getAllPosts();
      console.log('get data--->>>', posts)
      setPosts(posts.data)    
      console.log('after set-->>', posts.data)
  }

  useEffect(()=>{
    allPostsData()
  },[flag])


  const deletePost = async (id) =>{
    const token = sessionStorage.getItem('token')
    if(token){
      await deletePostAPI(id)
      setFlag(!flag)
    }else{
      nav('/login')
    }
    }
  return (
    <>
    <Navbar/>
    <div className='container'>
    {posts?
      <table className='table'>
        <thead className='table-dark'>
          <tr>
            <th scope='col'>Roll</th>
            <th scope='col'>Name</th>
            <th scope='col'>Marks</th>
            <th scope='col'>Update</th>
            <th scope='col'>Delete</th>
          </tr>
        </thead>
        <tbody>
          {posts.map(post =>{
          return(<tr>
            <th scope='row'>{post.roll}</th>
            <td>{post.name}</td>
            <td>{post.marks}</td>
            <td><NavLink className="btn btn-outline-warning" to={`/update/${post.id}`} style={{textDecoration:'none'}}>Update</NavLink></td>
            {/* <td><NavLink className="btn btn-outline-warning" to={`/delete/${post.id}`} style={{textDecoration:'none'}}>Delete</NavLink></td> */}
            <td><button type='button' className='btn btn-outline-danger' onClick={()=>deletePost(post.id)}>delete</button></td>
          </tr>
          )})}
        </tbody>
      </table>:(
        <h3 className='text-danger'>No Post To display</h3>
      )}
    </div>
    </>
  )
}

export default Show;