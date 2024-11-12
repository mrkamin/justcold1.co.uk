import { Grid, GridItem } from '@chakra-ui/react'
import './App.css'
import NavBar from './components/NavBar'

function App() {
  

  return (
      <>
      <Grid templateAreas={`"nav nav""main main"`}>
        <GridItem area='nav' bg='blue'><NavBar /></GridItem>
        <GridItem area='main' bg='dodgerblue'>Main</GridItem>
      </Grid>
      </>
  )
}

export default App
