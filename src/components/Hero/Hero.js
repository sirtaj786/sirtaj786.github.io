import React from "react";
// import { Button } from "r";
// import Dropdown from "../Dropdown/Dropdown";
// import Header from "../Header/Header";
import profile from "../../img/image.png";
import {
  HeroContainer,
  HeroWrapper,
  HeroLeft,
  HeroRight,
  Image,
  ScrollDown,
  ScrollLink,
  NavBtn
} from "./HeroElements";
function Hero() {
  // const [isOpen, setIsOpen] = useState(false);

  // const toggle = () => {
  //   setIsOpen(!isOpen);
  // };
  return (
    <main>
      
      <HeroContainer>
        <HeroWrapper id="hero">
          <HeroLeft>
            <h1>Hi, I'm Sirtaj Khan</h1>
            <h5>Full Stack Web Developer</h5>
            <p>
              I design and code beautifully simple things, and I love what I do.
            </p>
           
          </HeroLeft>
         
          
          <HeroRight>
            <Image
              src={profile}
              alt="man-svgrepo"
            />
           
          </HeroRight>
        </HeroWrapper>
        {/* <button style={{backgroundColor:"red"}}>Resume</button> */}
        <ScrollDown to="projects">
          <ScrollLink>
            Scroll down
            <img
              src="https://raw.githubusercontent.com/gurupawar/website/main/src/Assets/scroll-down.svg"
              alt="scroll-down"
            />
          </ScrollLink>
        </ScrollDown>
      </HeroContainer>
     
    </main>
  );
}

export default Hero;
