import React, { useEffect } from 'react'
import { useParams, useLocation } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addToCart } from './CartAction'

const CartPage = () => {
  const { id } = useParams()
  const { search } = useLocation()

  const qty = search ? Number(search.split('=')[1]) : 1

  const dispatch = useDispatch()

  useEffect(() => {
    if (id) {
      dispatch(addToCart(id, qty))
    }
  }, [dispatch, id, qty])

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
