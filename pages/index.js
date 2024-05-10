import {
  PageContainer, TimeWrapper, Navbar, NavLink, 
  Title, Highlight, Description, FooterText, SocialButton} 
  from "../components";

import React, {useState, useEffect} from "react"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub, faSquareLetterboxd } from "@fortawesome/free-brands-svg-icons";

const HomePage = () => {
  return (
    <PageContainer>
      <Navbar>
        <NavLink href="#" $activeColor="red">home</NavLink>
        <NavLink href="/work">work</NavLink>
        <NavLink href="/contact">contact</NavLink>
      </Navbar>
      <Title>alfie phillips 👋</Title>
      <h3><u>software engineer</u></h3>
      <Description>
        As a <Highlight $bgcolor="green" $color="aqua" $weight="1000">well motivated</Highlight> and <Highlight $color="red" $weight="900">self-taught Software Engineer</Highlight> close to 4 years of experience, I specialize in
        developing tailored solutions to meet diverse client needs. My expertise extends to <Highlight $bgcolor="yellow" $weight="700">Search Engine
        Optimization (SEO) and brand promotion</Highlight>, where I have a proven track record of
        enhancing brand visibility for small business startups. I thrive on <Highlight $bgcolor="red" $color="yellow" $weight="600">technical challenges</Highlight> and excel at&nbsp;
        <Highlight $bgcolor="blue" $color="white" $weight="800">problem-solving</Highlight> to deliver effective solutions that align with clients&apos; objectives.
      </Description>
      {/* <ImageGrid>
        <Image src="/path-to-your-image.jpg" alt="Image Description" />
        <Image src="/path-to-your-image.jpg" alt="Image Description" />
        <Image src="/path-to-your-image.jpg" alt="Image Description" />
        <Image src="/path-to-your-image.jpg" alt="Image Description" />
        <Image src="/path-to-your-image.jpg" alt="Image Description" />
        <Image src="/path-to-your-image.jpg" alt="Image Description" />
      </ImageGrid> */}
      <div style={{ display: "flex", alignItems: "center" }}>
        <SocialButton href="https://www.linkedin.com/in/alfiephillips/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} className="linkedin-icon" size="2x"/>
        </SocialButton>
        <span style={{fontSize: "1.5em"}}>linkedIn</span>
      </div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <SocialButton href="https://github.com/alfiephillips" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} className="github-icon" size="2x"/>
        </SocialButton>
        <span style={{fontSize: "1.5em"}}>github</span>
      </div>
      <div style={{ display: "flex", alignItems: "center", textAlign: "center" }}>
        <SocialButton href="/CV-Alfie-Phillips.pdf" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faSquareLetterboxd} className="cv-icon" size="2x"/>
        </SocialButton>
        <span style={{fontSize: "1.5em"}}>resume</span>
      </div>
      <FooterText>
        © copyright alfie phillips {new Date().getFullYear()}
      </FooterText>
    </PageContainer>
  );
};

export default HomePage;
