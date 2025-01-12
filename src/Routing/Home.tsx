import ImageSlider from "../components/ImageSlider"
import ImageOne from '../assets/1 (1).jpg'
import ImageTwo from '../assets/1 (2).jpg'
import ImageThree from '../assets/1 (3).jpg'
import ImageFour from '../assets/IQF Freezers-1.jpg'
import ImageFive from '../assets/cooling-units-1.jpg'
import CardItem from "../components/CardItem"
import FeatureDisply from "../components/FeatureDisply"
import FlashPvcComp from "../components/FlashPvcComp"
import { Grid, GridItem } from "@chakra-ui/react"
import RailCards from "../components/RailCards"
import FixingsCards from "../components/FixingsCards"
import SellingProducts from "../components/SellingProducts"
import YouTube from "../components/YouTube"
import Lighting from "../components/Lighting"
import BannerHorezental from "../components/BannerHorezental"
import Footer from "../components/Footer"

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
