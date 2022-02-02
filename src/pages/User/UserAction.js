import { signinUser, registerUser, verifyNewUser } from '../../api/userAPI'
import {
  requestPending,
  signinSuccess,
  signinFail,
  signoutSuccess,
  registerSuccess,
  registerFail,
} from './UserSlice'

export const signin = (email, password) => async (dispatch) => {
  dispatch(requestPending())

  // Call api to signin
  const data = await signinUser({ email, password })
  try {
    dispatch(signinSuccess(data))
  } catch (error) {
    dispatch(signinFail(data))
  }
}

export const signout = () => (dispatch) => {
  localStorage.removeItem('userInfo')
  localStorage.removeItem('cartItems')
  dispatch(signoutSuccess())
}

export const register = (newUser) => async (dispatch) => {
  dispatch(requestPending())

  // Call api to register
  const data = await registerUser(newUser)
  try {
    dispatch(registerSuccess(data))
  } catch (error) {
    dispatch(registerFail(data))
  }
}

export const userEmailVerification = (userObj) => async (dispatch) => {
  dispatch(requestPending())

  // call api
  const data = await verifyNewUser(userObj)
  data?.status === 'success'
    ? dispatch(registerSuccess(data))
    : dispatch(registerFail(data))
  // dispatch response
}
