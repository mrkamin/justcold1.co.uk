import { Box, Button, Flex, IconButton, Image, Text } from '@chakra-ui/react'
import ImageOne from '../assets/white aluminium steel dome.jpeg'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'

const FixingsCards = () => {
  return (
    <>
    <Flex direction="column" h={10} position="relative"  align="center" justify="center">
    <Text>MOST POPULAR ITEMS IN FIXINGS</Text>
        <Box >
            
            <IconButton position="absolute" top={0} left={0}><FaArrowLeft /></IconButton>
            <IconButton position="absolute" top={0} right={0}><FaArrowRight /></IconButton>
        </Box>
        </Flex>
    <Flex>
    <Box>
        <Image src={ImageOne} alt='ImageOne' />
        <Text>White Aluminium / Steel Dome</Text>
        <Text>Head 4.0 x 12mm Rivets</Text>
        <Text>£8.50 - £16.50 + VAT</Text>
    </Box>
    <Box>
        <Image src={ImageOne} alt='ImageOne' />
        <Text>White Aluminium / Steel Dome</Text>
        <Text>Head 4.0 x 12mm Rivets</Text>
        <Text>£8.50 - £16.50 + VAT</Text>
    </Box>
    <Box>
        <Image src={ImageOne} alt='ImageOne' />
        <Text>White Aluminium / Steel Dome</Text>
        <Text>Head 4.0 x 12mm Rivets</Text>
        <Text>£8.50 - £16.50 + VAT</Text>
    </Box>
    <Box>
        <Image src={ImageOne} alt='ImageOne' />
        <Text>White Aluminium / Steel Dome</Text>
        <Text>Head 4.0 x 12mm Rivets</Text>
        <Text>£8.50 - £16.50 + VAT</Text>
    </Box>
    <Box>
        <Image src={ImageOne} alt='ImageOne' />
        <Text>White Aluminium / Steel Dome</Text>
        <Text>Head 4.0 x 12mm Rivets</Text>
        <Text>£8.50 - £16.50 + VAT</Text>
    </Box>
    <Box>
        <Image src={ImageOne} alt='ImageOne' />
        <Text>White Aluminium / Steel Dome</Text>
        <Text>Head 4.0 x 12mm Rivets</Text>
        <Text>£8.50 - £16.50 + VAT</Text>
    </Box>
    </Flex>
    
    </>
  )
}

export default FixingsCards
