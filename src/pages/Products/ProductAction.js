import {
  respondPending,
  respondFail,
  getProductsSuccess,
  getSingleProductsSuccess,
} from './ProductSlice'
import { getProducts } from '../../api/productAPI'

export const fetchProducts = () => async (dispatch) => {
  dispatch(respondPending())
  const data = await getProducts()
  try {
    dispatch(getProductsSuccess(data))
  } catch (error) {
    dispatch(respondFail(data))
  }
}
