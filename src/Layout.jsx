import React from 'react'
import Header from './components/Header'
import App from './App'
import Footer from './components/Footer'
import { Outlet } from 'react-router-dom'

function Layout() {
    return (
        <div className="w-full">
            <Header />
            {/* Main content with proper spacing for fixed header */}
            <main className="pt-[80px] w-full">
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}

export default Layout
