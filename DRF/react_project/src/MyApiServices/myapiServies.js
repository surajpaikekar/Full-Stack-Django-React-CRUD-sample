import axios from 'axios';

let signupurl = 'http://127.0.0.1:8000/proj/register/';
let login_url = 'http://127.0.0.1:8000/access/';
let post_url = 'http://127.0.0.1:8000/proj/student/';


const check_token = () => {
    const token = sessionStorage.getItem('token');
    return token;
}


export const signUpAPI = (userData) => {
    return axios.post(signupurl,userData);
}


export const loginAPI =(loginCredentials) =>{
    return axios.post(login_url,loginCredentials);
}



export const createPostAPI = (postData) =>{
    const token = check_token();
    console.log("token checked----->>", token)
    if(!token){
        return null
    }
    
    const headers = {
        'Authorization': 'Bearer '+token
    }
    
    return axios.post(post_url,postData,{headers: headers});
}


export const getAllPosts = () =>{
    
    return axios.get(post_url)
    console.log()
}


export const getPostDetailsAPI = (id) => {
    return axios.get(post_url+id+"/")
}


export const updatePostAPI = (postData) => {
    const token = check_token()
    if(!token){
        return null
    }
    const headers = {
        'Authorization':'Bearer'+token
    }
    return axios.put(post_url+postData.id+"/",postData,{headers:headers})
} 

export const deletePostAPI = (id) => {
    const token = check_token()
    if(!token){
        return null
    }
    
    const headers = {
        'Authorization':'Bearer '+token
    }
    return axios.delete(post_url+id+"/",{headers:headers})
} 