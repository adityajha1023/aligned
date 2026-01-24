import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { MemoryRouter, Routes, Route } from 'react-router-dom'

import App from './App.jsx'
import Layout from './Layout.jsx'
import Project from './project1.jsx'
import NotFound from './components/NotFound.jsx'

import Lenis from 'lenis'

// Initialize Lenis
const lenis = new Lenis({
  autoRaf: true,
})

lenis.on('scroll', (e) => {
  console.log(e)
})

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MemoryRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<App />} />
          <Route path="project1" element={<Project />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </MemoryRouter>
  </StrictMode>
)
