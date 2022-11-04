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
            />
          </Box>
        </VStack>
      </Center>
      
        <Box
                     
                      
                    
                    >
                      <Center mt={"8rem"}>
                       <Image src= {`https://github-readme-streak-stats.herokuapp.com/?user=sirtaj786&theme=tokyonight`} alt="github"/>
                      </Center>
                    </Box>
  
    </Stack>
    
  );
};

//  <img className='stat' src="https://github-readme-stats.vercel.app/api?username=Vivek-Nemade&theme=tokyonight&hide_border=true&include_all_commits=true&count_private=true" alt="" /> 
{/* <br /> */}
{/* <img className='stat1' src="https://github-readme-streak-stats.herokuapp.com/?user=Vivek-Nemade&theme=tokyonight&hide_border=true" alt="" /> */}