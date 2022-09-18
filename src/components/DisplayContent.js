import React from 'react'
import { Typography, Grid } from '@mui/material';
import Man2Icon from '@mui/icons-material/Man2';
import Woman2Icon from '@mui/icons-material/Woman2';

const DisplayContent = ({ filteredMaleArray, filteredFemaleArray, showSolution }) => {

    //Turn the array into a JSX element, so that we can render 
    const displayMaleCats = filteredMaleArray.map(cat => (
        <li key={cat}>{cat}</li>
    ))

    const displayFemaleCats = filteredFemaleArray.map(cat => (
        <li key={cat}>{cat}</li>
    ))


    return (
        <>
            {showSolution && (<>
                <Grid container justifyContent='space-around' style={{ marginTop: '25px' }}>
                    <Grid item>
                        <Typography variant='h5' align='center'>
                            Male{'  '}<Man2Icon />
                        </Typography>
                        <ul style={{ padding: 0 }}>
                            {displayMaleCats}
                        </ul>
                    </Grid>
                    <Grid item>
                        <Typography variant='h5' align='center'>
                            Female{'  '}<Woman2Icon />
                        </Typography>
                        <ul style={{ padding: 0 }}>
                            {displayFemaleCats}
                        </ul>
                    </Grid>
                </Grid>
            </>)}
        </>
    )
}

export default DisplayContent