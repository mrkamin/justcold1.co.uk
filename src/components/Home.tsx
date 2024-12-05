import ImageSlider from "./ImageSlider"
import ImageOne from '../assets/1 (1).jpg'
import ImageTwo from '../assets/1 (2).jpg'
import ImageThree from '../assets/1 (3).jpg'
import ImageFour from '../assets/IQF Freezers-1.jpg'
import ImageFive from '../assets/cooling-units-1.jpg'
import CardItem from "./CardItem"
import FeatureDisply from "./FeatureDisply"
import FlashPvcComp from "./FlashPvcComp"

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
      <ImageSlider images={images}  />
      <FeatureDisply />
      <CardItem />
      <FlashPvcComp />
    </>
  )
}

export default Home
