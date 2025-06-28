import React from 'react'

const ProductList = () => {
const title = "here is our productlist"
    const products = [
        {id:1,name:"phone",price:400},
        {id:2,name:"computer",price:1000},
        {id:3,name:"earpod",price:190},
    ]
  return (
    <div>
        <h1>{title}</h1>
{products.map(({id,name,price})=>(
    <ul key={id}>
        <li>id:{id}</li>
        <li>name:{name}</li>
        <li>price:{price}</li>
    </ul>
))}

    </div>
  )
}

export default ProductList