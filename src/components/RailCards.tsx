import { Box, Button,  Grid, GridItem, Image, Text } from "@chakra-ui/react"
import ImageOne from './assets/Meat Rail.png'
import ImageTwo from './assets/pressure-relief-valve.png'
import ImageThree from './assets/Nylon Fasteners.png'

const RailCards = () => {
  return (
    <Grid templateColumns="repeat(3, 1fr)" gap={5} padding={5}>
        <GridItem position={"relative"}>
            <Image src={ImageOne} alt="ImageOne"  />
            <Box position={"absolute"} top={99} left={50} >
            <Text >Meat Rail</Text>
            <Button bg={"rgb(37, 99, 235)"}>Order now</Button>
            </Box>
        </GridItem>
        <GridItem position={"relative"}>
            <Image src={ImageTwo} alt="ImageTwo"  />
            <Box position={"absolute"} top={99} left={50} >
            <Text >Pressure relief valves</Text>
            <Button bg={"rgb(37, 99, 235)"}>Order now</Button>
            </Box>
        </GridItem>
        <GridItem position={"relative"}>
            <Image src={ImageThree} alt="ImageThree"  />
            <Box position={"absolute"} top={99} left={50} >
            <Text >Nylon Fasteners</Text>
            <Button bg={"rgb(37, 99, 235)"}>Order now</Button>
            </Box>
        </GridItem>
    </Grid>
  )
}

export default RailCards
