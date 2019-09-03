import code from './main.converse'
import formats from 'newbot-formats'
import apodSkill from './skills/apod/apod'

export default {
    code,
    skills: {
        formats,
        apodSkill
    }
}