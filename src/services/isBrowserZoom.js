import axios from 'axios'

const ENDPOINT_ZOOM_BACKEND = 'https://wijjw4sa31.execute-api.us-east-1.amazonaws.com/dev/'
const ENDPOINT_PRUEBA_DITTO = 'https://pokeapi.co/api/v2/pokemon/ditto'
export const getTextToShow = async () => {
  try {
    const response = await axios.get(ENDPOINT_ZOOM_BACKEND)
    return response.data.message
  } catch (error) {
    console.error(error)
    const response = await axios.get(ENDPOINT_PRUEBA_DITTO)
    return response.data.name
  }
}
