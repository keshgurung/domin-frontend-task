import { useState } from 'react'
import ProductInformation from '../components/ProductInformation'
import { singleProductData } from '../helper/data'

const SingleProduct = () => {
  const [product, setProduct] = useState(singleProductData[0])
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
