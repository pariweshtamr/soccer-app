import { configureStore } from '@reduxjs/toolkit'
import productReducer from './pages/Products/ProductSlice'
import cartReducer from './pages/Cart/CartSlice'
import userSigninReducer from './pages/User/UserSlice'

const store = configureStore({
  reducer: {
    userSignin: userSigninReducer,
    product: productReducer,
    cart: cartReducer,
  },
})

export default store
