import React from 'react'
import { useForm } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import { signUpAPI } from "../../../MyApiServices/myapiServies";
import Navbar from '../../Layout/Navbar';
import { useNavigate } from 'react-router-dom';



function SignUp() {
  const {register, handleSubmit,reset,formState:{errors}} = useForm();

  const nav = useNavigate()

  const registerUser = async (userData) =>{
    console.log(userData)
    const resp = await signUpAPI(userData)
    if(resp.status===201){
      nav('/login')
    }
  }

  return (
    <>
    
    <div className='container' style={{"width":"60%"}}>
        <center>
            <h3 className='text-info'>SignUp</h3>
            <form onSubmit={handleSubmit(registerUser)}>
              <div className="form-group">
                <label htmlFor="exampleUsername" className='float-start'>Username</label>
                <input type="text" className="form-control" id="exampleUsername" placeholder="Enter UserName" {...register('username', 
                {required:{
                  value:true,
                  message:'Username is required'
                }, pattern:{
                  value:/^[a-zA-Z0-9]{3,20}$/,
                  message:'Username can only contains aplhabets and numbers and should be in 8 to 20 characters'
                }})} />
                <ErrorMessage errors={errors} name='username'/>
              </div>
  
              <div className="form-group">
                <label for="exampleInputEmail1" className='float-start'>Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" {...register('email')} aria-describedby="emailHelp" placeholder="Enter Email"/>
                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
              </div>
              <div className="form-group" style={{marginBottom:"10px"}}>
                <label for="exampleInputPassword1" className='float-start'>Password</label>
                <input type="password" placeholder="Password" className="form-control" {...register('password',
                {required:{
                  value:true,
                  message:'Password is required'
                },
                pattern:{
                  value:/^(?=.*[a-z])(?=.*[A-Z])(?=.*[!"#@&\d]).{8,20}$/,
                  message:"password is not strong"
                }
                })} />
                <ErrorMessage errors={errors} name='password'/>

              </div><br/>
              <button type="submit" className="btn btn-success col-sm-5 float-start">Add User</button>
              <button type="button" className="btn btn-danger col-sm-5 float-end" onClick={() => reset()}>Reset</button>
            </form>
        </center>
    </div>
  </>
  )
}

export default SignUp;