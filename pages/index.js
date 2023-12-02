import {
  PageContainer, Navbar, NavLink, 
  Title, Description, ImageGrid, 
  Image, FooterText, SocialButton} 
  from '../components';

import React, {useState, useEffect} from "react"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faSquareLetterboxd } from '@fortawesome/free-brands-svg-icons';

const TimeDisplay = () => {
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const updateCurrentTime = () => {
      const now = new Date();
      const hours = now.getHours();
      const minutes = now.getMinutes();
      const ampm = hours >= 12 ? 'PM' : 'AM';
      const formattedTime = `${hours % 12 || 12}:${minutes < 10 ? '0' : ''}${minutes} ${ampm}`;
      setCurrentTime(formattedTime);
    };

    updateCurrentTime();
    const intervalId = setInterval(updateCurrentTime, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return <span>{currentTime}</span>;
};


const HomePage = () => {
  return (
    <PageContainer>
      <Navbar>
        <NavLink href="#">Home</NavLink>
        <NavLink href="/work">Work</NavLink>
        <NavLink href="/contact">Contact</NavLink>
      </Navbar>
      <Title>Alfie Phillips 👋</Title>
      <h3><u>Back-End Software Engineer</u></h3>
      <TimeDisplay /> 
      <Description>
      As a highly motivated and self-taught Software Engineer with over 3 years of experience, I specialize in
developing tailored solutions to meet diverse client needs. My expertise extends to Search Engine
Optimization (SEO) and brand promotion, where I have a proven track record of significantly boosting sales
and enhancing brand visibility for small business startups. I thrive on technical challenges and excel at
problem-solving to deliver effective solutions that align with clients' objectives.
      </Description>
      {/* <ImageGrid>
        <Image src="/path-to-your-image.jpg" alt="Image Description" />
        <Image src="/path-to-your-image.jpg" alt="Image Description" />
        <Image src="/path-to-your-image.jpg" alt="Image Description" />
        <Image src="/path-to-your-image.jpg" alt="Image Description" />
        <Image src="/path-to-your-image.jpg" alt="Image Description" />
        <Image src="/path-to-your-image.jpg" alt="Image Description" />
      </ImageGrid> */}
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <SocialButton href="https://www.linkedin.com/in/alfiephillips/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} className="linkedin-icon" size="2x"/>
        </SocialButton>
        <span>LinkedIn</span>
      </div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <SocialButton href="https://github.com/alfiephillips" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} className="github-icon" size="2x"/>
        </SocialButton>
        <span>GitHub</span>
      </div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <SocialButton href="/CV-Alfie-Phillips.pdf" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faSquareLetterboxd} size="2x"/>
        </SocialButton>
        <span>Resume</span>
      </div>
      <FooterText>
        © Copyright Alfie Phillips {new Date().getFullYear()}
      </FooterText>
    </PageContainer>
  );
};

export default HomePage;
