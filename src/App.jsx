//npm packages


//npm modules
import {Routes, Route} from 'react-router-dom'

//components
import NavBar from './components/navbar/NavBar'
import Home from './components/pages/Home'
import Services from './components/pages/Services'
import Products from './components/pages/Products'
import SignUp from './components/pages/SignUp'

//styles
import './App.css'



function App() {
  return (
    <>
      <NavBar />
        <Routes>
          <Route path ='/' exact element={<Home />} />
          <Route path='/services' element={<Services/>} />
          <Route path='/products' element={<Products/>} />
          <Route path='/sign-up' element={<SignUp/>} />
        </Routes>
    </>
  )
}

export default App
