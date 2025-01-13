import { Flex, Image } from '@chakra-ui/react'
import ImageOne from './assets/banner-horizantal-copy.jpg'

const BannerHorezental = () => {
  return (
    <Flex align="center" justify="center" padding={10}>
        <Image src={ImageOne} alt='ImageOne' />
    </Flex>
  )
}

export default BannerHorezental
