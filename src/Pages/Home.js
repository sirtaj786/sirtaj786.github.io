import React, { useState } from "react";
import Hero from "../components/Hero/Hero";
import About from "../components/About/About";
import Skills from "../components/Skill/Skills";
import Projects from "../components/Projects/Projects";
import Contact from "../components/Contact/Contact"
import FixSocialIcon from "../components/SocialIcon/FixSocialIcon";
import Footer from "../components/Footer/Footer";
import { Github } from "../components/Github/Github";
import Statics from "../components/Github/Statics";
import Dropdown from "../components/Dropdown/Dropdown";
import Header from "../components/Header/Header";

function Home() {
  const [isOpen,setOpen]=useState(false);
  const toggle=()=>{
    setOpen(!isOpen)
  }

  return (
    <>
    <Dropdown isOpen={isOpen} toggle={toggle} />
    <Header toggle={toggle}/>
      <Hero />
      <About />
      <Skills/>
  
      <Projects/>
    <Statics/>
      <Github/>
      <Contact/>
      <Footer/>
      <FixSocialIcon/>
    </>
  );
}

export default Home;

