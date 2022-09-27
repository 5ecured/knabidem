import React from 'react'
import { useStyles } from '../../styles/styles';
import { Grid, Typography } from '@mui/material';
import { useSelector } from 'react-redux';


const OutputResults = ({ show }) => {
    const resultsArray = useSelector(state => state.search.array)
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