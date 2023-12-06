//npm packages
// import React from 'react'

//npm modules
import {Routes, Route} from 'react-router-dom'

// import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
//components
import NavBar from './components/navbar/NavBar'
import Home from './components/pages/Home'

//styles
import './App.css'
// import './App.css'


function App() {
  return (
    <>
      <NavBar />
        <Routes>
          <Route path ='/' exact element={<Home />} />
        </Routes>
    </>
  )
}

export default App
