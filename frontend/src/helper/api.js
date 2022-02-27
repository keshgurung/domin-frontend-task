import axios from 'axios'

export const getData = async () => {
  const config = {
    method: 'get',
    url: 'http://localhost:4000/',
  }
  const response = await axios(config)
  return response.data
}

export const getSingleData = async () => {
  const config = {
    method: 'get',
    url: 'http://localhost:4000/1',
  }
  const response = await axios(config)
  return response.data[0]
}
