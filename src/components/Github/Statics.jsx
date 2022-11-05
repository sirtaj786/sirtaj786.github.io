import {
    Box,
    Center,
    Heading,
    HStack,
    SimpleGrid,
    Stack,
    Text,
    VStack,
  } from "@chakra-ui/react";
  import React from "react";
  
  const Statics = () => {
    return (
      <Stack>
        <VStack>
          <Box mt="3rem">
            <Heading
              fontWeight="semibold"
              fontFamily="body"
              fontSize="4xl"
              color="black"
            >
              Statistics
            </Heading>
            {/* <Divider
              width="5rem"
              fontWeight="bold"
              fontFamily="body"
              borderColor="blue"
              borderWidth="2px"
              ml="1.8rem"
            /> */}
          </Box>
          <HStack pt={8}>
            <Box
              border="4px solid black"
              borderRadius="2rem"
              w={[240, 650, 1140]}
              ml={[2, 1, 30]}
              pt="4rem"
              backgroundColor="rgb(16,16,26)"
              textAlign="center"
            >
              <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }}>
                <Box>
                  <VStack>
                    <Box
                      w={200}
                      h={200}
                      border="6px solid white"
                      borderRadius={"50%"}
                    >
                      <Center>
                        <Text
                          fontSize="5xl"
                          fontWeight="bold"
                          bgClip="text"
                          bgGradient="linear(to-l,#FFFFFF, #FFFFFF)"
                        //   _hover={{
                        //     bgGradient: "linear(to-r, red.500, yellow.500)",
                        //   }}
                          mt={14}
                        >
                          1200+
                        </Text>
                      </Center>
                    </Box>
                    <Box>
                      <Text
                        fontSize={30}
                        fontWeight="bold"
                        color="white"
                        // _hover={{
                        //   bgClip: "text",
                        //   bgGradient: "linear(to-r, red.500, yellow.500)",
                        // }}
                      >
                        Hours
                      </Text>
                    </Box>
                    <Box>
                      <Text fontSize={20} fontWeight="bold" color="white">
                        of Full Stack Coding
                      </Text>
                    </Box>
                  </VStack>
                </Box>
  
                <Box>
                  <VStack>
                    <Box
                      w={200}
                      h={200}
                      border="6px solid white"
                      borderRadius={"50%"}
                    >
                      <Center>
                        <Text
                          fontSize="5xl"
                          fontWeight="bold"
                          bgClip="text"
                          bgGradient="linear(to-l,#FFFFFF, #FFFFFF)"
                        //   _hover={{
                        //     bgGradient: "linear(to-r, red.500, yellow.500)",
                        //   }}
                          mt={14}
                        >
                          279+
                        </Text>
                      </Center>
                    </Box>
  
                    <Box>
                      <Text
                        fontSize={30}
                        fontWeight="bold"
                        color="white"
                        // _hover={{
                        //   bgClip: "text",
                        //   bgGradient: "linear(to-r, red.500, yellow.500)",
                        // }}
                      >
                        Git
                      </Text>
                    </Box>
  
                    <Box>
                      <Text fontSize={20} fontWeight="bold" color="white">
                        Commits
                      </Text>
                    </Box>
                  </VStack>
                </Box>
  
                <Box>
                  <VStack>
                    <Box
                      w={200}
                      h={200}
                      border="6px solid white"
                      borderRadius={"50%"}
                    >
                      <Center>
                        <Text
                          fontSize="5xl"
                          fontWeight="bold"
                          bgClip="text"
                          bgGradient="linear(to-l,#FFFFFF, #FFFFFF)"
                        //   _hover={{
                        //     bgGradient: "linear(to-r, red.500, yellow.500)",
                        //   }}
                          mt={14}
                        >
                          10+
                        </Text>
                      </Center>
                    </Box>
  
                    <Box>
                      <Text
                        fontSize={30}
                        fontWeight="bold"
                        color="white"
                        // _hover={{
                        //   bgClip: "text",
                        //   bgGradient: "linear(to-r, red.500, yellow.500)",
                        // }}
                      >
                        Projects
                      </Text>
                    </Box>
  
                    <Box>
                      <Text fontSize={20} fontWeight="bold" color="white">
                        Done
                      </Text>
                    </Box>
                  </VStack>
                </Box>
  
                <Box>
                  <VStack>
                    <Box
                      w={200}
                      h={200}
                      border="6px solid white"
                      borderRadius={"50%"}
                    >
                      <Center>
                        <Text
                          fontSize="5xl"
                          fontWeight="bold"
                          bgClip="text"
                          bgGradient="linear(to-l,#FFFFFF, #FFFFFF)"
                        //   _hover={{
                        //     bgGradient: "linear(to-r, red.500, yellow.500)",
                        //   }}
                          mt={14}
                        >
                          100+
                        </Text>
                      </Center>
                    </Box>
  
                    <Box>
                      <Text
                        fontSize={30}
                        fontWeight="bold"
                        color="white"
                        // _hover={{
                        //   bgClip: "text",
                        //   bgGradient: "linear(to-r, red.500, yellow.500)",
                        // }}
                      >
                        Hours
                      </Text>
                    </Box>
  
                    <Box>
                      <Text fontSize={20} fontWeight="bold" color="white">
                        of Soft Skills Sessions
                      </Text>
                    </Box>
                  </VStack>
                </Box>
              </SimpleGrid>
            </Box>
          </HStack>
        </VStack>
      </Stack>
    );
  };
  
  export default Statics;
  