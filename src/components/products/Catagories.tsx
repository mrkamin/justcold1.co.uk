import { Box, Button, Checkbox, Flex, For, HStack, MenuContent, MenuItem, MenuRoot, MenuTrigger, MenuTriggerItem, Stack, Text } from '@chakra-ui/react'

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
                    <Flex justify='space-between'>
                      <HStack>
                        <input type='checkbox' defaultChecked />
                        <Text>Accessories</Text>
                      </HStack>
                  
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
