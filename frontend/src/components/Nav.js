import React from 'react'
import { BsArrowLeftCircle } from 'react-icons/bs'
import { useNavigate, Link } from 'react-router-dom'

const Nav = () => {
  const navigate = useNavigate()
  return (
    <div className='nav'>
      <div className='singleproduct-head'>
        <BsArrowLeftCircle
          className='icon'
          style={{ width: '4em', height: '2em', backgroundcolor: 'black' }}
          onClick={() => {
            navigate(-1)
          }}
        />
        <p>SN0000f43</p>
      </div>
      <section className='single-menu'>
        <div>
          <h3>
            <Link
              to='/home/1/info'
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
    </div>
  )
}

export default Nav
