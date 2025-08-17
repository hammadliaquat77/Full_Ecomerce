import React from 'react'
import Header from './component/Header'
import { Routes, Route } from 'react-router'
import Home from './pages/Home'
import About from './pages/About'
import Footer from './component/Footer'
import Contact from './pages/Contact'
import SingleProduct from './pages/SingleProduct'

function App() {
  return (
    <>
      <div>
        <Header />        
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/singleproduct/:id" element={<SingleProduct />} />
          </Routes>
        <Footer />
      </div>
    </>
  )
}

export default App