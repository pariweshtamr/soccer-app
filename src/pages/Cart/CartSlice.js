import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  cartItems: localStorage.getItem('cartItems')
    ? JSON.parse(localStorage.getItem('cartItems'))
    : [],
  shippingAddress: localStorage.getItem('shippingAddress')
    ? JSON.parse(localStorage.getItem('shippingAddress'))
    : {},
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProductToCartSuccess: (state, action) => {
      const item = action.payload
      const existItem = state.cartItems.find((x) => x.product === item.product)

      if (existItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((x) =>
            x.product === existItem.product ? item : x,
          ),
        }
      } else {
        return { ...state, cartItems: [...state.cartItems, item] }
      }
    },

    removeProductFromCartSuccess: (state, action) => {
      return {
        ...state,
        cartItems: state.cartItems.filter((x) => x.product !== action.payload),
      }
    },

    addProductToCartFail: (state, { payload }) => {
      state.cartResponse = payload
    },

    saveShippingAddress: (state, { payload }) => {
      return { ...state, shippingAddress: { payload } }
    },
  },
})

const { reducer, actions } = cartSlice
export const {
  addProductToCartSuccess,
  removeProductFromCartSuccess,
  addProductToCartFail,
  saveShippingAddress,
} = actions

export default reducer
