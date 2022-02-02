import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import CheckoutSteps from '../../components/CheckoutSteps'
import { cartSavePaymentMethod } from '../Cart/CartAction'

const PaymentMethodPage = () => {
  const navigate = useNavigate()
  const { shippingAddress } = useSelector((state) => state.cart)

  const [paymentMethod, setPaymentMethod] = useState('Stripe')
  const dispatch = useDispatch()

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(cartSavePaymentMethod(paymentMethod))
    navigate('/placeOrder')
  }

  useEffect(() => {
    if (!shippingAddress.address) {
      navigate('/shipping')
    }
  }, [shippingAddress, navigate])
  return (
    <div>
      <CheckoutSteps step1 step2 step3></CheckoutSteps>
      <form className="form" onSubmit={submitHandler}>
        <div>
          <h1>Payment Method</h1>
        </div>
        <div>
          <div>
            <input
              type="radio"
              id="stripe"
              value="Stripe"
              name="paymentMethod"
              required
              checked
              onChange={(e) => setPaymentMethod(e.target.value)}
            />
            <label htmlFor="stripe">Stripe</label>
          </div>
          <div>
            <input
              type="radio"
              id="paypal"
              value="Paypal"
              name="paymentMethod"
              required
              onChange={(e) => setPaymentMethod(e.target.value)}
            />
            <label htmlFor="paypal">Paypal</label>
          </div>
        </div>
        <div>
          <button className="primary" type="submit">
            Continue
          </button>
        </div>
      </form>
    </div>
  )
}

export default PaymentMethodPage
