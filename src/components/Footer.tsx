import { Box, Flex, Grid, GridItem, Text } from '@chakra-ui/react'
import FooterLeftSide from './FooterLeftSide'
import FooterRigthSide from './FooterRigthSide'

const Footer = () => {
  return (
      <>
        <Flex direction="column" bg="#090129" align="center"  gap={10}>
           <Box bg="#00ff" w={`{100}%`}> 
            <Text color="#fff">Footer</Text>
           </Box>
           <Box w={`{100}%`}>
            <Grid templateColumns="repeat(3, 1fr)" w={`{100}%`} padding={10} >
              <GridItem colSpan={1}>
                <FooterLeftSide />
              </GridItem>
              <GridItem colSpan={2}>
                <FooterRigthSide />
              </GridItem>
            </Grid>
           </Box>
          </Flex>
      </>
  )
}

export default Footer
