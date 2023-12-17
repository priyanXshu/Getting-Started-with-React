import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Categories from './components/Categories/Categories'
import Shop from './components/Shop/Shop'
import Deal from './components/Deal/Deal'
import Testimonial from './components/Testimonial/Testimonial'
import Blog from './components/Blog/Blog'
import Footer from './components/Footer/Footer'

const App = () => {
  return (
    <main className='app'>
      <Navbar />
      <Hero />
      <Categories />
      <Shop />
      <Deal />
      <Testimonial />
      <Blog />
      <Footer />
    </main>
  )
}

export default App