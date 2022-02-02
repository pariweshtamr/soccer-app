import React, { useEffect, useState } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import Rating from '../../components/Rating'
import { useDispatch, useSelector } from 'react-redux'
import LoadingBox from '../../components/LoadingBox'
import MessageBox from '../../components/MessageBox'
import { fetchAProductById } from './ProductAction'

const ProductPage = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { id } = useParams()
  const [qty, setQty] = useState(1)

  const { isPending, productResponse, selectedProduct } = useSelector(
    (state) => state.product,
  )

  useEffect(() => {
    dispatch(fetchAProductById(id))
  }, [dispatch, id])

  const addToCartHandler = () => {
    navigate(`/cart/${id}?qty=${qty}`, { replace: true })
  }

  return (
    <>
      {isPending ? (
        <LoadingBox />
      ) : productResponse.message ? (
        <MessageBox variant="danger">{productResponse.message}</MessageBox>
      ) : (
        <div>
          <Link to="/">Back to Home</Link>
          <div className="row top">
            <div className="col-2">
              <img
                className="large"
                src={selectedProduct.image}
                alt={selectedProduct.name}
              />
            </div>
            <div className="col-1">
              <ul>
                <li>
                  <h1>{selectedProduct.name}</h1>
                </li>
                <li>
                  <Rating
                    rating={selectedProduct.rating}
                    numReviews={selectedProduct.numReviews}
                  ></Rating>
                </li>
                <li>Price: ${selectedProduct.price}</li>
                <li>
                  Description: <p>{selectedProduct.description}</p>
                </li>
              </ul>
            </div>
            <div className="col-1">
              <div className="card card-body">
                <ul>
                  <li>
                    <div className="row">
                      <div>Price</div>
                      <div className="price">${selectedProduct.price}</div>
                    </div>
                  </li>
                  <li>
                    <div className="row">
                      <div>Status</div>
                      <div>
                        {selectedProduct.countInStock > 0 ? (
                          <span className="success">In stock</span>
                        ) : (
                          <span className="danger">Unavailable</span>
                        )}
                      </div>
                    </div>
                  </li>
                  {selectedProduct.countInStock > 0 && (
                    <>
                      <li>
                        <div className="row">
                          <div>Qty</div>
                          <div>
                            <select
                              value={qty}
                              onChange={(e) => setQty(e.target.value)}
                            >
                              {[
                                ...Array(selectedProduct.countInStock).keys(),
                              ].map((x) => (
                                <option value={x + 1}>{x + 1}</option>
                              ))}
                            </select>
                          </div>
                        </div>
                      </li>
                      <li>
                        <button
                          onClick={addToCartHandler}
                          className="primary block"
                        >
                          Add to Cart
                        </button>
                      </li>
                    </>
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default ProductPage
