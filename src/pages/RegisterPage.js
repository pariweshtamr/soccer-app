import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import MessageBox from '../components/MessageBox'
import LoadingBox from '../components/LoadingBox'
import { register } from './User/UserAction'

const initialState = {
  name: '',
  email: '',
  password: '',
  confirmPassword: '',
}

const RegisterPage = () => {
  const [user, setUser] = useState(initialState)
  const [passwordError, setPasswordError] = useState('')

  const { isPending, registerResponse } = useSelector((state) => state.user)

  const dispatch = useDispatch()

  const submitHandler = (e) => {
    e.preventDefault()

    // check for password confirmation
    const { password, confirmPassword } = user

    if (password !== confirmPassword) {
      setPasswordError('Password does not match!')
      return
    }
    dispatch(register(user))

    // e.target.reset()
  }

  const onChangeHandler = (e) => {
    const { name, value } = e.target
    console.log(name, value)

    //reset error message
    passwordError && name === 'connfirmPassword' && setPasswordError('')

    setUser({
      ...user,
      [name]: value,
    })
  }

  return (
    <div>
      <form className="form" onSubmit={submitHandler}>
        <div>
          <h1>Create Account</h1>
        </div>
        {isPending && <LoadingBox></LoadingBox>}
        {registerResponse?.message && (
          <MessageBox
            variant={
              registerResponse.status === 'success' ? 'success' : 'danger'
            }
          >
            {registerResponse.message}
          </MessageBox>
        )}
        {passwordError && (
          <MessageBox variant="danger">{passwordError}</MessageBox>
        )}
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter name"
            required
            onChange={onChangeHandler}
          />
        </div>

        <div>
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            name="email"
            placeholder="Enter email"
            required
            onChange={onChangeHandler}
          />
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            placeholder="Enter password"
            required
            onChange={onChangeHandler}
          />
        </div>

        <div>
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            placeholder="Enter password"
            onChange={onChangeHandler}
          />
        </div>

        <div>
          <label />
          <button className="primary" type="submit">
            Register
          </button>
        </div>

        <div>
          <label />
          <div>
            Already have an account? {''}
            <Link to="/signin">Sign in</Link>
          </div>
        </div>
      </form>
    </div>
  )
}

export default RegisterPage
