
import ImageSlider from "./ImageSlider"
import ImageOne from '../assets/1 (1).jpg'
import ImageTwo from '../assets/1 (2).jpg'
import ImageThree from '../assets/1 (3).jpg'
import ImageFour from '../assets/IQF Freezers-1.jpg'
import ImageFive from '../assets/cooling-units-1.jpg'

const images = [
    ImageOne,
    ImageTwo,
    ImageThree,
    ImageFour,
    ImageFive
]

const Home = () => {
  return (
    <div >
      
        <ImageSlider images={images} />
      
    </div>
  )
}

export default Home
