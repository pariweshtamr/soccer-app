import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { signout } from '../pages/User/UserAction'

const NavBar = () => {
  const { cartItems } = useSelector((state) => state.cart)
  const { userInfo } = useSelector((state) => state.user)
  const dispatch = useDispatch()

  const signoutHandler = () => {
    dispatch(signout())
  }

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
              {cartItems.length > 0 ? (
                <span className="badge">{cartItems.length}</span>
              ) : (
                <span className="empty-cart"></span>
              )}
            </span>
          </div>
        </Link>
        {userInfo ? (
          <div className="dropdown">
            <Link to="#">
              {userInfo.name} <i className="fa fa-caret-down"></i>
            </Link>
            <ul className="dropdown-content">
              {/* <Link to="#signout" onClick={signoutHandler}>
                Sign Out
              </Link> */}
              <a href="/" onClick={signoutHandler}>
                Sign Out
              </a>
            </ul>
          </div>
        ) : (
          <Link to="/signin" className="signin">
            Sign In
          </Link>
        )}
      </div>
    </header>
  )
}

export default NavBar
