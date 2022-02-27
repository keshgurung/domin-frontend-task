import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import Home from './pages/Home'
import SingleProduct from './pages/SingleProduct'
import Configure from './components/Configure'
import Info from './components/Info'
import InfoFull from './components/InfoFull'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path='/' element={<Login />} />
          <Route path='/home' element={<Home />} />
          <Route path='/home/1' element={<SingleProduct />}>
            <Route path='' element={<Info />} />
            {/* <Route path='configure' element={<Configure />} /> */}
            <Route path='report' element={<SingleProduct />} />
          </Route>
          <Route path='home/1/configure' element={<Configure />} />
          <Route path='home/1/info' element={<InfoFull />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
