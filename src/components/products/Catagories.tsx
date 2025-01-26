import { Box, Button, Flex, Grid, GridItem, HStack,  MenuContent, MenuRoot, MenuTrigger, Text } from '@chakra-ui/react'
import { BiChevronDown } from 'react-icons/bi';

const Catagories = () => {
  return (
    <Flex direction='column'  >
      <Box divideX='20px' borderWidth={1} padding={5} borderRadius={5} >
        <Flex direction='column' gap={5}>
          <Box>
            <Flex direction='column' gap={2}>
              <Box>
                <Text>CATEGORIES</Text>
              </Box>
              <Box>
                <Flex direction='column' gap={2}>
                  <Box >
                    <Grid templateColumns={'repeat(3, 1fr)'}>
                      <GridItem colSpan={2}>
                       <HStack>
                        <input type='checkbox' />
                        <Text>Accessories</Text>
                       </HStack>
                      </GridItem>
                      <GridItem colSpan={1} >
                        <Box >
                         <MenuRoot >
                           <Flex direction='column' align='end' >
                             <MenuTrigger asChild >         
                              <BiChevronDown />                       
                             </MenuTrigger>
                             <MenuContent position='relative' left={0} top={2} w={`{300}%`}>
                               <HStack>
                                 <input type='checkbox' />
                                 <Text>Ceiling Suspension</Text>
                               </HStack>
                               <HStack>
                                 <input type='checkbox' />
                                 <Text>Floor Mounting Blo...</Text>
                               </HStack>
                               <HStack>
                                 <input type='checkbox' />
                                 <Text>Pressure Relief Val...</Text>
                               </HStack>
                               <HStack>
                                 <input type='checkbox' />
                                 <Text>PVC SKirting</Text>
                               </HStack>
                             </MenuContent>
                           </Flex>  
                         </MenuRoot>
                       </Box>
                      </GridItem>
                    </Grid> 
                  </Box>
                  <Box >
                    <Grid templateColumns={'repeat(3, 1fr)'}>
                      <GridItem colSpan={2}>
                       <HStack>
                        <input type='checkbox' />
                        <Text>Channel Arm and Brac.....</Text>
                       </HStack>
                      </GridItem>
                    </Grid>
                  </Box>
                  <Box >  
                    <Grid templateColumns={'repeat(3, 1fr)'}>
                      <GridItem colSpan={2}>
                        <HStack>
                          <input type='checkbox' />
                          <Text>Checker Plates</Text>
                        </HStack>
                      </GridItem>
                      <GridItem colSpan={1} >
                        <Box >
                          <MenuRoot >
                            <Flex direction='column' align='end' >
                              <MenuTrigger asChild >         
                                <BiChevronDown />                       
                              </MenuTrigger>
                              <MenuContent position='relative' left={0} top={2} w={`{300}%`}>
                                <HStack>
                                  <input type='checkbox' />
                                  <Text>Checker Plate</Text>
                                </HStack>
                                <HStack>
                                  <input type='checkbox' />
                                  <Text>Checker Plate Angles</Text>
                                </HStack>
                                <HStack>
                                  <input type='checkbox' />
                                  <Text>Checker Plate U-Pr...</Text>
                                </HStack>
                                <HStack>
                                  <input type='checkbox' />
                                  <Text>Checker Plate Wall...</Text>
                                </HStack>
                              </MenuContent>
                            </Flex>
                          </MenuRoot>
                        </Box>
                      </GridItem>
                    </Grid>
                  </Box>
                  <Box >
                    <Grid templateColumns={'repeat(3, 1fr)'}>
                      <GridItem colSpan={2}>
                        <HStack>
                          <input type='checkbox' />
                          <Text>cold Room Hinged Do...</Text>
                        </HStack>
                      </GridItem>
                      <GridItem colSpan={1} >
                        <Box >
                          <MenuRoot >
                            <Flex direction='column' align='end' >
                              <MenuTrigger asChild >         
                                <BiChevronDown />                       
                              </MenuTrigger>
                              <MenuContent position='relative' left={0} top={2} w={`{300}%`}>
                                <HStack>
                                  <input type='checkbox' />
                                  <Text>Chiller Hinged Doors</Text>
                                </HStack>
                                <HStack>
                                  <input type='checkbox' />
                                  <Text>Freezer Hinged Do...</Text>
                                </HStack>
                              </MenuContent>
                            </Flex>
                          </MenuRoot>
                        </Box>
                      </GridItem>
                    </Grid> 
                  </Box>
                  <Box >     
                    <Grid templateColumns={'repeat(3, 1fr)'}>
                      <GridItem colSpan={2}>
                        <HStack>
                          <input type='checkbox' />
                          <Text>Cold Room Sliding Door</Text>
                        </HStack>
                      </GridItem>
                      <GridItem colSpan={1} >
                        <Box >
                          <MenuRoot >
                            <Flex direction='column' align='end' >
                              <MenuTrigger asChild >         
                                <BiChevronDown />                       
                             </MenuTrigger>
                             <MenuContent position='relative' left={0} top={2} w={`{300}%`}>
                               <HStack>
                                <input type='checkbox' />
                                <Text>Chiller Sliding Door</Text>
                               </HStack>
                               <HStack>
                                <input type='checkbox' />
                                <Text>Freezer Sliding Door</Text>
                               </HStack>
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
          <hr />
          <Box>
            <Flex direction='column' gap={5}>
              <Text>PRICE</Text>
              <Button></Button>
              <Text>Price: £0-£2,200</Text>
              <Button>Filter</Button>
            </Flex>
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
