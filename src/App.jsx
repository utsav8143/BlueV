import React from 'react'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Products from './components/Products.jsx'
import Quality from './components/Quality.jsx'
import Footer from './components/Footer.jsx'
import Contact from './components/Contact.jsx'

const App = () => {
  return (
    <div>
      <Header/>
      <Hero/>
      <About/>
      <Products/>
      <Quality/>
     
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
