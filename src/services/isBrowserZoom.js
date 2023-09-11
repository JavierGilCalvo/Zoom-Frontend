import axios from 'axios'

export const getTextToShow = async () => {
    try {
        const textToShow = await axios.get('/')
        return textToShow
    } catch (error) {
        console.error(error)
    }
}