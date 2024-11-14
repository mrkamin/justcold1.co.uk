import { Grid, GridItem } from '@chakra-ui/react'
import './App.css'
import NavBar from './components/NavBar'
import NavDown from './components/NavDown'

function App() {
  

  return (
      <>
      <Grid templateAreas={`"navup navup""navdown navdown""main main"`}>
        <GridItem area='navup' bg='blue.solid'><NavBar /></GridItem>
        <GridItem area='navdown' bg='gray.900'><NavDown /></GridItem>
        <GridItem area='main' bg='dodgerblue'>Main</GridItem>
      </Grid>
      </>
  )
}

export default App
