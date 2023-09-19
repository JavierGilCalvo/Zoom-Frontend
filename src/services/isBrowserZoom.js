import axios from 'axios'

const ENDPOINT_ZOOM_BACKEND = 'http://wijjw4sa31.execute-api.us-east-1.amazonaws.com/dev/'
const ENDPOINT_PRUEBA_DITTO = 'http://pokeapi.co/api/v2/pokemon/ditto'
export const getTextToShow = async () => {
  try {
    const response = await axios.get(ENDPOINT_ZOOM_BACKEND)
    return response.data.message
  } catch (error) {
    console.error(error)
    try {
      const response = await axios.get(ENDPOINT_PRUEBA_DITTO)
      return response.data.name
    } catch (err) {
      return JSON.stringify(error, Object.getOwnPropertyNames(err))
    }
  }
}
