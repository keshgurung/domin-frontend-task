import logo from '../assets/domin_logo.png'
import { AiOutlinePlusCircle, AiOutlineSearch } from 'react-icons/ai'
import { useState } from 'react'
import ProductCard from '../components/ProductCard'
import Footer from '../components/Footer'
import { productData } from '../helper/data'
const Home = () => {
  const [products, setProducts] = useState(productData)

  return (
    <div className='main'>
      <div className='top'>
        <img className='logo-main' src={logo} alt='logo' />
        <h2>ASCEND</h2>
        <AiOutlinePlusCircle
          className='icon'
          style={{ width: '4em', height: '2em' }}
        />
      </div>

      <div className='search'>
        <AiOutlineSearch
          className='icon-search'
          style={{ width: '3em', height: '1.5em' }}
        />
        <input required className='search-box' type='text' />
        <span className='placeholder'>Search</span>
      </div>

      <div className='dropdown'>
        <button className='dropbtn'>
          Product type <span className='span1-loc'>&#x25BC;</span>
        </button>
        <button className='dropbtn'>
          Location <span className='span-loc'>&#x25BC;</span>
        </button>
      </div>

      <section className='product'>
        <ul>
          {products.map((product) => (
            <li key={product.id}>
              <ProductCard {...product} />
            </li>
          ))}
        </ul>
      </section>
      <Footer />
    </div>
  )
}

export default Home
