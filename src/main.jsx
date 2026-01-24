import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ReactDOM from "react-dom/client";
import {createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx';
import Project from './project1.jsx';
import NotFound from './components/NotFound.jsx';
import Lenis from 'lenis'

// Initialize Lenis
const lenis = new Lenis({
  autoRaf: true,
});

// Listen for the scroll event and log the event data
lenis.on('scroll', (e) => {
  console.log(e);
});

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
      },
      {
        path: '*',
        element: <NotFound />
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
