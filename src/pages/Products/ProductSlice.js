import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isPending: false,
  productResponse: {},
  products: [],
  selectedProduct: {},
}

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    respondPending: (state) => {
      state.isPending = true
    },
    getProductsSuccess: (state, { payload = [] }) => {
      state.isPending = false
      state.products = payload
    },
    getSingleProductSuccess: (state, { payload = {} }) => {
      state.isPending = false
      state.selectedProduct = payload
    },
    respondFail: (state, { payload }) => {
      state.isPending = false
      state.productResponse = payload
    },
  },
})

const { reducer, actions } = productSlice
export const {
  respondPending,
  respondFail,
  getProductsSuccess,
  getSingleProductSuccess,
} = actions

export default reducer
