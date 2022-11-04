// import React from "react";
import SocialIcon from "../SocialIcon/SocialIcon";
import { Box1, ContactWrapper, Outer } from "./ContactElements";

// import { HiLocationMarker } from "react-icons/hi";
// import { HiMail } from "react-icons/hi";
// import { FaMobileAlt } from "react-icons/fa";
import {
  Box,
  Button,
  Center,
  FormLabel,
  Heading,
  HStack,
  Input,
  
  Text,
  Textarea,
 
} from "@chakra-ui/react";
import React from "react";
import { useForm,  } from "@formspree/react";
import { CheckIcon } from "@chakra-ui/icons";


function Contact() {
  const [state, handleSubmit] = useForm("mrgjvnqb");
  if(state.succeeded){
    return(
      // alert("Thank You!")
      <Heading
      fontFamily="body"
      fontSize="2rem"
      marginTop="7rem"
      fontWeight="semibold"
      color="rgb(16,24,52)"
    >
      <Center>
        <HStack>
          <CheckIcon color="black" />
          <Text mt={"3rem"} bgClip="text" bgGradient="linear(to-r, red.500, yellow.500)">
            Thanks for getting in Touch!
          </Text>
         
        </HStack>
      </Center>
    </Heading>
    )
  }
  return (
    <ContactWrapper id="contact">
      <div className="Container">
        <div className="SectionTitle">Get In Touch</div>
        <div className="BigCard">
          <Outer>
            
               <Box1 > 
              {/* <Box mb={""}> */}
              <form  onSubmit={handleSubmit}>
                <FormLabel>Email Address</FormLabel>
                <Input type="email" w={"100%"} placeholder="Enter your Email"/>
               
                <FormLabel>Message</FormLabel>
                <Textarea type="text" name="message"
                 w={"100%"} placeholder="Message"/>
                <Box >

                <Button mt={"1.5rem"}  type="submit"
                disabled={state.submitting} bg={"blue"} w={"100%"}>Submit</Button>
                </Box>
              </form>
              {/* </Box> */}
              </Box1>
            
          </Outer>
          {/* <div>
            <ContactForm />
            </div> */}
        </div>
        <SocialIcon />
      </div>
      
      
    </ContactWrapper>
  );

}

export default Contact;
