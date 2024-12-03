import { Image } from "@chakra-ui/react"
import CardImage from '../assets/1 (1).jpg'

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
          <Image src={CardImage} alt={'image'} height={200} width={1000} objectFit="cover" />
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
          
          <Image src={CardImage} alt={'image'} height={200} width={1000} objectFit="cover" />
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
          
          <Image src={CardImage} alt={'image'} height={200} width={1000} objectFit="cover" />
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
          
          <Image src={CardImage} alt={'image'} height={200} width={1000} objectFit="cover" />
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
          
          <Image src={CardImage} alt={'image'} height={200} width={1000} objectFit="cover" />
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
          
          <Image src={CardImage} alt={'image'} height={200} width={1000} objectFit="cover" />
        </div>
      </div>
    </div> 
  )
}

export default CardItem
