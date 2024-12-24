import { Grid, GridItem, Text } from '@chakra-ui/react'

const FooterRigthSide = () => {
  return (
    <Grid templateColumns="repeat(4, 1fr)" gap={5}>
        <GridItem>
            <Text color="#fff">Footer</Text>
        </GridItem>
        <GridItem>
            <Text color="#fff">Footer</Text>
        </GridItem>
        <GridItem>
            <Text color="#fff">Footer</Text>
        </GridItem>
        <GridItem>
            <Text color="#fff">Footer</Text>
        </GridItem>
    </Grid>
  )
}

export default FooterRigthSide
