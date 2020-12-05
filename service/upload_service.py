import os
from werkzeug.utils import secure_filename
from flask import Flask
import logging

from utils import allowed_file

logger = logging.getLogger('[UPLOAD FILE SERVICE]')

ALLOWED_EXTENSIONS = {'wav', 'mp3'}

def handle_file_upload(files):
    """upload service"""
    logger.info('uploading file')

    try:
        # check if the post request has the file part
        assert ('file' in files), "No file part"
    
        file = files['file']
        # if user does not select file, browser also
        # submit an empty part without filename
        assert (file.filename != ''), "No selected file"

        assert (allowed_file(file.filename, ALLOWED_EXTENSIONS)), "Not allowed extention"

        filename = secure_filename(file.filename)
        path = os.path.join(os.getcwd(), 'uploads', filename)

        file.save(path)
        logger.info('file uploaded ... ✓')
        return path
    except AssertionError as err:
        logger.error('error while uploading file :', err)
        raise err

def delete_file(path):
    """delete file service"""
    try:
        logger.info('deleting file after usage')
        os.remove(path)
        logger.info('file deleted succesfully ...')
    except IOError as err:
        logger.error('error while deleting file: ', err)