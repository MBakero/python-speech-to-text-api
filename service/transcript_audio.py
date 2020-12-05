import logging

from service.upload_service import handle_file_upload, delete_file
from service.google_speech_to_text import speech_to_text, format_results

logger = logging.getLogger('[AUDIO TRANSCRIPT SERVICE]')


def handle_audio_transcription(files):
    """ handling audio transcription service """
    logger.info('handling audio transcription')
    path = handle_file_upload(files)
    transcript = speech_to_text(path)
    delete_file(path)
    return format_results(transcript)