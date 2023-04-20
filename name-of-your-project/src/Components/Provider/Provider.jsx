import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthProviderdata } from '../AuthProvider/AuthProvider';

const Provider = ({children}) => {
   
    const location=useLocation();
    console.log(location);
    const receivedata=useContext(AuthProviderdata);
    const {user,loading}=receivedata;
   

    if (user) {
        return children;
    }
    if(loading){
        return <div>Loading...</div>
    }
    return ( <Navigate to="/Login" state={{from: location}} replace ></Navigate>);
   
   
    
   
    
};

export default Provider;