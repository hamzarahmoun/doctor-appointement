import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Doctors from './pages/Doctors'
import Contact from './pages/Contact'
import About from './pages/About'
import Login from './pages/Login'
import MyProfile from './pages/MyProfile'
import MyAppointement from './pages/MyAppointement'
import Appointement from './pages/Appointement'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
const App = () => {
  return (
    <div className='mx-4 sm:mx[10%] '>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/doctors' element={<Doctors />} />
        <Route path='/doctors/:speciality' element={<Doctors />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/about' element={<About />} />
        <Route path='/login' element={<Login />} />
        <Route path='/my-profile' element={<MyProfile />} />
        <Route path='/my-appointement' element={<MyAppointement />} />
        <Route path='/my-appointement/:docId' element={<Appointement />} />

      </Routes>
      <Footer/>
    </div>
  )
}

export default App