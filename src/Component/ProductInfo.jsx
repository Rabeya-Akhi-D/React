import React from 'react'

const ProductInfo = () => {
    const product = 
    { name : 'Computer',
            price : 4000,
            availability : "In stock",}
  return (
    <div>
<h1>Name:{product.name}</h1>
<h2>price:{product.price}</h2>
   
    </div>
  )
}

export default ProductInfo