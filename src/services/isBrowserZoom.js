import axios from 'axios'

const ENDPOINT_ZOOM_BACKEND = 'https://wijjw4sa31.execute-api.us-east-1.amazonaws.com/dev/'
// const ENDPOINT_PRUEBA_DITTO = 'https://pokeapi.co/api/v2/pokemon/ditto'
export const getTextToShow = async () => {
  try {
    const response = await axios.get(ENDPOINT_ZOOM_BACKEND) // fetch(ENDPOINT_ZOOM_BACKEND, { mode: 'cors' })
    console.log(response)
    return response.data.message
  } catch (error) {
    return `Error Request ${JSON.stringify(error)}`
  }
}
