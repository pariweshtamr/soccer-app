import { signinUser } from '../../api/userAPI'
import {
  requestPending,
  signinSuccess,
  signinFail,
  signoutSuccess,
} from './UserSlice'

export const signin = (email, password) => async (dispatch) => {
  dispatch(requestPending(email, password))

  // Call api to signin
  const data = await signinUser({ email, password })
  if (data?.status === 'success') {
    localStorage.setItem('userInfo', JSON.stringify(data))
    return dispatch(signinSuccess(data))
  }

  dispatch(signinFail(data))
}

export const signout = () => (dispatch) => {
  localStorage.removeItem('userInfo')
  localStorage.removeItem('cartItems')
  dispatch(signoutSuccess())
}
