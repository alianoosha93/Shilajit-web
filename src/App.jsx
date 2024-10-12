import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom/dist'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Home from './pages/Home'
import Shop from './pages/Shop'
import Cart from './pages/Cart'
import Checkout from './pages/Checkout'
import Order from './pages/Order'
import FilterData from './pages/FilterData'
import Contact from './pages/Contact'
import About from './pages/About'

const App = () => {
  const [order, setOrder] = useState(null)
  // const [order, setOrder] = useState({ orderNumber: '' });
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/shop" element={<Shop/>}></Route>
      <Route path="/cart" element={<Cart/>}></Route>
      <Route path="/checkout" element={<Checkout setOrder={setOrder}/>}></Route>
      <Route path="/order-confirmation" element={<Order order={order}/>}></Route>
      <Route path="/filter-data" element={<FilterData/>}></Route>
      <Route path="/contact" element={<Contact/>}></Route>
      <Route path="/about" element={<About/>}></Route>


      
    </Routes>
    <Footer/>
    </BrowserRouter>
  )
}

export default App
