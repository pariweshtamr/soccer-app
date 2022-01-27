import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Product from '../components/Product'
import LoadingBox from '../components/LoadingBox'
import MessageBox from '../components/MessageBox'
import { fetchProducts } from './Products/ProductAction'

const HomePage = () => {
  const dispatch = useDispatch()
  const { isPending, productResponse, products } = useSelector(
    (state) => state.product || [],
  )

  useEffect(() => {
    dispatch(fetchProducts())
  }, [dispatch])
  return (
    <>
      {isPending ? (
        <LoadingBox></LoadingBox>
      ) : productResponse.message ? (
        <MessageBox variant="danger">{productResponse.message}</MessageBox>
      ) : (
        <div className="row center">
          {products.map((product) => (
            <Product key={product._id} product={product} />
          ))}
        </div>
      )}
    </>
  )
}

export default HomePage
