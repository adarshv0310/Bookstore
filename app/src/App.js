import React from 'react'
import Course from './Pages/Course'
import Home from './Pages/Home'
import Footer from './Components/Footer'
import Login from './Pages/Login'
import Signup from './Pages/Signup'
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom'
import About from './Pages/About'
function App() {
  return (
    <Router>
      <Routes>
        <Route  path='/' element={<Home/>}/>
        <Route  path='/course' element={<Course/>}/>
         <Route  path='/about' element={<About/>}/>
         <Route  path='/contact' element={<Footer/>}/>
         <Route  path='/login' element={<Login/>}/>
         <Route  path='/signup' element={<Signup/>}/>
      </Routes>
    </Router>
  )
}

export default App
