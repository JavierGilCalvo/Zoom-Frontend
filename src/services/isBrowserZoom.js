import axios from 'axios'

const ENDPOINT_ZOOM_BACKEND = 'https://wijjw4sa31.execute-api.us-east-1.amazonaws.com/dev/'
export const getTextToShow = async () => {
    try {
        const response = await axios.get(ENDPOINT_ZOOM_BACKEND)
        return response.message
    } catch (error) {
        console.error(error)
    }
}