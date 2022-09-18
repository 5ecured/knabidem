import React, { useState, useEffect } from 'react'
import axios from 'axios'
import DisplayContent from './components/DisplayContent'
import { AppBar, Toolbar, Typography, Container, Grid, Button, TextField, CssBaseline } from '@mui/material';

const App = () => {
  const [showSolution, setShowSolution] = useState(false)
  const [fetchedData, setFetchedData] = useState([])
  const [filteredData, setFilteredData] = useState('')

  useEffect(() => {
    const fetchData = async () => {
      const URL = 'https://gist.githubusercontent.com/medibank-digital/a1fc81a93200a7b9d5f8b7eae0fac6f8/raw/de10a4fcf717e6c431e88c965072c784808fd6b2/people.json'
      const { data: result } = await axios.get(URL)

      //To filter only people who have pets, as not everyone has pets
      const peopleWithPets = result.filter(obj => obj.pets)

      setFetchedData(peopleWithPets)
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
  const catsObjWithMaleOwner = populateCatsBasedOnGender(fetchedData, 'Male')
  const catsObjWithFemaleOwner = populateCatsBasedOnGender(fetchedData, 'Female')



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



  //For the filter feature to work
  const filteredMaleArray = catsMaleArray.filter(el => (
    el.toLowerCase().includes(filteredData.toLowerCase())
  ))

  const filteredFemaleArray = catsFemaleArray.filter(el => (
    el.toLowerCase().includes(filteredData.toLowerCase())
  ))



  return (
    <>
      <CssBaseline />

      <AppBar position='relative' color='error'>
        <Toolbar>
          <Grid container justifyContent='center' alignItems='center'>
            <Grid item>
              <Typography variant='h5'>Medibank Coding Challenge</Typography>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>

      <Container style={{ marginTop: '25px' }}>
        <Grid container justifyContent='center' alignItems='center' style={{ marginBottom: '25px' }}>
          <ul>
            <li>
              <Typography gutterBottom>
                Write some code to consume the json hosted on the above web service.
              </Typography>
            </li>
            <li>
              <Typography gutterBottom>
                Output a list of all the cats in alphabetical order under a heading of the gender of their owner.
              </Typography>
            </li>
            <li>
              <Typography gutterBottom>
                Output must be presentable on a web browser.
              </Typography>
            </li>
            <li>
              <Typography gutterBottom>
                Submissions will only be accepted via GitHub or Bitbucket.
              </Typography>
            </li>
          </ul>
        </Grid>

        <Grid container justifyContent='center' alignItems='center'>
          <Button variant={showSolution ? 'outlined' : 'contained'} color='error' onClick={() => setShowSolution(!showSolution)}>
            {showSolution ? 'Hide solution' : 'Show solution'}
          </Button>
        </Grid>

        <DisplayContent
          filteredMaleArray={filteredMaleArray}
          filteredFemaleArray={filteredFemaleArray}
          showSolution={showSolution}
        />

        {showSolution && (
          <Grid container justifyContent='center' direction='column' alignItems='center' spacing={2}>
            <Grid item>
              <TextField
                label="Filter cats here"
                variant="outlined"
                color='error'
                onChange={e => setFilteredData(e.target.value)}
                value={filteredData}
              />
            </Grid>
            <Grid item>
              <Button variant='outlined' color='error' onClick={() => setFilteredData('')}>Clear filter</Button>
            </Grid>
          </Grid>
        )}
      </Container>
    </>
  )
}

export default App