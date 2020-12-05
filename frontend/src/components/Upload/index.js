import { useCallback, useState } from 'react'
import isEmpty from 'lodash-es/isEmpty'
import isNil from 'lodash-es/isNil'


import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import CircularProgress from '@material-ui/core/CircularProgress';


import { useStyles } from './styles'



const supportedMemeTypes = ['audio/wav', 'audio/mpeg', 'audio/flac', 'audio/ogg', 'audio/mp4']
const Upload = ({ onUpload, disabled, loading }) => {

    const [uploadedFile, setFile] = useState({})
    const [error, setError] = useState(null)

    const handleChange = useCallback(evt => {
        const [file] = evt.target.files;
        if (isNil(file)) {
            setFile({})
            return
        }
        if (supportedMemeTypes.indexOf(file.type) === -1) {
            setError('Unsupported file type, please select one of this types : (wav, mp3, audio mp4, flac, oog, opus)')
            setFile({})
        } else {
            setFile({ filename: file.name, file });
            setError(null)
        }

    }, [])

    const handleUpload = useCallback(() => {
        const data = new FormData()
        data.append('file', uploadedFile.file)
        data.append('filename', uploadedFile.filename)
        onUpload(data)
    }, [uploadedFile, onUpload])

    const classes = useStyles()
    return (
        <Grid spacing={2} container direction="row" className={classes.root}>
            <Grid item xs={5}>
                <TextField
                    color="primary"
                    className={classes.textField}
                    name="upload-file"
                    label="Upload your file here"
                    variant="outlined"
                    InputLabelProps={{ shrink: true }}
                    type="file"
                    onChange={handleChange}
                    inputProps={{ accept: supportedMemeTypes.join(',') }}
                    error={!!error}
                    helperText={error}
                    required
                    disabled={disabled || loading}
                />
            </Grid>
            <Grid item xs={2}>
                <Button
                    className={classes.btn}
                    color="secondary"
                    variant="outlined"
                    onClick={handleUpload}
                    disabled={loading || disabled || isEmpty(uploadedFile)}
                    endIcon={loading ? <CircularProgress color="secondary" size={30} /> : null}
                >
                    Speech to Text
            </Button>
            </Grid>
        </Grid>)

}

export default Upload;
