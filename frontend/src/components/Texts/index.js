import Grid from '@material-ui/core/Grid';
import makeStyles from '@material-ui/styles/makeStyles';


export const useStyles = makeStyles(() => ({
    title: { textAlign: 'center', padding: '20px 40px', fontSize: 32 },
    root: { margin: 20 },
    text: {
        padding: 20,
        border: '1px solid',
        borderRadius: 4,
        maxHeight: '50vh',
        minHeight: '50vh',
        overflowY: 'auto',
    },
}))




const Title = ({ title }) => {

    const classes = useStyles()
    return <div className={classes.title}>{title}</div>
}

const Text = ({ text }) => {
    const classes = useStyles()
    return <Grid container spacing={2} className={classes.root}>
        <Grid item xs={7} container justify="center" alignItems="center" className={classes.text}>
        {text}
        </Grid>
    </Grid>
}

export { Title, Text }