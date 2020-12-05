
const trans = "so thank you very much for coming David's good to have you here. It's my pleasure Michael glad to be with you how real is artificial intelligence the question of how real is artificial intelligence is a complex what I would say if if we Define artificial intelligence is the ability of a machine on its own to understand large volumes of data to reason that data with a purpose to to predict the future and then tell the continuing to learn and get better that is happening today in certain Fields how far in the Continuum is IBM Watson in operability artificial intelligence is so impersonal once once it's actually intelligent it will no longer be artificial so we're moving to the point that these systems increasingly understand enormous volumes of dataso thank you very much for coming David's good to have you here. It's my pleasure Michael glad to be with you how real is artificial intelligence the question of how real is artificial intelligence is a complex what I would say if if we Define artificial intelligence is the ability of a machine on its own to understand large volumes of data to reason that data with a purpose to to predict the future and then tell the continuing to learn and get better that is happening today in certain Fields how far in the Continuum is IBM Watson in operability artificial intelligence is so impersonal once once it's actually intelligent it will no longer be artificial so we're moving to the point that these systems increasingly understand enormous volumes of data"

const defaultText = "Nothing to transcribe, upload some audio to see some magic :D"
const loadingText = "Please Wait for us, we're transcribing your audio (this could take a while) ...!"

export const renderText = ({ text, loading }) => {
    if (loading) return loadingText
    if (text) return text
    return defaultText;
}