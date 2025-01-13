import { Image } from "@chakra-ui/react"
import CardImage from '../assets/1 (1).jpg'
import CardImageOne from '../assets/1 (2).jpg'
import CardImageTwo from '../assets/1 (3).jpg'
import CardImageThree from '../assets/1 (1).jpg'
import CardImageFour from '../assets/1 (2).jpg'
import CardImageFive from '../assets/1 (3).jpg'

const CardItem = () => {
  return (
    <div className="grid">
      <div className="gridItems flex">
        <div className="gridItems-one flex" >
          <div>
            <h1>INSULATED</h1>
            <h1>PANELS</h1>
          </div>
          <div className="flex">
            <p>Ordernow  </p>
            <p>{` >`}</p>
          </div>
        </div>
        <div className="gridItems-two">
          <Image src={CardImageOne} alt={'image'} height={200} width={`{75}%`} />
        </div>
      </div>
      <div className="gridItems flex">
        <div className="gridItems-one flex" >
          <div>
            <h1>COLD ROOM</h1>
            <h1>HINGED DOOR</h1>
          </div>
          <div className="flex">
            <p>Ordernow  </p>
            <p>{` >`}</p>
          </div>
        </div>
        <div className="gridItems-two">
          
          <Image src={CardImage} alt={'image'} height={200} width={`{75}%`} />
        </div>
      </div>
      <div className="gridItems flex">
        <div className="gridItems-one flex" >
          <div>
            <h1>TRIMS &</h1>
            <h1>FLASHINGS</h1>
          </div>
          <div className="flex">
            <p>Ordernow  </p>
            <p>{` >`}</p>
          </div>
        </div>
        <div className="gridItems-two">
          
          <Image src={CardImageFour} alt={'image'} height={200} width={`{75}%`} />
        </div>
      </div>
      <div className="gridItems flex">
        <div className="gridItems-one flex" >
          <div>
            <h1>PVC</h1>
            <h1>FLASHINGS</h1>
          </div>
          <div className="flex">
            <p>Ordernow  </p>
            <p>{` >`}</p>
          </div>
        </div>
        <div className="gridItems-two">
          
          <Image src={CardImageTwo} alt={'image'} height={200} width={`{75}%`} />
        </div>
      </div>
      <div className="gridItems flex">
        <div className="gridItems-one flex" >
          <div>
            <h1>COLD ROOM</h1>
            <h1>SLIDING DOOR</h1>
          </div>
          <div className="flex">
            <p>Ordernow  </p>
            <p>{` >`}</p>
          </div>
        </div>
        <div className="gridItems-two">
          
          <Image src={CardImageThree} alt={'image'} height={200} width={`{75}%`} />
        </div>
      </div>
      <div className="gridItems flex">
        <div className="gridItems-one flex" >
          <div>
            <h1>MEAT RAIL</h1>
          </div>
          <div className="flex">
            <p>Ordernow  </p>
            <p>{` >`}</p>
          </div>
        </div>
        <div className="gridItems-two">
          
          <Image src={CardImageFive} alt={'image'} height={200} width={`{75}%`} />
        </div>
      </div>
    </div> 
  )
}

export default CardItem
