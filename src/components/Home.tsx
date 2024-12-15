import ImageSlider from "./ImageSlider"
import ImageOne from '../assets/1 (1).jpg'
import ImageTwo from '../assets/1 (2).jpg'
import ImageThree from '../assets/1 (3).jpg'
import ImageFour from '../assets/IQF Freezers-1.jpg'
import ImageFive from '../assets/cooling-units-1.jpg'
import CardItem from "./CardItem"
import FeatureDisply from "./FeatureDisply"
import FlashPvcComp from "./FlashPvcComp"
import { Grid, GridItem } from "@chakra-ui/react"
import RailCards from "./RailCards"
import FixingsCards from "./FixingsCards"
import SellingProducts from "./SellingProducts"
import YouTube from "./YouTube"

const images = [
    ImageOne,
    ImageTwo,
    ImageThree,
    ImageFour,
    ImageFive
]

const Home = () => {
  return (
    <Grid templateColumns="repate(1fr)" h={`{100}%`}>
      <GridItem h={434}>
      <ImageSlider images={images}  />
      </GridItem>
     
      <GridItem>
      <FeatureDisply />
      </GridItem>
      
      <GridItem><CardItem /></GridItem>
      
      <GridItem><FlashPvcComp /></GridItem>
      <GridItem><RailCards /></GridItem>
      <GridItem>
        <FixingsCards />
      </GridItem>
      <GridItem>
        <SellingProducts />
      </GridItem>
      <GridItem>
        <YouTube />
      </GridItem>
      
    </Grid>
  )
}

export default Home
