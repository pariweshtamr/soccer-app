import { configureStore } from '@reduxjs/toolkit'
import productReducer from './pages/Products/ProductSlice'
import cartReducer from './pages/Cart/CartSlice'
import userReducer from './pages/User/UserSlice'

const store = configureStore({
  reducer: {
    user: userReducer,
    product: productReducer,
    cart: cartReducer,
  },
})

export default store
