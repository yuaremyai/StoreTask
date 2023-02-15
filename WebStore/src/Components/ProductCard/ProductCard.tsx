import React from 'react'
import './ProductCard.css'

interface Props{
  stock: string,
  image: string,
  name: string
  weight: string
}

function ProductCard( {stock, image, name, weight}: Props) {
  return (
    <div className='product_card_wrapper'>
        <img className='product_image' src={image} alt="" />
        <p className='product_name'>{name}</p>
        <p className='product_stock'>{stock} in stock</p>
        <p className='product_weight'>{weight} g</p>

    </div>
  )
}

export default ProductCard