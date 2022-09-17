import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Typography, Grid } from '@mui/material';
import Man2Icon from '@mui/icons-material/Man2';
import Woman2Icon from '@mui/icons-material/Woman2';

const DisplayContent = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const URL = 'https://gist.githubusercontent.com/medibank-digital/a1fc81a93200a7b9d5f8b7eae0fac6f8/raw/de10a4fcf717e6c431e88c965072c784808fd6b2/people.json'
            const { data: result } = await axios.get(URL)

            //To filter only people who have pets, as not everyone has pets
            const peopleWithPets = result.filter(obj => obj.pets)

            setData(peopleWithPets)
        }

        fetchData()
    }, [])


    //As per the challenge requirement - to list sorted cat names under the gender of their owner
    const populateCatsBasedOnGender = (array, gender) => {
        let temp = []

        const genderArray = array.filter(el => el.gender === gender)

        genderArray.forEach(el => {
            el.pets.forEach(pet => {
                if (pet.type === 'Cat') temp.push(pet)
            })
        })

        return temp
    }


    //catsObjWithMaleOwner and catsObjWithFemaleOwner are now populated: [ {cat object}, {cat object}, {cat object} ]
    const catsObjWithMaleOwner = populateCatsBasedOnGender(data, 'Male')
    const catsObjWithFemaleOwner = populateCatsBasedOnGender(data, 'Female')

    //To produce an array of cat string names and sort them alphabetically 
    const createAndSortCats = arr => {
        let tempArray = []
        arr.forEach(el => {
            tempArray.push(el.name)
        })
        return tempArray.sort()
    }

    //Now we get an array of cat names that have been sorted e.g. [ "Garfield", "Jim", "Max", "Tom" ]
    const catsMaleArray = createAndSortCats(catsObjWithMaleOwner)
    const catsFemaleArray = createAndSortCats(catsObjWithFemaleOwner)

    //Turn the array into a JSX element, so that we can render 
    const displayMaleCats = catsMaleArray.map(cat => (
        <li key={cat}>{cat}</li>
    ))

    const displayFemaleCats = catsFemaleArray.map(cat => (
        <li key={cat}>{cat}</li>
    ))

    return (
        <Grid container justifyContent='space-around' style={{ marginTop: '25px' }}>
            <Grid item>
                <Typography variant='h5' align='center'>
                    Male{'  '}<Man2Icon />
                </Typography>
                <ul style={{ padding: 0 }}>{displayMaleCats}</ul>
            </Grid>
            <Grid item>
                <Typography variant='h5' align='center'>
                    Female{'  '}<Woman2Icon />
                </Typography>
                <ul style={{ padding: 0 }}>{displayFemaleCats}</ul>
            </Grid>
        </Grid>
    )
}

export default DisplayContent