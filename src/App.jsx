import React, { useState, useEffect } from 'react'
import './App.scss'
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route
} from 'react-router-dom'
import Navigation from './Components/Navigation/Navigation'
import Home from './pages/Home/Home'
// import Service from './pages/Service/Service'
import DateHeure from './pages/DateHeure/DateHeure'
import Info from './pages/Info/Info'
import Cart from './pages/Cart/Cart'
import Rewiews from './pages/Reviews/Reviews'
import Page404 from './pages/404page/Page404'
import Page500 from './pages/500page/Page500'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Navigation />} errorElement={<Page500 />}>
      <Route index element={<Home />} />
      {/* <Route path='/service' element={<Service />} /> */}
      <Route path='/date' element={<DateHeure />} />
      <Route path='/info' element={<Info />} />
      <Route path='/cart' element={<Cart />} />
      <Route path='/reviews' element={<Rewiews />} />
      <Route path='*' element={<Page404 />} />
    </Route>
  )
)


function App() {
  useEffect(()=> {
    localStorage.getItem('language') ? '' : localStorage.setItem('language','it')
  })

  return (
    <>
      <div className="app">
        <RouterProvider router={router} />
      </div>
    </>
  )
}

export default App
