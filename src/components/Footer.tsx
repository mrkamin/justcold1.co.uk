import { Box, Flex, Grid, GridItem, Text } from '@chakra-ui/react'

const Footer = () => {
  return (
      <>
          <Flex direction="column" bg="#090129" align="center"  gap={10}>
            
              <Text color="#fff">Footer</Text>
           
            <Grid templateColumns="repeat(3, 1fr)" w={`{100}%`} padding={10} >
              <GridItem colSpan={1} >
            
              <Text color="#fff">Footer</Text>
            
            </GridItem>
            <GridItem colSpan={2} bg="#ff0">
            
              <Text color="#fff">Footer</Text>
           
            </GridItem>
            </Grid>
          </Flex>
      </>
  )
}

export default Footer
