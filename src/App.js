import React, { useState, useEffect } from 'react'
import { fetchData } from './utils/utils';
import DisplayContent from './components/DisplayContent/DisplayContent'
import OutputResults from './components/OutputResults/OutputResults';
import { AppBar, Toolbar, Typography, Container, Grid, Button, TextField, CssBaseline } from '@mui/material';
import { useStyles } from './styles/styles';
import { delay, outputPets } from './utils/utils';
import { useDispatch, useSelector } from 'react-redux';
import { fetch } from './features/data/dataSlice';
import { getPetAndGender } from './features/search/searchSlice';



const App = () => {
  const dispatch = useDispatch()
  const fetchedData = useSelector(state => state.data.array)

  //Below are simple states to be prop-drilled only once. As a result I decided not to use Redux Toolkit for these
  const [showSolution, setShowSolution] = useState(true)
  const [filteredData, setFilteredData] = useState('')
  const [userInputPet, setUserInputPet] = useState('')
  const [userInputGender, setUserInputGender] = useState('')
  const [showPetError, setShowPetError] = useState(false)
  const [showGenderError, setShowGenderError] = useState(false)
  const [show, setShow] = useState(true)

  const classes = useStyles()

  useEffect(() => {
    const getData = async () => {
      const data = await fetchData()
      dispatch(fetch(data))
    }

    getData()
  }, [dispatch])


  const triggerPetError = async () => {
    setShowPetError(true)
    await delay(1500)
    setShowPetError(false)
  }

  const triggerGenderError = async () => {
    setShowGenderError(true)
    await delay(1500)
    setShowGenderError(false)
  }

  const handleChange = e => {
    let val = e.target.value
    if (e.target.name === 'pet') setUserInputPet(val)
    if (e.target.name === 'gender') setUserInputGender(val)
  }


  const handleSubmit = async e => {
    e.preventDefault()

    //For validation
    const petArray = ['dog', 'cat', 'fish']
    const genderArray = ['male', 'female']

    if (!petArray.includes(userInputPet.toLowerCase())) {
      triggerPetError()
    }

    if (!genderArray.includes(userInputGender.toLowerCase())) {
      triggerGenderError()
    }

    const result = outputPets(fetchedData, userInputPet, userInputGender)
    dispatch(getPetAndGender(result))
    setShow(true)
  }




  return (
    <>
      <CssBaseline />

      <AppBar position='relative' color='error' data-testid='appBar'>
        <Toolbar>
          <Grid container className={classes.center}>
            <Grid item>
              <Typography variant='h5'>Medibank Coding Challenge</Typography>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>

      <Container className={classes.mTop}>
        <Grid container className={`${classes.center} ${classes.mBot}`} >
          <ul>
            <Typography variant='h5'>Requirements 1:</Typography>
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

            <hr className={`${classes.mTop} ${classes.mBot}`} />

            <Typography variant='h5'>Requirements 2:</Typography>
            <li>
              <Typography gutterBottom>
                Add two user inputs - Type of pet and Gender of owner.
              </Typography>
            </li>
            <li>
              <Typography gutterBottom>
                Both the fields are mandatory to do a search.
              </Typography>
            </li>
            <li>
              <Typography gutterBottom>
                Ensure you validate the input before doing the search.
              </Typography>
            </li>
            <li>
              <Typography gutterBottom>
                After entering both the fields, if the user hit Search CTA, the app should output the list of all pets of the specified type listed under the heading of the gender of their owner, which was the second input.
              </Typography>
            </li>

            <hr className={`${classes.mTop} ${classes.mBot}`} />
            
            <Typography variant='h5'>Notes:</Typography>
            <li>
              <Typography gutterBottom>
                The first button shows the original functionality (Requirements 1), you may hide it if you would like to focus on the second, newer functionality
              </Typography>
            </li>
            <li>
              <Typography gutterBottom>
                The second part (Requirements 2) shows the new functionality
              </Typography>
            </li>
          </ul>
        </Grid>

        <Grid container className={`${classes.center} ${classes.mBot}`}>
          <Button data-testid='button' variant={showSolution ? 'outlined' : 'contained'} color='error' onClick={() => setShowSolution(!showSolution)}>
            {showSolution ? 'Hide solution' : 'Show solution'}
          </Button>
        </Grid>

        <DisplayContent
          showSolution={showSolution}
          fetchedData={fetchedData}
          filteredData={filteredData}
        />

        {showSolution && (
          //Had to add an inline style because flexDirection does not work in styles.js. 
          <Grid container className={`${classes.filter} ${classes.mBot2}`} style={{ flexDirection: 'column' }} spacing={2}>
            <Grid item>
              <TextField
                label="Filter cats here"
                variant="outlined"
                color='error'
                onChange={e => setFilteredData(e.target.value)}
                value={filteredData}
                data-testid='inputField'
              />
            </Grid>
            <Grid item>
              <Button data-testid='clearFilter' variant='outlined' color='error' onClick={() => setFilteredData('')}>Clear filter</Button>
            </Grid>
          </Grid>
        )}

        <form onSubmit={handleSubmit}>
          <Grid container className={classes.search} spacing={5}>
            <Grid item>
              <TextField
                name='pet'
                label="Type (Cat/Dog/Fish)"
                variant="outlined"
                color='error'
                onChange={handleChange}
                value={userInputPet}
                title='petField'
              />
              {
                showPetError ?
                  <Typography color='error'>Please enter Cat, Dog, or Fish</Typography>
                  :
                  <Typography className={classes.invisible}>a</Typography>
              }
            </Grid>
            <Grid item>
              <TextField
                name='gender'
                label="Gender (Male/Female)"
                variant="outlined"
                color='error'
                onChange={handleChange}
                value={userInputGender}
                title='genderField'
              />
              {
                showGenderError ?
                  <Typography color='error'>Please enter Male or Female</Typography>
                  :
                  <Typography className={classes.invisible}>a</Typography>
              }
            </Grid>
          </Grid>

          <Grid container className={classes.center}>
            <Grid item>
              <Typography variant='h5'>
                {userInputPet} {'-'} {userInputGender}
              </Typography>
            </Grid>
            <OutputResults
              show={show}
            />
          </Grid>

          {/* Had to add an inline style because flexDirection does not work in styles.js */}
          <Grid container className={`${classes.filter} ${classes.mBot2}`} style={{ flexDirection: 'column' }} spacing={2}>
            <Grid item>
              <Button variant='contained' color='error' type='submit' data-testid='searchButton'>
                Search
              </Button>
            </Grid>
            <Grid item>
              <Button variant='outlined' color='error' data-testid='clearButton' onClick={e => {
                setUserInputPet('')
                setUserInputGender('')
                setShow(false)
              }}>
                Clear
              </Button>
            </Grid>
          </Grid>
        </form>



      </Container>
    </>
  )
}

export default App