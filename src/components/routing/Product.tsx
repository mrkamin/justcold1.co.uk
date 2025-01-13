import { Grid, GridItem, Text } from '@chakra-ui/react'
import Catagories from '../products/Catagories'
import Shop from '../products/Shop'

const Product = () => {
  return (
    <Grid templateColumns={'repeat(3, 1fr)'}>
      <GridItem colSpan={1}>
        <Catagories />
      </GridItem>
      <GridItem colSpan={2}>
        <Shop />
      </GridItem>
    </Grid>
  )
}

export default Product
