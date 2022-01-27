import React from 'react'
import { useParams, useLocation } from 'react-router-dom'

const CartPage = () => {
  const { id } = useParams()
  const location = useLocation()
  const qty = location.search ? Number(location.search.split('=')[1]) : 1
  return (
    <div>
      <h1>Cart Items</h1>
      <p>
        ADD TO CART : PRODUCT ID: {id} Qty: {qty}
      </p>
    </div>
  )
}

export default CartPage
