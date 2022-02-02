import Axios from 'axios'

const rootUrl =
  process.env.NODE_ENV === 'production'
    ? process.env.ROOT_URL
    : 'http://localhost:8000/api/v1'

const userApi = rootUrl + '/user'

export const signinUser = async ({ email, password }) => {
  try {
    const { data } = await Axios.post(userApi + '/signin', { email, password })
    return data
  } catch (error) {
    return {
      status: 'error',
      message: 'Invalid login details',
    }
  }
}

export const registerUser = async (newUser) => {
  try {
    const { data } = await Axios.post(userApi + '/register', newUser)
    console.log(data)
    return data
  } catch (error) {
    console.log(error)
    return {
      status: 'error',
      message: error.message,
    }
  }
}

export const verifyNewUser = async (info) => {
  try {
    const { data } = await Axios.patch(userApi + '/email-verification', info)
    console.log(data)
    return data
  } catch (error) {
    console.log(error)
    return {
      status: 'error',
      message: error.message,
    }
  }
}
