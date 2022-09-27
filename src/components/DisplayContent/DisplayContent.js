import React from 'react'
import { Typography, Grid } from '@mui/material';
import Man2Icon from '@mui/icons-material/Man2';
import Woman2Icon from '@mui/icons-material/Woman2';
import { populateCatsBasedOnGender, createAndSortCats, filterCats } from '../../utils/utils';
import { useStyles } from '../../styles/styles';

const DisplayContent = ({ fetchedData, filteredData, showSolution, resultsArray }) => {
    console.log(resultsArray);
    const classes = useStyles()

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
                <Grid container className={classes.answer}>
                    <Grid item>
                        <Typography variant='h5' align='center' data-testid='male'>
                            Male{'  '}<Man2Icon />
                        </Typography>
                        <ul className={classes.displayCats}>
                            {displayMaleCats}
                        </ul>
                    </Grid>
                    <Grid item>
                        <Typography variant='h5' align='center' data-testid='female'>
                            Female{'  '}<Woman2Icon />
                        </Typography>
                        <ul className={classes.displayCats}>
                            {displayFemaleCats}
                        </ul>
                    </Grid>
                </Grid>
            </>)}
        </>
    )
}

export default DisplayContent