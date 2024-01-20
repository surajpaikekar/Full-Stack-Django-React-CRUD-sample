import React, { useEffect, useState } from 'react';
import {useForm} from 'react-hook-form';
import {ErrorMessage} from '@hookform/error-message';
import { NavLink, useNavigate } from 'react-router-dom';
import { loginAPI } from "../../../MyApiServices/myapiServies"
import Navbar from '../../Layout/Navbar';



function Login() {
    const {register,handleSubmit,formState:{errors}} = useForm();
    const [errMsg, setErrorMsg] = useState('')
    const nav = useNavigate();
    //console.log(location.state)
    
    const loginUser = async (userCredentials) =>{
        try{
            const resp = await loginAPI(userCredentials);
            if (resp.status === 200){
                const user = resp.data;
                sessionStorage.setItem('token',user.access);
                sessionStorage.setItem('refresh',user.refresh);
                nav('/show');
            
            }
        }catch(error){
            if(error.response.status===401){
                setErrorMsg("username or password invalid")
            }
        }

    }
    useEffect(()=>{
        const token = sessionStorage.getItem('token')
        if(token){
            nav('/show');
        }
    });

   
  return (
    <>
    <Navbar/>
    <div className='container'>
        {errMsg &&<p className='text-danger' id='errorlogin'>{errMsg}</p>}
        <form onSubmit={handleSubmit(loginUser)}>
            <div class="mb-3">
                <label for="exampleInputUsername" class="form-label">Username</label>
                <input type="text" class="form-control" id="exampleInputUsername" {...register('username',{
                    required:{
                        value:true,
                        message: 'username is required'
                    }
                })} />
                <p className='text-danger'><ErrorMessage errors={errors} name='username'/></p>
                
            </div>
            <div class="mb-3">
                <label for="exampleInputPassword" class="form-label">Password</label>
                <input type="password" class="form-control" id="exampleInputPassword" {...register('password',{
                    required:{
                        value:true,
                        message:'password is required'
                    }
                })}/>
                <p className="text-danger"><ErrorMessage  errors={errors} name='password'/></p>
            </div>
            <div class="mb-3 form-check">
                <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                <label class="form-check-label" for="exampleCheck1">Check me out</label>
            </div>
            <button type="submit" class="btn btn-outline-primary col-sm-5">Submit</button>
            <NavLink className="btn btn-outline-warning col-sm-5 float-end" to="/signup" style={{textDecoration:'none'}}>SignUp</NavLink>
        </form>
    </div>
    </>
  )
}

export default Login;