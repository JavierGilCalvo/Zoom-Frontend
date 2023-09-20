import axios from 'axios'

const ENDPOINT_ZOOM_BACKEND = 'https://wijjw4sa31.execute-api.us-east-1.amazonaws.com/dev/'
// const ENDPOINT_PRUEBA_DITTO = 'https://pokeapi.co/api/v2/pokemon/ditto'
export const getTextToShow = async () => {
  try {
        const response = await axios({
          method: 'get',
          url: ENDPOINT_ZOOM_BACKEND,
          withCredentials: false,
          headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
          }
        })
        console.log(response)
        return response.data.message
    } catch (error) {
      return `Error Request ${JSON.stringify(error)}`
        /*if (error.response) {
            console.log('Data', error.response.data)
            console.log('Status', error.response.status)
            console.log('Headers', error.response.headers)
            return `Data: ${error.response.data} - Status: ${error.response.status} - Headers: ${error.response.headers}`
        } else if (error.request) {
            return `Error Request ${JSON.stringify(error.request)}`
        } else {
          return `Error: ${error.message}`
        }*/
    }
}
