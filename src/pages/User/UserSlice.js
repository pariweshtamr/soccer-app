import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  userInfo: localStorage.getItem('userInfo')
    ? JSON.parse(localStorage.getItem('userInfo'))
    : null,
  isPending: false,
  signinResponse: {},
  registerResponse: {},
  isSignedIn: false,
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    requestPending: (state) => {
      state.isPending = true
    },
    registerSuccess: (state, { payload }) => {
      state.isPending = false
      state.userInfo = payload
      state.registerResponse = payload || {}
    },
    registerFail: (state, { payload }) => {
      state.isPending = false
      state.registerResponse = payload
    },
    signinSuccess: (state, { payload }) => {
      state.userInfo = payload || {}
      state.isPending = false
      state.signinResponse = {}
      state.isSignedIn = true
    },
    signinFail: (state, { payload }) => {
      state.isPending = false
      state.signinResponse = payload
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
  registerSuccess,
  registerFail,
} = actions

export default reducer
