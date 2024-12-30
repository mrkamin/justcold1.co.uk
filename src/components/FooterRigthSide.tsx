import { Box, Flex, Grid, GridItem, Image, Text } from '@chakra-ui/react'
import ImageOne from '../assets/Footer/1.png'

const FooterRigthSide = () => {
  return (
    <Grid templateColumns="repeat(4, 1fr)" gap={5}>
        <GridItem>
            <Flex direction="column" gap={6}>
                <Box>
                    <Text color="#fff">My Account</Text>
                </Box>
                <Box>
                <Text color="#fff">My Account</Text>
                <Text color="#fff">View Basket</Text>
                <Text color="#fff">My Wishlist</Text>
                <Text color="#fff">My Orders</Text>
                <Text color="#fff">Order Tracking</Text>
                </Box>
            </Flex>
        </GridItem>
        <GridItem>
            <Flex direction="column" gap={6}>
                <Box>
                    <Text color="#fff">INFORMATION</Text>
                </Box>
                <Box>
                <Text color="#fff">Term and Conditions</Text>
                <Text color="#fff">Delivery of Goods</Text>
                <Text color="#fff">Product Tags</Text>
                <Text color="#fff">Contact Us</Text>
                </Box>
            </Flex>
        </GridItem>
        <GridItem>
            <Flex direction="column" gap={6}>
                <Box>
                    <Text color="#fff">CUSTOMER SERVICES</Text>
                </Box>
                <Box>
                <Text color="#fff">Policy</Text>
                </Box>
            </Flex>
        </GridItem>
        <GridItem>
            <Image src={ImageOne} alt='footer Image one' />
        </GridItem>
    </Grid>
  )
}

export default FooterRigthSide
