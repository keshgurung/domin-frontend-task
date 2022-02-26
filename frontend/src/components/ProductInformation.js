import { BsArrowLeftCircle } from 'react-icons/bs'
import { useNavigate, Link } from 'react-router-dom'

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
          <h3>Info</h3>
        </div>
        <div>
          <h3>Configure</h3>
        </div>
        <div>
          <h3>Reports</h3>
        </div>
      </section>

      <section className='single-electronics'>
        <div className='title'>
          <p>Integrated electronics</p>
        </div>
        <div className='single-stats'>
          <div className='temp'>
            <button>25.2°C</button>
            <p>Temperature</p>
          </div>
          <div className='hour'>
            <button>03 h 47 min</button>
            <p>Operating hours</p>
          </div>
        </div>
      </section>

      <section className='single-char'>
        <div className='title'>
          <p>Operational characteristics</p>
        </div>
        <div className='char-info'>
          <p>
            <span>Analog input value:</span> 15.7 mA
          </p>
          <p>
            <span>Spool position:</span> 68.4 %
          </p>
          <p>
            <span>Pressure (P):</span> 35.2 bar
          </p>
          <p>
            <span>Flow torque:</span> 520 mNm
          </p>
        </div>
      </section>
    </div>
  )
}

export default ProductInformation
