import { Box, Flex, Grid, GridItem, Image, Text } from "@chakra-ui/react"
import ImageOne from '../assets/lighting/1.jpg'

const Lighting = () => {
  return (
    <Flex direction="column" align="center" padding={10} gap={5}>
        <Box>
            <Text>LIGHTING</Text>
        </Box>
        <Box>
            <Grid templateColumns="repeat(5, 1fr)" gap={5} padding={5}>
                <GridItem>
                    <Flex direction="column">
                        <Box>
                        <Image src={ImageOne} alt="ImageOne" />
                        </Box>
                        <Box>
                            <Text>Ansell ATORE4/1 Batten IP65</Text>
                            <Text>1200mm-20W/40W</Text>
                            <Text>£29.50 + VAT</Text>
                        </Box>
                    </Flex>
                </GridItem>
                <GridItem>
                    <Flex direction="column">
                        <Box>
                        <Image src={ImageOne} alt="ImageOne" />
                        </Box>
                        <Box>
                            <Text>Ansell ATORE4/1 Batten IP65</Text>
                            <Text>1200mm-20W/40W</Text>
                            <Text>£29.50 + VAT</Text>
                        </Box>
                    </Flex>
                </GridItem>
                <GridItem>
                    <Flex direction="column">
                        <Box>
                        <Image src={ImageOne} alt="ImageOne" />
                        </Box>
                        <Box>
                            <Text>Ansell ATORE4/1 Batten IP65</Text>
                            <Text>1200mm-20W/40W</Text>
                            <Text>£29.50 + VAT</Text>
                        </Box>
                    </Flex>
                </GridItem>
                <GridItem>
                    <Flex direction="column">
                        <Box>
                        <Image src={ImageOne} alt="ImageOne" />
                        </Box>
                        <Box>
                            <Text>Ansell ATORE4/1 Batten IP65</Text>
                            <Text>1200mm-20W/40W</Text>
                            <Text>£29.50 + VAT</Text>
                        </Box>
                    </Flex>
                </GridItem>
                <GridItem>
                    <Flex direction="column">
                        <Box>
                        <Image src={ImageOne} alt="ImageOne" />
                        </Box>
                        <Box>
                            <Text>Ansell ATORE4/1 Batten IP65</Text>
                            <Text>1200mm-20W/40W</Text>
                            <Text>£29.50 + VAT</Text>
                        </Box>
                    </Flex>
                </GridItem>
            </Grid>
        </Box>
    </Flex>
  )
}

export default Lighting
