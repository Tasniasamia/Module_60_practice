import React, { useContext } from 'react';
import { AuthProviderdata } from '../AuthProvider/AuthProvider';

const Home = () => {
    const receivedata=useContext(AuthProviderdata);
    return (
        <div>
           <p>Lorem ipsum dolor sit amet.{receivedata.data}</p> 
        </div>
    );
};

export default Home;