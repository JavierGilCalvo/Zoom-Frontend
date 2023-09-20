import axios from 'axios'

const ENDPOINT_ZOOM_BACKEND = 'https://wijjw4sa31.execute-api.us-east-1.amazonaws.com/dev/'
const ENDPOINT_PRUEBA_DITTO = 'https://pokeapi.co/api/v2/pokemon/ditto'
export const getTextToShow = () => {
  let respuesta = {}
  axios.get(ENDPOINT_ZOOM_BACKEND).then(response => {
    console.log(response);
    respuesta = respuesta.data.message
  })
  .catch(error => {
    if (error.response) {
        console.log('Data', error.response.data);
        console.log('Status', error.response.status);
        console.log('Headers', error.response.headers);
        respuesta = `Data: ${error.response.data} - Status: ${error.response.status} - Headers: ${error.response.headers}`
    } else if (error.request) {
        console.log('Error Request', error.request);
    } else {
        console.log('Error', error.message);
    }
  })
  return respuesta
}
