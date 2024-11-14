import { Button, Flex, Grid, GridItem, HStack, IconButton, Input, Text } from "@chakra-ui/react"
import { SvgLogo } from "./Svg"
import { LuSearch } from "react-icons/lu"

const NavBar = () => {
  return (
    <div>
       <Flex gap="4" justify="space-between" padding='2'>
          <SvgLogo />
          <HStack gap='10'>
           <Grid >
              <GridItem>
                <HStack padding='10px' gap='10'>
                  <Text color="fg.inverted">HOME</Text>
                  <Text color="fg.inverted">PRODUCTS</Text>
                  <Text color="fg.inverted">GUIDE</Text>
                  <Text color="fg.inverted">CONTACTUS</Text>
                </HStack>
              </GridItem>
              <GridItem>
                <Button>REQUEST A QUOTE</Button>
              </GridItem>
           </Grid>
          <HStack gap='0'>
            <Input placeholder="I am seraching for" bg="fg.inverted" roundedRight={0}  />
            <IconButton aria-label="Search database" roundedLeft={0}>
              <LuSearch />
            </IconButton>
          </HStack>
          </HStack>
        </Flex>
    </div>
  )
}

export default NavBar
