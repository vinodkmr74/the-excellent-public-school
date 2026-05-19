import React from 'react'
import Header from './page/navbar/Header'
import Footer from './page/footer/Footer'
import { Outlet } from 'react-router-dom'

export default function App() {
  return (<>
  <Header />
  <Outlet />
  <Footer />
  </>
  )
}
