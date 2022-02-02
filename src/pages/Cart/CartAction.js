import {
  addProductToCartSuccess,
  removeProductFromCartSuccess,
  addProductToCartFail,
  saveShippingAddress,
} from './CartSlice'
import { addToCartById } from '../../api/cartAPI'

export const addToCart = (_id, qty) => async (dispatch, getState) => {
  const data = await addToCartById(_id, qty)
  if (data) {
    dispatch(
      addProductToCartSuccess({
        name: data.name,
        image: data.image,
        price: data.price,
        countInStock: data.countInStock,
        product: data._id,
        qty,
      }),
    )
    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
    return
  }
  dispatch(addProductToCartFail(data))
}

export const removeFromCart = (_id) => (dispatch, getState) => {
  dispatch(removeProductFromCartSuccess(_id))
  localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
}

export const cartSaveShippingAddress = (data) => (dispatch) => {
  dispatch(saveShippingAddress(data))
  localStorage.setItem('shippingAddress', JSON.stringify(data))
}
