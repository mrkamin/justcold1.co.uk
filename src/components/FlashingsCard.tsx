import { Flex, Grid, GridItem, Image, Text } from "@chakra-ui/react"
import ImageOne from '../assets/1 (1).jpg'
import ImageTwo from '../assets/1 (2).jpg'
import ImageThree from '../assets/1 (3).jpg'
const FlashingsCard = () => {
  return (
    <div>
      <Text>MOST POPULAR ITEMS IN METAL FLASHINGS</Text>
      <Grid templateColumns="repeat(3, 1fr)" gap={3} paddingTop={5}>
        <GridItem>
          <Flex direction="column">
          <Image src={ImageOne} alt="ImageOne" borderRadius={5} h={250} />
          <Text>External Chequer Plate Angles</Text>
          <Text>25mm x 25mm</Text>
          <Text>£6.50 - £9.50 + VAT</Text>
          </Flex>
        </GridItem>
        <GridItem>
          <Flex direction="column">
          <Image src={ImageTwo} alt="ImageOne" borderRadius={5} h={250} />
          <Text>External Chequer Plate Angles</Text>
          <Text>25mm x 25mm</Text>
          <Text>£6.50 - £9.50 + VAT</Text>
          </Flex>
        </GridItem>
        <GridItem>
          <Flex direction="column">
          <Image src={ImageThree} alt="ImageOne" borderRadius={5} h={250} />
          <Text>External Chequer Plate Angles</Text>
          <Text>25mm x 25mm</Text>
          <Text>£6.50 - £9.50 + VAT</Text>
          </Flex>
        </GridItem>
        <GridItem>
          <Flex direction="column">
          <Image src={ImageOne} alt="ImageOne" borderRadius={5} h={250} />
          <Text>External Chequer Plate Angles</Text>
          <Text>25mm x 25mm</Text>
          <Text>£6.50 - £9.50 + VAT</Text>
          </Flex>
        </GridItem>
        <GridItem>
          <Flex direction="column">
          <Image src={ImageTwo} alt="ImageOne" borderRadius={5} h={250} />
          <Text>External Chequer Plate Angles</Text>
          <Text>25mm x 25mm</Text>
          <Text>£6.50 - £9.50 + VAT</Text>
          </Flex>
        </GridItem>
        <GridItem>
          <Flex direction="column">
          <Image src={ImageThree} alt="ImageOne" borderRadius={5}h={250}  />
          <Text>External Chequer Plate Angles</Text>
          <Text>25mm x 25mm</Text>
          <Text>£6.50 - £9.50 + VAT</Text>
          </Flex>
        </GridItem>
      </Grid>
    </div>
  )
}

export default FlashingsCard
