import React, { createContext, useEffect, useState } from 'react';
import app from '../Firebase/Firebase_config';
import { getAuth,createUserWithEmailAndPassword,signOut,signInWithEmailAndPassword,onAuthStateChanged } from "firebase/auth";

export const AuthProviderdata=createContext(null);
const AuthProvider = ({children}) => {
    const[user,setUser]=useState(null);
    const[loading,setLoading]=useState(true);
    //getauth
    const auth = getAuth(app);

//signin
const signin=(email,password)=>{
  setLoading(true);

    return signInWithEmailAndPassword(auth, email, password)

}
//signup
const signup=(email,password)=>{
  setLoading(true);

    return createUserWithEmailAndPassword(auth, email, password)

}
//onAuthChanged
// useEffect(()=>{onAuthStateChanged(auth, (user) => {
//     if (user) {
//       setUser(user);
//       setLoading(false);
//     } else {
//       // User is signed out
//       // ...
//     }
//   });},[])


  useEffect(()=>{
    const unsubscribe=onAuthStateChanged(auth, user=> {
     
          setUser(user);
          setLoading(false);
         
      });
      return ()=>{
      return unsubscribe()
      };
},[])
  //signup/logout
const logout=()=>{
    signOut(auth).then(() => {
        // Sign-out successful.
        setUser('');
      }).catch((error) => {
        // An error happened.
      });
}



  
    const data="Tasnia Sharin";
    const Authdata={
data,signup,signin,logout,user,loading
    };
    return (
        <AuthProviderdata.Provider value={Authdata}>
            {children}
        </AuthProviderdata.Provider>
    );
};

export default AuthProvider;