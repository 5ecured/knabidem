import React from 'react'
import DisplayContent from './components/DisplayContent'
import CssBaseline from '@mui/material/CssBaseline';
import { AppBar, Toolbar, Typography, Container } from '@mui/material';
import { Button } from '@mui/material'
import Grid from '@mui/material/Grid'

const App = () => {
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
            <Typography gutterBottom>
              <li>Write some code to consume the json hosted on the above web service.</li>
            </Typography>
            <Typography gutterBottom>
              <li>Output a list of all the cats in alphabetical order under a heading of the gender of their owner.</li>
            </Typography>
            <Typography gutterBottom>
              <li>Output must be presentable on a web browser.</li>
            </Typography>
            <Typography gutterBottom>
              <li>Submissions will only be accepted via GitHub or Bitbucket.</li>
            </Typography>
          </ul>
        </Grid>
        <Grid container justifyContent='center' alignItems='center'>
          <Button variant='contained' color='error'>Show solution</Button>
        </Grid>
        <DisplayContent />
      </Container>
    </>
  )
}

export default App