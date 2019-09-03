import axios from 'axios'

class NasaService {
    constructor() {
        this.apiKey = process.env.NASA_API_KEY
    }

    getApod() {
        return axios
            .get(`https://api.nasa.gov/planetary/apod?api_key=${this.apiKey}`)
            .then(res => res.data)
    }
}

export default new NasaService()