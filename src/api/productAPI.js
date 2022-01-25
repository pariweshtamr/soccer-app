import Axios from 'axios'

const rootUrl =
  process.env.NODE_ENV === 'production'
    ? process.env.ROOT_URL
    : 'http://localhost:8000/api'

const prodApi = rootUrl + '/products/'

export const getProducts = async () => {
  try {
    const { data } = await Axios.get(prodApi)
    return data
  } catch (error) {
    return error?.message?.data || { status: 'error', message: error.message }
  }
}
