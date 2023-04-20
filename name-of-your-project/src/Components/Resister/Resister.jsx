import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthProviderdata } from '../AuthProvider/AuthProvider';

const Resister = () => {
    const [error,setError]=useState('');
    const [success,setSuccess]=useState('');
    const receivedata=useContext(AuthProviderdata);
    const submit=(event)=>{
        event.preventDefault();
        const email=event.target.email.value;
        const password=event.target.password.value;
        receivedata.signup(email,password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log(user);
          
            setSuccess("User has submited successfully");
            setError('');
            event.target.reset();
            // ...
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setError(errorMessage);
            setSuccess('');
            // ..
          });
        
        
    }
    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col ">
          <div className="text-center ">
            <h1 className="text-5xl font-bold">Resister now!</h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form className="card-body"onSubmit={submit}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="text" placeholder="email"name="email" className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="text" placeholder="password"name="password" className="input input-bordered" />
                
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Resister</button>

              </div>
              <p className='text-danger'>{error}</p>
              <p className='text-success'>{success}</p>
              <div>
                Do you have a account.please <Link to='/Login'className='text-primary'>Login</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
};

export default Resister;