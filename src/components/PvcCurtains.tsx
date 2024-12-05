import { Grid, GridItem, Image, Text } from "@chakra-ui/react"
import ImageOne from '../assets/1 (1).jpg'

const PvcCurtains = () => {
  return (
    <div className="bgblue">
      <Text padding={5} color="#fff">Pvc Curtains</Text>
      <Grid templateColumns="repeat(1fr)" >
        <GridItem paddingBottom={5} paddingX={5} >
          <Image src={ImageOne} alt="ImageOne"  borderRadius="10px" />
        </GridItem>
        <GridItem paddingBottom={5} paddingX={5}>
          <Image src={ImageOne} alt="ImageOne" borderRadius="10px" />
        </GridItem>
      </Grid>
    </div>
  )
}

export default PvcCurtains
