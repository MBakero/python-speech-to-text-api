from flask import Flask, request, jsonify, Response
from flask_cors import cross_origin, CORS
import logging

from service.transcript_audio import handle_audio_transcription 

app = Flask(__name__)
CORS(app)

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger('[EXPOSING CONTROLLER]')

@app.route('/')
def health_check():
    return  jsonify(message='Backend is running good ...!')

@app.route('/audio/transcript', methods=['POST'])
def interceptAudioTranscriptionCommand():
    """ intercept a POST command request & redirect to the handler """
    try:
        logger.info('audio transcription command intercepted')
        transcript = handle_audio_transcription(request.files)
        return Response(transcript, status=200, mimetype='application/json')
    except AssertionError as err:
        return Response(str(err), status=400, mimetype='application/json')
    except IOError as err:
        return Response(str(err), status=503, mimetype='application/json')
    except Exception as err:
        return Response(str(err), status=500, mimetype='application/json')


