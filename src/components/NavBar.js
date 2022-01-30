import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const NavBar = () => {
  const { cartItems } = useSelector((state) => state.cart)

  return (
    <header className="nav-bar">
      <div>
        <Link to="/">
          <h2 className="brand">Sports House</h2>
        </Link>
      </div>
      <div className="center">
        <div className="input_wrapper">
          <input type="text" />
          <i className="fas fa-search"></i>
        </div>
      </div>
      <div className="right">
        <Link to="/cart">
          <div className="nav-bag">
            <i className="fas fa-shopping-cart"></i>
            <span className="bag-quantity">
              {cartItems.length > 0 && <span>{cartItems.length}</span>}
            </span>
          </div>
        </Link>
        <Link to="/signin" className="signin">
          Sign In
        </Link>
      </div>
    </header>
  )
}

export default NavBar
