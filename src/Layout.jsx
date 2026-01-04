import React from 'react'
import Header from './components/Header'
import App from './App'
import Footer from './components/Footer'
import { Outlet } from 'react-router'
import ScrollToTop from './components/ScrollToTop'

function Layout() {
    return (
        <div>
            <ScrollToTop />
            <Header />
            <Outlet />
            <Footer />
        </div>
    )
}

export default Layout
