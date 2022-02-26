import { useState, useEffect } from 'react'
import { getSingleData } from '../helper/api'
import ProductInformation from '../components/ProductInformation'

const SingleProduct = () => {
  const [product, setProduct] = useState([])

  useEffect(() => {
    getSingleData().then(setProduct)
  }, [])

  console.log(product)
  return (
    <section>
      {product ? (
        <ProductInformation {...product} isHorizontal={true} />
      ) : (
        <>
          <h1>Loading...</h1>
        </>
      )}
    </section>
  )
}

export default SingleProduct
