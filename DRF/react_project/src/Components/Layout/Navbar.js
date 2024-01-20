import React, { useEffect, useState } from 'react'
import{NavLink} from 'react-router-dom'

function Navbar() {
  const [user, setUser] = useState(null);
  useEffect(()=>{
      reloadMyheader()
  },[user])
 
 
  const reloadMyheader =() =>{
      setUser(sessionStorage.getItem('token'))
  }
  return (
    <div>

<nav className="navbar navbar-expand-lg navbar-light bg-info">
  <div className="container-fluid">
    <NavLink className="navbar-brand" to="#">Navbar</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <NavLink className="nav-link active" aria-current="page" to="#">Home</NavLink>
        <NavLink className="nav-link" to="/add">ADD STUDENT</NavLink>
        <NavLink className="nav-link" to="/show">SHOW STUDENT</NavLink>
        <NavLink className="nav-link" to="/delete_all">DELETE ALL</NavLink>
      
        {user ?(
                <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
		            <ul className="navbar-nav" id="loginId">
                        <li className="nav-item">
                            <NavLink className="navbar-brand" to="/logout">Logout</NavLink>
                        </li>
		            </ul>
		        </div>
                )
                :(
                <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
		            <ul className="navbar-nav" id="loginId">
                        <li className="nav-item">
                            <NavLink className="navbar-brand" to='/login'>Login</NavLink>
                        </li>
			            <li className="nav-item">
                            <NavLink className="navbar-brand" to="/signup">Signup</NavLink>
			            </li>
		            </ul>
		        </div>

                )}
                    
                
{/*                        
                            <NavLink className="navbar-brand" to="/logout">Logout</NavLink>
                            
       

                            <NavLink className="navbar-brand" to='/login'>Login</NavLink>
                     
			        
                            <NavLink className="navbar-brand" to="/signup">Signup</NavLink>
			           
		      */}

        
      </div>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar