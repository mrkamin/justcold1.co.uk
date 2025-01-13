
import { Box, Flex, HStack, IconButton, Text } from '@chakra-ui/react'
import { FaFacebookF } from 'react-icons/fa'
import { IoLogoTwitter } from 'react-icons/io'
import { TiSocialInstagram, TiSocialYoutubeCircular } from 'react-icons/ti'


const FooterLeftSide = () => {
  return (
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
  )
}

export default FooterLeftSide
