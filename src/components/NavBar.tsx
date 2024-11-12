import { HStack, Text } from "@chakra-ui/react"
import { SvgLogo } from "./Svg"

const NavBar = () => {
  return (
    <div>
      <HStack>
        <SvgLogo />
        <Text>NavBar</Text>
      </HStack>
    </div>
  )
}

export default NavBar
