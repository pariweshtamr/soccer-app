import {
  respondPending,
  respondFail,
  getProductsSuccess,
  getSingleProductSuccess,
} from './ProductSlice'
import { getAProductById, getProducts } from '../../api/productAPI'

export const fetchProducts = () => async (dispatch) => {
  dispatch(respondPending())
  const data = await getProducts()
  try {
    dispatch(getProductsSuccess(data))
  } catch (error) {
    dispatch(respondFail(data))
  }
}

export const fetchAProductById = (_id) => async (dispatch) => {
  dispatch(respondPending())

  const data = await getAProductById(_id)
  console.log(data)

  if (data.length) {
    dispatch(getSingleProductSuccess(data[0]))
    return
  }

  dispatch(respondFail(data))
}
