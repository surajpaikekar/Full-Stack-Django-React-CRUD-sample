import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { getPostDetailsAPI } from "../../../MyApiServices/myapiServies"
import { NavLink } from 'react-router-dom';
import Navbar from '../../Layout/Navbar';

function PostDetails() {
    const {id} = useParams('id');
    const [post, setPost] = useState({})
    
    const getPostDetails = async() =>{
        const obj = await getPostDetailsAPI(id);
        setPost(obj.data)
    }
    useEffect(()=>{
        getPostDetails();
    },[])
  return (
    <>
    <Navbar/>
    <div className='container'>
        <table className='table'>
            <thead className='table-dark'>
                <tr>
                    <th scope='col'>Roll</th>
                    <th scope='col'>Name</th>
                    <th scope='col'>Marks</th>
                    <th scope='col'>Update</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope='row'>{post.roll}</th>
                    <td>{post.name}</td>
                    <td>{post.marks}</td>
                    <td><NavLink to={`/edit_post/${post.id}`}>Update</NavLink></td>
                </tr>
            </tbody>
        </table>
    </div>
    </>
  )
}

export default PostDetails;