import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Course from './pages/Course'
import CourseDetails from './pages/CourseDetails'
import AboutUs from './pages/AboutUs'
import PricingPage from './pages/PricingPage'
import Login from './pages/Login'
import Signup from './pages/SignUp'
import Footer from './component/template/Footer'
import MainNavbar from './component/molecules/MainNavbar'
import TopNavbar from './component/molecules/TopNavbar'
import Contact from './pages/Contact'

function App () {
  return (
    <>

      {/* Common Layout */}
      <TopNavbar />
      <MainNavbar />
      {/* <Heading/> */}

      {/* Page Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
       <Route path="/courses" element={<Course/>} />
        <Route path="/course/:id" element={<CourseDetails/>} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>

      {/* Common Footer */}
      <Footer />
    </>

  )
}

export default App
