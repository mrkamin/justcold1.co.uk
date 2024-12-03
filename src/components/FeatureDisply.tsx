import { Flex, Grid, GridItem, HStack, Icon, Text } from "@chakra-ui/react"
const FeatureDisply = () => {
  return (
    <div>
      <Flex justify="space-between" bg="blue.600" marginX={10} padding="5" borderBottomRadius={10}>
        <HStack>
          <Icon fontSize="40px" color="fg.inverted">
            <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100" fill="none">
              <path d="M30 20 L70 20 L90 40 L50 80 L10 40 Z" fill="#FFF" stroke="#FFF" stroke-width="4" />
              <text x="50%" y="45%" text-anchor="middle" font-family="Arial, sans-serif" font-size="25" fill="rgb(37, 99, 235)" font-weight="bold">
                 $
              </text>
              <path d="M50 60 L54 68 L62 68 L56 72 L58 80 L50 75 L42 80 L44 72 L38 68 L46 68 Z" fill="rgb(37, 99, 235)" />
            </svg>
          </Icon>
          <Text color="fg.inverted">COMPETITIVE PRICE</Text>
        </HStack>
        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="100" viewBox="0 0 10 378" fill="none">
          <line x1="5" y1="0" x2="5" y2="378" stroke="#FFF" stroke-width="5" />
        </svg>
        <HStack>
          <Icon fontSize="40px" color="fg.inverted">
            <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100" fill="none">
              <path d="M30 35 L70 35 L80 80 H20 Z" fill="#FFF" stroke="#FFF" stroke-width="2" />
              <path d="M40 35 Q50 20 60 35" stroke="#FFF" stroke-width="2" fill="none" />
              <path d="M40 60 L50 70 L65 50" stroke="rgb(37, 99, 235)" stroke-width="4" fill="none" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </Icon>
          <Grid>
            <Text color="fg.inverted">COLLECTION </Text>
            <Text color="fg.inverted">AVAILABLE</Text>
            <Text color="fg.inverted">FROM OUR STORE</Text>
          </Grid>
        </HStack>
        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="100" viewBox="0 0 10 378" fill="none">
          <line x1="5" y1="0" x2="5" y2="378" stroke="#FFF" stroke-width="5" />
        </svg>
        <HStack>
          <Icon fontSize="40px" color="fg.inverted">
            <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100" fill="none">
              <circle cx="50" cy="50" r="40" stroke="rgb(37, 99, 235)" stroke-width="4" fill="#E1F5FE" />
              <line x1="50" y1="50" x2="50" y2="30" stroke="rgb(37, 99, 235)" stroke-width="4" stroke-linecap="round" />
              <line x1="50" y1="50" x2="65" y2="50" stroke="rgb(37, 99, 235)" stroke-width="4" stroke-linecap="round" />
              <rect x="25" y="60" width="50" height="15" fill="#FFC107" stroke="#FF9800" stroke-width="2" />
              <rect x="60" y="50" width="20" height="10" fill="#FFC107" stroke="#FF9800" stroke-width="2" />
              <circle cx="35" cy="80" r="5" fill="rgb(37, 99, 235)" />
              <circle cx="65" cy="80" r="5" fill="rgb(37, 99, 235)" />
              <path d="M75 40 L90 50 L75 60" stroke="rgb(37, 99, 235)" stroke-width="4" fill="none" stroke-linecap="round" />
            </svg>
          </Icon>
         <Grid>
            <Text color="fg.inverted">NEXT DAY DELIVERY </Text>
            <Text color="fg.inverted">SUBJECT TO STOCK</Text>
            <Text color="fg.inverted">AVAILABILITY</Text>
          </Grid>
        </HStack>
        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="100" viewBox="0 0 10 378" fill="none">
          <line x1="5" y1="0" x2="5" y2="378" stroke="#FFF" stroke-width="5" />
        </svg>
        <HStack>
          <Icon fontSize="40px" color="fg.inverted">
          <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100" fill="none">
            <circle cx="50" cy="50" r="40" stroke="rgb(37, 99, 235)" stroke-width="4" fill="#E8F5E9" />
            <circle cx="35" cy="40" r="5" fill="rgb(37, 99, 235)" />
            <circle cx="65" cy="40" r="5" fill="rgb(37, 99, 235)" />
            <path d="M35 60 Q50 75 65 60" stroke="rgb(37, 99, 235)" stroke-width="4" fill="none" stroke-linecap="round" />
            <path d="M75 35 L85 35 L85 50 L75 50 Z" fill="#FFEB3B" stroke="#FBC02D" stroke-width="2" />
            <path d="M70 50 L75 35" stroke="#FBC02D" stroke-width="2" />
            <path d="M75 50 L70 60" stroke="#FBC02D" stroke-width="2" />
          </svg>
          </Icon>
          <Grid>
            <Text color="fg.inverted">POSETIVE RESPONSE </Text>
            <Text color="fg.inverted">ALWAYS HAPPY FEEDBACK</Text>   
          </Grid>
        </HStack>
      </Flex>
    </div>
  )
}

export default FeatureDisply
