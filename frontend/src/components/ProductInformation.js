import { BsArrowLeftCircle } from 'react-icons/bs'
import { useNavigate, Link, Outlet } from 'react-router-dom'
import Info from '../components/Info'

import Footer from './Footer'

const ProductInformation = ({ image, uid, type, location, status }) => {
  const navigate = useNavigate()

  const changeColor = status === 'Active' ? 'green' : 'red'
  return (
    <div className='singleproduct'>
      <div className='singleproduct-head'>
        <BsArrowLeftCircle
          className='icon'
          style={{ width: '4em', height: '2em', backgroundcolor: 'black' }}
          onClick={() => {
            navigate('/home')
          }}
        />
        <p>{uid}</p>
      </div>
      <div className='product-card single'>
        <div className='image-container'>
          <img src={image} alt='uid' />
        </div>
        <div className='info'>
          <p>
            <span>S/N:</span>
            {uid}
          </p>
          <p>
            <span>Type:</span>
            {type}
          </p>
          <p>
            <span>Location:</span>
            {location}
          </p>
          <p style={{ color: changeColor }}>
            <span>Status:</span>
            {status}
          </p>
        </div>
      </div>

      <section className='single-menu'>
        <div>
          <h3>
            <Link
              to='/home/1'
              style={{ 'text-decoration': 'none', color: 'grey' }}
            >
              Info
            </Link>
          </h3>
        </div>
        <div>
          <h3>
            <Link
              to='/home/1/configure'
              style={{ 'text-decoration': 'none', color: 'grey' }}
            >
              Configure
            </Link>
          </h3>
        </div>
        <div>
          <h3>
            <Link
              to='/home/1/configure'
              style={{ 'text-decoration': 'none', color: 'grey' }}
            >
              Reports
            </Link>
          </h3>
        </div>
      </section>
      <Outlet />
      <Footer />
    </div>
  )
}

export default ProductInformation
