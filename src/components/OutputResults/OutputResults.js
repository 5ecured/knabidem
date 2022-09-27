import React from 'react'
import { useStyles } from '../../styles/styles';
import { Grid } from '@mui/material';


const OutputResults = ({ resultsArray, userInputPet, userInputGender }) => {
    const classes = useStyles()

    const display = resultsArray.map((el, i) => {
        if (!userInputPet || !userInputGender) {
            return <></>
        }
        return <li key={i}>{el}</li>
    })

    return (
        <Grid container className={classes.answer}>
            <Grid item>
                <ul className={classes.displayCats}>
                    {display}
                </ul>
            </Grid>
        </Grid>
    )
}

export default OutputResults