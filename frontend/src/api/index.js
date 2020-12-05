import axios from 'axios'



const instance = axios.create({
    baseURL: 'http://127.0.0.1:5000',
    headers: { Accept: 'application/json' },
})
const checkBackendHealth = () => instance.get('/')

const uploadAudioFile = body => instance.post('/audio/transcript', body)

export default { checkBackendHealth, uploadAudioFile }