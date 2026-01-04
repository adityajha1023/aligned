import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ReactDOM from "react-dom/client";
import {createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx';
import Project from './project1.jsx';

const router=createBrowserRouter([
  {
    path:'/',
    element:<Layout />,
    children:[
      {
        path: '/',
        element:  <App />
      },
      {
        path: '/project1',
        element: <Project  />
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
