import { Box, Center, Image, Stack, Text, VStack } from "@chakra-ui/react";
import React from "react";
import Githubcalendar from "react-github-calendar";
export const Github = () => {
  return (
    <Stack mt={10}>
      <Center>
        <VStack>
          <Text
            fontSize="3xl"
            fontWeight="bold"
            bgClip="text"
            // bgGradient="linear(to-l,#7928CA, #FF0080)"
            color="black"
            // _hover={{
            //   bgGradient: "linear(to-r, red.500, yellow.500)",
            // }}
            align="left"
          >
            My Github Statistics
          </Text>
          <Box>
            <Center>
          <Image
                    align="center"
                    src="https://github-readme-stats.vercel.app/api/top-langs?username=sirtaj786&theme=tokyonight&show_icons=true&locale=en&layout=compact"
                    alt="sirtaj786"
                />
                </Center>
                        <Box
                style={{
                    display: "flex",
                    gap: "1rem",
                    justifyContent: "center",
                    alignItems: "center",
                    alignContent: "center",
                }}
            >
                     <div style={{ marginBottom: "1.5rem" }}>
                    <p>
                        &nbsp;
                        <img
                            align="center"
                            src="https://github-readme-stats.vercel.app/api?username=sirtaj786&theme=tokyonight&show_icons=true&locale=en"
                            alt="sirtaj786"
                        />
                    </p>
                </div>

                <div>
                    <p>
                        <img
                            align="center"
                            src="https://github-readme-streak-stats.herokuapp.com/?user=sirtaj786&theme=tokyonight"
                            alt="sirtaj786"
                        />
                    </p>
                </div>
                </Box>



             


          </Box>
          <Box
            border="4px solid black"
            borderRadius="2rem"
            w={[240, 680, 1140]}
            pl={[2, 7, 45]}
            h={[10, 40, 60]}
          >
           

            <Githubcalendar
              username="sirtaj786"
              year="last"
              showWeekdayLabels="true"
              blockSize={15}
              blockMargin={5}
              fontSize={16}
              theme="tokyonight"
            />
          </Box>
        </VStack>
      </Center>
      
      
  
    </Stack>
    
  );
};

