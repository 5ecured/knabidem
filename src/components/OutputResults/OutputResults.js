import React from 'react'
import { useStyles } from '../../styles/styles';
import { Grid, Typography } from '@mui/material';


const OutputResults = ({ resultsArray, show }) => {
    const classes = useStyles()

    const display = resultsArray.map((el, i) => {
        return <li key={i}>{el}</li>
    })

    return (
        <Grid container className={classes.answer}>
            <Grid item>
                <Typography data-testid='result'>Results:</Typography>
                <ul className={classes.displayCats}>
                    {show && display}
                </ul>
            </Grid>
        </Grid>
    )
}

export default OutputResults