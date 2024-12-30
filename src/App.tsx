import { Grid, GridItem } from '@chakra-ui/react'
import './App.css'
import NavBar from './components/navbar/NavBar'
import NavDown from './components/navbar/NavDown'
import Home from './components/Home'

function App() {
  

  return (
      <>
      <Grid templateAreas={`"navup navup""navdown navdown""main main"`}>
        <GridItem area='navup' bg='rgb(37, 99, 235)'><NavBar /></GridItem>
        <GridItem area='navdown' bg='gray.900'><NavDown /></GridItem>
        <GridItem area='main' ><Home /></GridItem>
      </Grid>
      </>
  )
}

export default App
