
import ImageOne from '../assets/1 (1).jpg'
import ImageTwo from '../assets/1 (2).jpg'
import ImageThree from '../assets/1 (3).jpg'
import ImageFour from '../assets/IQF Freezers-1.jpg'
import ImageFive from '../assets/cooling-units-1.jpg'
import CardItem from "../home/CardItem"
import FeatureDisply from "../home/FeatureDisply"
import FlashPvcComp from "../home/FlashPvcComp"
import { Grid, GridItem } from "@chakra-ui/react"
import RailCards from "../home/RailCards"
import FixingsCards from "../home/FixingsCards"
import SellingProducts from "../home/SellingProducts"
import YouTube from "../home/YouTube"
import Lighting from "../home/Lighting"
import BannerHorezental from "../home/BannerHorezental"
import Footer from "../home/Footer"
import ImageSlider from '../home/ImageSlider'

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
      <GridItem>
        <Lighting />
      </GridItem>
      <GridItem>
        <BannerHorezental />
      </GridItem>
      <GridItem>
        <Footer />
      </GridItem>
      
    </Grid>
  )
}

export default Home
