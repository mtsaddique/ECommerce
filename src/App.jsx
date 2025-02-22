import React, { useEffect } from 'react'
import './App.css'

import {Outlet, useLocation} from 'react-router-dom'
import Header from './Component/header/header'
import Footer from './Component/Footer/Footer'



function App() {
  const {pathname} = useLocation()

  useEffect(() => {
    window.scrollTo(0,0)
  } , [pathname])
  return (
    <>
      <Header />
      <Outlet />
      <Footer />

    </>
  )
}

export default App
