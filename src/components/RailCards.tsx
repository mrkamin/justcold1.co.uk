import { Button, Flex, Grid, GridItem, Image, Text } from "@chakra-ui/react"
import ImageOne from '../assets/1 (1).jpg'

const RailCards = () => {
  return (
    <Grid templateColumns="repeat(3, 1fr)" gap={5} padding={5}>
        <GridItem>
            <Image src={ImageOne} alt="ImageOne" />
            <Text>Meat Rail</Text>
            <Button bg={"rgb(37, 99, 235)"}>Order now</Button>
        </GridItem>
        <GridItem position={"relative"}>
            <Image src={ImageOne} alt="ImageOne" />
            <Flex position={"absolute"} top={50} direction="column" left={10} bg={"rgba(255, 255, 255, 0.479)"} width={"100%"}>
            <Text >Meat Rail</Text>
            <Button bg={"rgb(37, 99, 235)"}>Order now</Button>
            </Flex>
        </GridItem>
        <GridItem>
            <Image src={ImageOne} alt="ImageOne" />
            <Text>Meat Rail</Text>
            <Button bg={"rgb(37, 99, 235)"}>Order now</Button>
        </GridItem>
    </Grid>
  )
}

export default RailCards
