import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Home from './Components/Home/Home';
import Resister from './Components/Resister/Resister';
import Login from './Components/Login/Login';
import AuthProvider from './Components/AuthProvider/AuthProvider';
import Provider from './Components/Provider/Provider';
import Order from './Components/Order/Order';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children:[
      {
        path:"/",
        element:<Home></Home>,
      },{
        path:"/Resister",
        element:<Resister></Resister>,
      },{
        path:"/Login",
        element:<Login></Login>,
      },{
        path:"/Order",
        element:<Provider><Order></Order></Provider>,
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(

  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router} /></AuthProvider>
  </React.StrictMode>
);
