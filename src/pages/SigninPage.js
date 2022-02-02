import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import MessageBox from '../components/MessageBox'
import LoadingBox from '../components/LoadingBox'
import { signin } from './User/UserAction'

const SigninPage = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const location = useLocation()
  const navigate = useNavigate()

  const redirect = location.search ? location.search.split('=')[1] : '/'

  const { userInfo, isPending, signinResponse } = useSelector(
    (state) => state.user,
  )

  const dispatch = useDispatch()

  const submitHandler = (e) => {
    e.preventDefault()

    dispatch(signin(email, password))
  }

  useEffect(() => {
    if (userInfo) {
      navigate(redirect)
    }
  }, [navigate, redirect, userInfo])

  return (
    <div>
      <form className="form" onSubmit={submitHandler}>
        <div>
          <h1>Sign In</h1>
        </div>
        {isPending && <LoadingBox></LoadingBox>}
        {signinResponse?.message && (
          <MessageBox
            variant={signinResponse.status === 'success' ? 'success' : 'danger'}
          >
            {signinResponse.message}
          </MessageBox>
        )}
        <div>
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            id="email"
            placeholder="Enter email"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Enter password"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div>
          <label />
          <button className="primary" type="submit">
            Sign In
          </button>
        </div>

        <div>
          <label />
          <div>
            New customer? {''}
            <Link to={`/register?redirect=${redirect}`}>
              Create your account
            </Link>
          </div>
        </div>
      </form>
    </div>
  )
}

export default SigninPage
