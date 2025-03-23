import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar'
import Herosection from './Components/Herosection'
import About from './Components/About'
import Blog from './Components/Blog'
import TestimonialSlider from './Components/testimonialslider'

 import Footer from './Components/Testimonials'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
  <Navbar /> 
  <Herosection/> 
  <About/>
  <Blog/>
<TestimonialSlider/>
  <Footer/> 
    </>
  )
}

export default App
