import { Grid, GridItem, Image, Text } from "@chakra-ui/react"
import ImageOne from '../assets/1 (1).jpg'
import ImageTwo from '../assets/1 (2).jpg'
import ImageThree from '../assets/1 (3).jpg'
const FlashingsCard = () => {
  return (
    <div>
      <Text>MOST POPULAR ITEMS IN METAL FLASHINGS</Text>
      <Grid templateColumns="repeat(3, 1fr)" gap={3} paddingTop={5}>
        <GridItem>
          <Image src={ImageOne} alt="ImageOne" borderRadius={5}  h={`{100}%`}/>
        </GridItem>
        <GridItem>
          <Image src={ImageTwo} alt="ImageTwo" borderRadius={5}  h={`{100}%`}/>
        </GridItem>
        <GridItem>
          <Image src={ImageThree} alt="ImageThree" borderRadius={5}  h={`{100}%`}/>
        </GridItem>
        <GridItem>
          <Image src={ImageOne} alt="ImageOne" borderRadius={5} h={`{100}%`}/>
        </GridItem>
        <GridItem>
          <Image src={ImageTwo} alt="ImageTwo" borderRadius={5} h={`{100}%`}/>
        </GridItem>
        <GridItem>
          <Image src={ImageThree} alt="ImageThree" borderRadius={5} h={`{100}%`}/>
        </GridItem>
      </Grid>
    </div>
  )
}

export default FlashingsCard
