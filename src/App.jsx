import React from 'react'
import Header from './component/Header'
import { Routes, Route } from 'react-router'
import Home from './pages/Home'
import About from './pages/About'
import Footer from './component/Footer'

function App() {
  return (
    <>
      <div>
        <Header />        
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        <Footer />
      </div>
    </>
  )
}

export default App