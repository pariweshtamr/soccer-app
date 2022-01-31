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
