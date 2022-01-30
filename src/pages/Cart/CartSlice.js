import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  cartItems: localStorage.getItem('cartItems')
    ? JSON.parse(localStorage.getItem('cartItems'))
    : [],
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProductToCartSuccess: (state, action) => {
      const item = action.payload
      const existItem = state.cartItems.find((x) => x.product === item.product)
      console.log(item)

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
    addProductToCartFail: (state, { payload }) => {
      state.cartResponse = payload
    },
  },
})

const { reducer, actions } = cartSlice
export const { addProductToCartSuccess, addProductToCartFail } = actions

export default reducer
