import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import Home from './pages/Home'
import Footer from './components/Footer'
import SingleProduct from './pages/SingleProduct'

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Login />} />
        <Route path='/home' element={<Home />} />
        <Route path='/home/1' element={<SingleProduct />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
