import formats from 'newbot-formats'
import nasaService from '../../services/nasa.service'
import code from './apod.converse'

export default {
    code,
    skills: {
        formats
    },
    functions: {
        getApod: nasaService.getApod.bind(nasaService)
    }
}