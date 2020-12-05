import io
import os
from google.cloud import speech
import logging


logger = logging.getLogger('[GOOGLE SPEECH TO TEXT SERVICE]')

def speech_to_text(path):
    """speech to text facade with google api"""
    logger.info('attempting transcription')
    # Instantiates a client
    client = speech.SpeechClient()

    # Loads the audio into memory
    with io.open(path, "rb") as audio_file:
        content = audio_file.read()
        audio = speech.RecognitionAudio(content=content)

    config = speech.RecognitionConfig(
        encoding=speech.RecognitionConfig.AudioEncoding.LINEAR16,
        sample_rate_hertz=16000,
        language_code="en-US",
    )

    try:
        # Detects speech in the audio file
        response = client.recognize(config=config, audio=audio)
        logger.info('transciption success ...')
        return response.results
    except IOError as err:
        logger.error('error while transcribing the audio file', err)

def format_results(results):
    """ map result into an array of string transcription"""
    formated = []
    for result in results:
        formated.append(result.alternatives[0].transcript)
    return formated