import React from 'react'
import { Typography, Grid } from '@mui/material';
import Man2Icon from '@mui/icons-material/Man2';
import Woman2Icon from '@mui/icons-material/Woman2';
import { populateCatsBasedOnGender, createAndSortCats, filterCats } from '../utils';

const DisplayContent = ({ fetchedData, filteredData, showSolution }) => {

    //catsObjWithMaleOwner and catsObjWithFemaleOwner are now populated: [ {cat object}, {cat object}, {cat object} ]
    const catsObjWithMaleOwner = populateCatsBasedOnGender(fetchedData, 'Male')
    const catsObjWithFemaleOwner = populateCatsBasedOnGender(fetchedData, 'Female')


    //Now we get an array of cat names that have been sorted e.g. [ "Garfield", "Jim", "Max", "Tom" ]
    const catsMaleArray = createAndSortCats(catsObjWithMaleOwner)
    const catsFemaleArray = createAndSortCats(catsObjWithFemaleOwner)


    //For the filter feature to work
    const filteredMaleArray = filterCats(catsMaleArray, filteredData)
    const filteredFemaleArray = filterCats(catsFemaleArray, filteredData)


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