import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthProviderdata } from '../AuthProvider/AuthProvider';
import './Header.css'
const Header = () => {
    const receivedata=useContext(AuthProviderdata);
    const{logout,user}=receivedata;
    return (
       
<div className="navbar bg-primary text-primary-content">
  <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
  <div className='navbar'>
    <Link to="/">Home</Link>
    <Link to="/Resister">Resister</Link>
    <Link to="/Order">Order</Link>

{
    user?<div className='ms-6'>
        <span className='me-4'>{user.email}</span>
        <span onClick={logout}>Logout</span>
    </div>:  <Link to="/Login">Login</Link>
}
  

  </div>
</div> 
       
    );
};

export default Header;