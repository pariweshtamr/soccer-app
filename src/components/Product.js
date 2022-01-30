import React from 'react'
import { Link } from 'react-router-dom'
import Rating from './Rating'

const Product = (props) => {
  const { product } = props
  return (
    <div key={product._id} className="card">
      <Link to={`/product/${product._id}`}>
        <img className="medium" src={product.image} alt={product.name} />
        <div className="cart-body">
          <h2>{product.name}</h2>
          <Rating
            rating={product.rating}
            numReviews={product.numReviews}
          ></Rating>
          <div className="price">${product.price}</div>
        </div>
      </Link>
    </div>
  )
}

export default Product
