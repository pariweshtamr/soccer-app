import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  userInfo: localStorage.getItem('userInfo')
    ? JSON.parse(localStorage.getItem('userInfo'))
    : null,
  isPending: false,
  isSignedIn: false,
  signinResponse: {},
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    requestPending: (state) => {
      state.isPending = true
    },
    signinSuccess: (state, { payload }) => {
      state.isPending = false
      state.signinResponse = {}
      state.isSignedIn = true
      state.userInfo = payload || {}
    },
    signinFail: (state, { payload }) => {
      state.isPending = false
      state.signinResponse = payload || {}
    },
    signoutSuccess: (state) => {
      state.userInfo = {}
      state.isSignedIn = false
    },
  },
})

const { reducer, actions } = userSlice

export const {
  requestPending,
  signinSuccess,
  signinFail,
  signoutSuccess,
} = actions

export default reducer
