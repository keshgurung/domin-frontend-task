import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import Home from './pages/Home'
import Footer from './components/Footer'
import SingleProduct from './pages/SingleProduct'
import Chart from './pages/Chart'
import { UserData } from './helper/Data'
import { useState } from 'react'

function App() {
  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.year),
    datasets: [
      {
        label: 'users gained',
        data: UserData.map((data) => data.userGain),
      },
    ],
  })
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Login />} />
        <Route path='/home' element={<Home />} />
        <Route path='/home/1' element={<SingleProduct />} />
        <Route path='/home/chart' element={<Chart />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
