import React, { useContext, useState } from 'react';
import { Link,  useLocation,  useNavigate } from 'react-router-dom';
import { AuthProviderdata } from '../AuthProvider/AuthProvider';

const Login = () => {
    const[error,setError]=useState('');
    const[success,setSuccess]=useState('');
    console.log(success);
    const navigate=useNavigate();

    const location=useLocation();
    console.log(location);
    const from = location.state?.from?.pathname || "/";
console.log(from);
    
    const receivedata=useContext(AuthProviderdata);
    const submit=(event)=>{

        event.preventDefault();

        const email=event.target.email.value;
        const password=event.target.password.value;
        receivedata.signin(email,password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log(user);
            setError('');
            setSuccess("User has successfully submited");
            event.target.reset();
            navigate(from);
               

         
            // ...
          })
          .catch((error) => {
            const errorMessage = error.message;
            console.log(errorMessage);
            setError(errorMessage);
            setSuccess('')
          });
    }
    return (
        <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col ">
    <div className="text-center ">
      <h1 className="text-5xl font-bold">Login now!</h1>
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
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
        <p className='text-danger'>{error}</p>
              <p className='text-success'>{success}</p>
        <div>
                Do havn't a account.please <Link to='/Resister'className='text-primary'>Resister</Link>
              </div>
      </form>
    </div>
  </div>
</div>
    );
};

export default Login;