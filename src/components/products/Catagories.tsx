import { Box, Button, Flex, HStack, Menu, MenuContent, MenuItem, MenuRoot, MenuTrigger, Text } from '@chakra-ui/react'
import { BiChevronDown, BiChevronRight } from 'react-icons/bi'

const Catagories = () => {
  return (
    <Flex direction='column'>
      <Box>
        <Flex direction='column'>
          <Box>
            <Flex direction='column'>
              <Box>
              <Text>CATEGORIES</Text>
              </Box>
              <Box>
                <Flex direction='column'>
                  <Box>
                    <Flex justify='space-between' >
                      <HStack>
                        <input type='checkbox'  />
                        <Text>Accessories</Text>
                      </HStack>
                      <Box position='relative'>
                      <MenuRoot>
                      
                        <Flex direction='column'>
                        <MenuTrigger asChild >         
                          <BiChevronDown />                       
                        </MenuTrigger>
                        <MenuContent position='absolute' zIndex='1' top='100%' left='0'  >
                          <MenuItem value='new'>Option 1</MenuItem>
                          <MenuItem value='newt'>Option 2</MenuItem>
                        </MenuContent>
                        </Flex>
                        
                      </MenuRoot>
                      </Box>
                      
                    </Flex>
                  </Box>
                  <Box>
                    <Flex justify='space-between'>
                      <HStack>
                        <input type='checkbox'  />
                        <Text>Accessories</Text>
                      </HStack>
                      <MenuRoot>
                        <Flex direction='column'>
                        <MenuTrigger asChild >         
                          <BiChevronDown />                       
                        </MenuTrigger>
                        <MenuContent>
                          <MenuItem value='new'>Option 1</MenuItem>
                          <MenuItem value='newt'>Option 2</MenuItem>
                        </MenuContent>
                        </Flex>
                      </MenuRoot>
                    </Flex>
                  </Box>
                  
                </Flex>
              </Box>
            </Flex>
            
          </Box>
          <Box>
            
          </Box>
        </Flex>
      </Box>
      <Box>
        <Text>Box TWO</Text>
      </Box>
      <Box>
        <Text>Box Three</Text>
      </Box>
    </Flex>
  )
}

export default Catagories
