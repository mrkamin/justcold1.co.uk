import { Box, Flex, Grid, GridItem, HStack, Image, Text } from '@chakra-ui/react'
import FooterLeftSide from './FooterLeftSide'
import FooterRigthSide from './FooterRigthSide'
import ImageOne from '../assets/Footer/2.png'
import ImageTwo from '../assets/Footer/3.jpg'
import ImageThree from '../assets/Footer/4.jpg'
import ImageFoure from '../assets/Footer/5.jpg'

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
           <Box w={`{100}%`} >
            <Flex justify='space-around'>
            <Text color="#fff" >Copyright © JustCold ltd. All Rights Reserved.</Text>
            <Flex direction='column' >
              <HStack>
                <Image src={ImageOne} alt='Footer downside imageone' />
                <Image src={ImageTwo} alt='Footer downside ImageTwo' />
                <Image src={ImageThree} alt='Footer downside ImageThree' />
                <Image src={ImageFoure} alt='Footer downside ImageFoure' />
              </HStack>
              <Text color="#fff">Orders Over £500 to be made via BACS.</Text>
            </Flex>
            </Flex>
           </Box>
          </Flex>
      </>
  )
}

export default Footer
