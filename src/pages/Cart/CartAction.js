import { addProductToCartSuccess, addProductToCartFail } from './CartSlice'
import { addToCartById } from '../../api/cartAPI'

export const addToCart = (_id, qty) => async (dispatch) => {
  const data = await addToCartById(_id, qty)
  console.log(data)
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
    return
  }
  dispatch(addProductToCartFail(data))
}
