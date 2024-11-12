import { Grid, GridItem } from '@chakra-ui/react'
import './App.css'

function App() {
  

  return (
      <>
      <Grid templateAreas={`"nav nav""main main"`}>
        <GridItem area='nav' bg='coral'>Nav</GridItem>
        <GridItem area='main' bg='dodgerblue'>Main</GridItem>
      </Grid>
      </>
  )
}

export default App
