import { useEffect, useCallback, useState } from 'react'

import Template from './components/Template'
import Upload from './components/Upload/index'

import api from './api'
import { Title, Text } from './components/Texts'
import { renderText } from './components/Texts/utils'


function App() {

  const [transcript, setTranscipt] = useState(null)
  const [backendStatus, setBackendStatus] = useState(null)
  const [loading, setLoading] = useState(false)

  const checkHealth = useCallback(async () => {
    const reponse = await api.checkBackendHealth().then(payload => {
      setBackendStatus(payload.data)
    }).catch(err => {
      console.error('err >>', err.response.data)
      setBackendStatus(null)
    })
  }, [])

  const handleUpload = useCallback(async (data) => {
    setLoading(true)
    await api.uploadAudioFile(data)
    .then(payload => {
      setTranscipt(payload.data)
      setLoading(false)
    }).catch(err => {
      console.error('err >>', err.response.data)
    })
  }, [])

  useEffect(() => {
    checkHealth()
    const clearId = setInterval(checkHealth, 50000)
    return () => clearInterval(clearId)
  }, [])

  return (
    <Template>
      <Title title="Speech to text API" />
      <Upload onUpload={handleUpload} disabled={!backendStatus} loading={loading} />
      <Text text={renderText({ text: transcript, loading })} />
    </Template>
  );
}

export default App;
