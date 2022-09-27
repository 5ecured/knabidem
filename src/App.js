import React, { useState, useEffect } from 'react'
import { fetchData } from './utils/utils';
import DisplayContent from './components/DisplayContent'
import { AppBar, Toolbar, Typography, Container, Grid, Button, TextField, CssBaseline } from '@mui/material';
import { useStyles } from './styles/styles';

const App = () => {
  const [showSolution, setShowSolution] = useState(true)
  const [fetchedData, setFetchedData] = useState([])
  const [filteredData, setFilteredData] = useState('')

  const classes = useStyles()

  useEffect(() => {
    const getData = async () => {
      const data = await fetchData()
      setFetchedData(data)
    }

    getData()
  }, [])



  return (
    <>
      <CssBaseline />

      <AppBar position='relative' color='error'>
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

        <Grid container className={classes.center}>
          <Button variant={showSolution ? 'outlined' : 'contained'} color='error' onClick={() => setShowSolution(!showSolution)}>
            {showSolution ? 'Hide solution' : 'Show solution'}
          </Button>
        </Grid>

        <DisplayContent
          showSolution={showSolution}
          fetchedData={fetchedData}
          filteredData={filteredData}
        />

        {showSolution && (
          //Had to add 1 inline style because flexDirection does not work in styles.js. 
          <Grid container className={classes.filter} style={{flexDirection: 'column'}} spacing={2}>
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