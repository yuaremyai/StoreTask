import React, { useState } from 'react'
import './ProductCard.css'
import ProductCardText from './ProductCardText'

interface Props{
  stock: string,
  image: string,
  name: string,
  weight: string,
  id:number,
  deleteProduct: (id: number) => void
}

function ProductCard( {stock, image, name, weight, id, deleteProduct}: Props) {
  const [confirm, setConfirm] = useState<boolean>(false)
  
  return (
    <div className='product_card_wrapper'>
        <img className='product_image' src={image} alt="" />
        <ProductCardText>{name}</ProductCardText>
        <ProductCardText>{stock} in stock</ProductCardText>
        <ProductCardText>{weight} g</ProductCardText>
        {confirm ? 
        <div className='product_deletion_buttons'>
          <button className='product_button_confirm' onClick={ () => deleteProduct(id)}>Confirm</button>
          <button className='product_button_cancel' onClick={ () => setConfirm(false)}>Cancel</button>
        </div>
        : <button className='product_button_delete' onClick={ () => setConfirm(true)}>Delete</button>
        }
    </div>
  )
}

export default ProductCard