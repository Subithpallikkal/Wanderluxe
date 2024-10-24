import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'
import Home from '../Pages/Home'



const AppLayout = () => {
  return (
    <div>
        <Header />
        <Outlet/>
    </div>
  )
}

export default AppLayout
