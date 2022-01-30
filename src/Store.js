import { configureStore } from '@reduxjs/toolkit'
import productReducer from './pages/Products/ProductSlice'
import cartReducer from './pages/Cart/CartSlice'

const store = configureStore({
  reducer: {
    product: productReducer,
    cart: cartReducer,
  },
})

export default store
