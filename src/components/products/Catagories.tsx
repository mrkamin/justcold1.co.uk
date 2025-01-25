import { Box, Flex, Grid, GridItem, HStack,  MenuContent, MenuItem, MenuRoot, MenuTrigger, Text } from '@chakra-ui/react'
import { BiChevronDown } from 'react-icons/bi'

const Catagories = () => {
  return (
    <Flex direction='column'  >
      <Box borderWidth={1} padding={5} borderRadius={5} bg='ButtonFace'>
        <Flex direction='column'>
          <Box>
            <Flex direction='column' gap={2}>
              <Box>
              <Text>CATEGORIES</Text>
              </Box>
              <Box>
                <Flex direction='column' gap={2}>
                  <Box >
                    
                    <Grid templateColumns={'repeat(2, 1fr)'}>
                      <GridItem >
                      <HStack>
                        <input type='checkbox' />
                        <Text>Accessories</Text>
                      </HStack>
                      </GridItem>
                      <GridItem  >
                      <Box >
                      <MenuRoot >
                      
                        <Flex direction='column' align='end' >
                        <MenuTrigger asChild >         
                          <BiChevronDown />                       
                        </MenuTrigger>
                        <MenuContent position='relative' left={0} top={2} w={`{200}%`}>
                          <MenuItem value='new'>Option 1</MenuItem>
                          <MenuItem value='newt'>Option 2</MenuItem>
                        </MenuContent>
                        </Flex>
                        
                      </MenuRoot>
                      </Box>
                      </GridItem>
                    </Grid>
                    
                  </Box>
                  <Box >
                    
                    <Grid templateColumns={'repeat(2, 1fr)'}>
                      <GridItem >
                      <HStack>
                        <input type='checkbox' />
                        <Text>Accessories</Text>
                      </HStack>
                      </GridItem>
                      <GridItem  >
                      <Box >
                      <MenuRoot >
                      
                        <Flex direction='column' align='end' >
                        <MenuTrigger asChild >         
                          <BiChevronDown />                       
                        </MenuTrigger>
                        <MenuContent position='relative' left={0} top={2} w={`{200}%`}>
                          <MenuItem value='new'>Option 1</MenuItem>
                          <MenuItem value='newt'>Option 2</MenuItem>
                        </MenuContent>
                        </Flex>
                        
                      </MenuRoot>
                      </Box>
                      </GridItem>
                    </Grid>
                    
                  </Box>
                  <Box >
                    
                    <Grid templateColumns={'repeat(2, 1fr)'}>
                      <GridItem >
                      <HStack>
                        <input type='checkbox' />
                        <Text>Accessories</Text>
                      </HStack>
                      </GridItem>
                      <GridItem  >
                      <Box >
                      <MenuRoot >
                      
                        <Flex direction='column' align='end' >
                        <MenuTrigger asChild >         
                          <BiChevronDown />                       
                        </MenuTrigger>
                        <MenuContent position='relative' left={0} top={2} w={`{200}%`}>
                          <MenuItem value='new'>Option 1</MenuItem>
                          <MenuItem value='newt'>Option 2</MenuItem>
                        </MenuContent>
                        </Flex>
                        
                      </MenuRoot>
                      </Box>
                      </GridItem>
                    </Grid>
                    
                  </Box>
                  <Box >
                    
                    <Grid templateColumns={'repeat(2, 1fr)'}>
                      <GridItem >
                      <HStack>
                        <input type='checkbox' />
                        <Text>Accessories</Text>
                      </HStack>
                      </GridItem>
                      <GridItem  >
                      <Box >
                      <MenuRoot >
                      
                        <Flex direction='column' align='end' >
                        <MenuTrigger asChild >         
                          <BiChevronDown />                       
                        </MenuTrigger>
                        <MenuContent position='relative' left={0} top={2} w={`{200}%`}>
                          <MenuItem value='new'>Option 1</MenuItem>
                          <MenuItem value='newt'>Option 2</MenuItem>
                        </MenuContent>
                        </Flex>
                        
                      </MenuRoot>
                      </Box>
                      </GridItem>
                    </Grid>
                    
                  </Box>
                  <Box >
                    
                    <Grid templateColumns={'repeat(2, 1fr)'}>
                      <GridItem >
                      <HStack>
                        <input type='checkbox' />
                        <Text>Accessories</Text>
                      </HStack>
                      </GridItem>
                      <GridItem  >
                      <Box >
                      <MenuRoot >
                      
                        <Flex direction='column' align='end' >
                        <MenuTrigger asChild >         
                          <BiChevronDown />                       
                        </MenuTrigger>
                        <MenuContent position='relative' left={0} top={2} w={`{200}%`}>
                          <MenuItem value='new'>Option 1</MenuItem>
                          <MenuItem value='newt'>Option 2</MenuItem>
                        </MenuContent>
                        </Flex>
                        
                      </MenuRoot>
                      </Box>
                      </GridItem>
                    </Grid>
                    
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
