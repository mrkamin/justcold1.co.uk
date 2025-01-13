import { Box, Flex, Grid, GridItem, Image, Text } from '@chakra-ui/react'
import ImageOne from './assets/Meat Rail.png'

const SellingProducts = () => {
  return (
    <Flex direction="column"  padding={10} align="center" gap={5}>
        <Text>BEST SELLING PRODUCTS AND ACCESSORIES</Text>
        <Grid templateColumns="repeat(3, 1fr)" gap={10}>
        <GridItem>
        <Flex gap={5} align="center">
            <Image src={ImageOne} alt='ImageOne' overflow="hidden" width={`{50}%`}
            
             />
            <Box>
            <Text>Ceiling Suspension</Text>
            <Text>Aluminium T Profile</Text>
            <Text>10mm</Text>
            <Text>£103.60 + VAT</Text>
            </Box>
        </Flex>
        </GridItem>
        <GridItem>
        <Flex gap={5} align="center">
            <Image src={ImageOne} alt='ImageOne' overflow="hidden" width={`{50}%`}
            
            />
            <Box>
            <Text>Ceiling Suspension</Text>
            <Text>Aluminium T Profile</Text>
            <Text>160mm</Text>
            <Text>£103.60 + VAT</Text>
            </Box>
        </Flex>
        </GridItem>
        <GridItem>
        <Flex gap={5} align="center">
            <Image src={ImageOne} alt='ImageOne' overflow="hidden"  width={`{50}%`}/>
            <Box>
            <Text>Ceiling Suspension</Text>
            <Text>Aluminium T Profile</Text>
            <Text>160mm</Text>
            <Text>£103.60 + VAT</Text>
            </Box>
        </Flex>
        </GridItem>
       
        </Grid>
    </Flex>
  )
}

export default SellingProducts
