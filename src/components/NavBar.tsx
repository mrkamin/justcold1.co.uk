import { Button, Grid, GridItem, HStack, IconButton, Input, Text } from "@chakra-ui/react"
import { SvgLogo } from "./Svg"
import { LuSearch } from "react-icons/lu"

const NavBar = () => {
  return (
    <div>
      <HStack>
        <SvgLogo />
        <Grid>
          <GridItem>
            <HStack>
              <Text color="fg.inverted">HOME</Text>
              <Text color="fg.inverted">PRODUCTS</Text>
              <Text color="fg.inverted">GUIDE</Text>
              <Text color="fg.inverted">CONTACTUS</Text>
            </HStack>
          </GridItem>
          <GridItem>
            <HStack>
              <Button>REQUEST A QUOTE</Button>
            </HStack>
          </GridItem>
        </Grid>
        
        <HStack>
          <Input placeholder="I am seraching for" bg="fg.inverted"/>
          <IconButton aria-label="Search database">
            <LuSearch />
          </IconButton>
        </HStack>
      </HStack>
    </div>
  )
}

export default NavBar
