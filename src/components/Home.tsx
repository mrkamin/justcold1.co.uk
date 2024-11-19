import ImageSlider from "./ImageSlider"
import ImageOne from '../assets/1 (1).jpg'
import ImageTwo from '../assets/1 (2).jpg'
import ImageThree from '../assets/1 (3).jpg'
import ImageFour from '../assets/IQF Freezers-1.jpg'
import ImageFive from '../assets/cooling-units-1.jpg'
import { Flex, Grid, HStack, Icon, Text } from "@chakra-ui/react"

const images = [
    ImageOne,
    ImageTwo,
    ImageThree,
    ImageFour,
    ImageFive
]

const Home = () => {
  return (
    <>
      <ImageSlider images={images} />
      <Flex justify="space-between" bg="blue.600" marginX={10} padding="5" borderBottomRadius={10}>
        <HStack>
          <Icon fontSize="40px" color="fg.inverted">
            <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100" fill="rgb(37, 99, 235)">
              <circle cx="50" cy="50" r="48" stroke="rgb(37, 99, 235)" stroke-width="4" fill="#E8F5E9" />
              <text x="50%" y="45%" text-anchor="middle" font-family="Arial, sans-serif" font-size="20" fill="" font-weight="bold">
                $
              </text>
              <path d="M30 60 L50 80 L70 60" stroke="rgb(37, 99, 235)" stroke-width="4" fill="none" stroke-linecap="round" />
              <line x1="50" y1="60" x2="50" y2="40" stroke="rgb(37, 99, 235)" stroke-width="4" stroke-linecap="round" />
            </
            svg>
          </Icon>
          <Text color="fg.inverted">COMPETITIVE PRICE</Text>
        </HStack>
        <HStack>
          <Icon fontSize="40px" color="fg.inverted">
            <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100" fill="none">
              <path d="M30 35 L70 35 L80 80 H20 Z" fill="#FFF" stroke="#FFF" stroke-width="2" />
              <path d="M40 35 Q50 20 60 35" stroke="#FFF" stroke-width="2" fill="none" />
              <path d="M40 60 L50 70 L65 50" stroke="rgb(37, 99, 235)" stroke-width="4" fill="none" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </Icon>
          <Grid>
            <Text color="fg.inverted">COLLECTION </Text>
            <Text color="fg.inverted">AVAILABLE</Text>
            <Text color="fg.inverted">FROM OUR STORE</Text>
          </Grid>
        </HStack>
        <HStack>
          <Icon fontSize="40px" color="fg.inverted">
            <svg viewBox="0 0 32 32">
              <g fill="currentColor">
                <path d="M16,11.5a3,3,0,1,0-3-3A3,3,0,0,0,16,11.5Z" />
                <path d="M16.868.044A8.579,8.579,0,0,0,16,0a15.99,15.99,0,0,0-.868,31.956A8.579,8.579,0,0,0,16,32,15.99,15.99,0,0,0,16.868.044ZM16,26.5a3,3,0,1,1,3-3A3,3,0,0,1,16,26.5ZM16,15A8.483,8.483,0,0,0,8.788,27.977,13.986,13.986,0,0,1,16,2a6.5,6.5,0,0,1,0,13Z" />
              </g>
            </svg>
          </Icon>
         <Grid>
            <Text color="fg.inverted">NEXT DAY DELIVERY </Text>
            <Text color="fg.inverted">SUBJECT TO STOCK</Text>
            <Text color="fg.inverted">AVAILABILITY</Text>
          </Grid>
        </HStack>
        <HStack>
          <Icon fontSize="40px" color="fg.inverted">
            <svg viewBox="0 0 32 32">
              <g fill="currentColor">
                <path d="M16,11.5a3,3,0,1,0-3-3A3,3,0,0,0,16,11.5Z" />
                <path d="M16.868.044A8.579,8.579,0,0,0,16,0a15.99,15.99,0,0,0-.868,31.956A8.579,8.579,0,0,0,16,32,15.99,15.99,0,0,0,16.868.044ZM16,26.5a3,3,0,1,1,3-3A3,3,0,0,1,16,26.5ZM16,15A8.483,8.483,0,0,0,8.788,27.977,13.986,13.986,0,0,1,16,2a6.5,6.5,0,0,1,0,13Z" />
              </g>
            </svg>
          </Icon>
          <Grid>
            <Text color="fg.inverted">POSETIVE RESPONSE </Text>
            <Text color="fg.inverted">ALWAYS HAPPY FEEDBACK</Text>   
          </Grid>
        </HStack>
      </Flex>
    </>
  )
}

export default Home
