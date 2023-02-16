import React, { useState } from 'react'
import './ProductCard.css'

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
        <p className='product_name'>{name}</p>
        <p className='product_stock'>{stock} in stock</p>
        <p className='product_weight'>{weight} g</p>
        {confirm ? 
        <div className='product_deletion_buttons'>
          <button className='product_button_confirm' onClick={ () => deleteProduct(id)}>Confirm</button>
          <button className='product_button_cancel' onClick={ () => setConfirm(false)}>Cancel</button>
        </div>
        : <button className='product_button_delete' onClick={ () => setConfirm(true)}>Delete</button>}

    </div>
  )
}

export default ProductCard