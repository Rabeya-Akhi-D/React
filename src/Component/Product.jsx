import React from 'react'

const Production = () => {
  return (
    <Product
    name="computer"
    price="4000"/>
  )
}

const Product = (props)=>{
    return(
        <section>
            <h2>Name:{props.name}</h2>
            <p>Price:{props.price}</p>
        </section>
    )
}

export default Production