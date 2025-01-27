import { Grid, GridItem } from '@chakra-ui/react'
import './App.css'
import NavBar from './components/navbar/NavBar'
import NavDown from './components/navbar/NavDown'
import Home from './components/routing/Home'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Product from './components/routing/Product'
import Guide from './components/routing/Guide'
import ContactUs from './components/routing/ContactUs'
import RequestQuote from './components/routing/RequestQuote'
import Footer from './components/home/Footer'

function App() {
  

  return (
      <>
      <Router>
        
      <Grid templateAreas={`"navup navup""navdown navdown""main main" "footer footer"`}>
        <GridItem area='navup' bg='rgb(37, 99, 235)'><NavBar /></GridItem>
        <GridItem area='navdown' bg='gray.900'><NavDown /></GridItem>
        <Routes>
          <Route path='/' element={<GridItem area='main' ><Home /></GridItem>} />
          <Route path='/product' element={<GridItem area='main' ><Product /></GridItem>} />
          <Route path='/guide' element={<GridItem area='main' ><Guide /></GridItem>} />
          <Route path='/contact-us' element={<GridItem area='main' ><ContactUs /></GridItem>} />
          <Route path='/req-a-quote' element={<GridItem area='main' ><RequestQuote /></GridItem>} />
        </Routes>
        <GridItem area='footer'>
          <Footer />
        </GridItem>
      </Grid>
      </Router>
      </>
  )
}

export default App
