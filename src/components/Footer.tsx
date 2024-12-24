import { Box, Flex, Grid, GridItem, HStack, IconButton, Text } from '@chakra-ui/react'
import { FaFacebookF } from 'react-icons/fa'
import { IoLogoTwitter } from 'react-icons/io'
import { TiSocialInstagram, TiSocialYoutubeCircular } from 'react-icons/ti'

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
                <Flex direction="column" gap={6}>
                  <Text color="#fff">Footer</Text>
                  <Box>
                    <Text color="#fff">Address</Text>
                    <Text color="#fff">JUSTCOLD Unit B 11 <br></br>
                      Troonway Business Centre <br></br>
                      Humberstone Lane <br></br>
                      Leicester LE4 9HA 
                    </Text>
                  </Box>
                  <Box>
                    <Text color="#fff">PHONE</Text>
                    <Text color="#fff">+44 7891673331</Text>
                  </Box>
                  <Box>
                    <Text color="#fff">EMAIL</Text>
                    <Text color="#fff">info@justcold.co.uk</Text>
                  </Box>
                  <Box>
                    <HStack gap='2'>
                      <IconButton aria-label="Search database" roundedLeft={0}>
                        <FaFacebookF />
                      </IconButton>
                      <IconButton aria-label="Search database" roundedLeft={0}>
                        <TiSocialYoutubeCircular />                             
                      </IconButton>
                      <IconButton aria-label="Search database" roundedLeft={0}>
                        <TiSocialInstagram />                             
                      </IconButton>
                      <IconButton aria-label="Search database" roundedLeft={0}>
                        <IoLogoTwitter />
                      </IconButton>  
                    </HStack>
                  </Box>
                </Flex>
              </GridItem>
              <GridItem colSpan={2} bg="#ff0">
                <Text color="#fff">Footer</Text>
              </GridItem>
            </Grid>
           </Box>
          </Flex>
      </>
  )
}

export default Footer
