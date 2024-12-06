import { Grid, GridItem, Image, Text } from "@chakra-ui/react"
import ImageOne from '../assets/1 (1).jpg'
import ImageTwo from '../assets/1 (3).jpg'

const PvcCurtains = () => {
  return (
    <div className="bgblue">
      <Text padding={5} color="#fff">Pvc Curtains</Text>
      <Grid templateColumns="repeat(1fr)" >
        <GridItem paddingBottom={5} paddingX={5} >
          <Image src={ImageOne} alt="ImageOne"  borderRadius="10px" h="300px" width={`{100}%`} />
        </GridItem>
        <GridItem paddingBottom={5} paddingX={5} >
          <Image src={ImageTwo} alt="ImageTwo"  borderRadius="10px" h="300px" width={`{100}%`}/>
        </GridItem>
      </Grid>
    </div>
  )
}

export default PvcCurtains
