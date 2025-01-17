import React from "react";
import {
  PageContainer,
  Navbar,
  NavLink,
  Title,
  Description,
  FooterText,
  SocialButton,
  ImagesContainer,
  RoundedImage
} from "../components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

const HomePage = () => {
  return (
    <PageContainer>
      {/* Navigation */}
      <Navbar>
        <NavLink href="#" $activeColor="cyan">
          home
        </NavLink>
        <NavLink href="/work">work</NavLink>
        <NavLink href="/contact">contact</NavLink>
      </Navbar>

      {/* Intro */}
      <Title>alfie phillips 👋</Title>
      <h3>
        <u style={{textUnderlineOffset: "4px"}}>apprentice developer at hiyield</u>
      </h3>
      <Description>
        Hello! I&apos;m a self-taught Software Engineer with 5 years of
        experience, focusing on web development, SEO, and brand promotion. I
        thrive on solving technical challenges and delivering impactful, modern
        solutions for clients across various industries.
      </Description>

      {/* Rounded images container */}
      <ImagesContainer>
        <RoundedImage
          src="https://hiyield.co.uk/wp-content/uploads/2024/09/alfie-fun-1024x1024.png"
          alt="Placeholder for Project 1"
        />
      </ImagesContainer>

      {/* Social */}
      <div style={{ display: "flex", alignItems: "center", marginTop: "2em" }}>
        <SocialButton
          href="https://www.linkedin.com/in/alfiephillips/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faLinkedin} className="linkedin-icon" size="2x" />
        </SocialButton>
        <span style={{ fontSize: "1.3em", marginLeft: "0.5em" }}>LinkedIn</span>
      </div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <SocialButton
          href="https://github.com/alfiephillips"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faGithub} className="github-icon" size="2x" />
        </SocialButton>
        <span style={{ fontSize: "1.3em", marginLeft: "0.5em" }}>GitHub</span>
      </div>

      {/* Footer */}
      <FooterText style={{ marginTop: "3em" }}>
        © {new Date().getFullYear()} alfie phillips
      </FooterText>
    </PageContainer>
  );
};

export default HomePage;
