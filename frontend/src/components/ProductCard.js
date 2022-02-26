import { Link } from 'react-router-dom'

const ProductCard = ({ image, uid, type, location, status }) => {
  const changeColor = status === 'Active' ? 'green' : 'red'

  return (
    <Link to={`/home/1`} style={{ textDecoration: 'none', color: '#00aec7' }}>
      <div className='product-card'>
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
    </Link>
  )
}

export default ProductCard
