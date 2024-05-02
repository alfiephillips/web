import styled, { keyframes } from "styled-components";

const glitch = keyframes`
  0% {
    text-shadow: 2px 0 red, -2px 0 blue;
    transform: translate(2px, 0);
  }
  20% {
    text-shadow: -2px 0 blue, 2px 0 red;
    transform: translate(-2px, 0);
  }
  40% {
    text-shadow: 2px 0 red, -2px 0 blue;
    transform: translate(2px, -2px);
  }
  60% {
    text-shadow: -2px 0 blue, 2px 0 red;
    transform: translate(-2px, 2px);
  }
  80% {
    text-shadow: 2px 0 red, -2px 0 blue;
    transform: translate(2px, 0);
  }
  100% {
    text-shadow: -2px 0 blue, 2px 0 red;
    transform: translate(-2px, 0);
  }
`;

const TimeWrapper = styled.span`
  animation: ${glitch} 1s infinite;
`;

const PageContainer = styled.div`
  background-color: black;
  color: white;
  min-height: 100vh;
  padding: 30px 25%; // Default padding for larger screens

  // Media query for mobile devices
  @media (max-width: 768px) {
    padding: 30px 10%; // Reduced horizontal padding for smaller screens
  }
`;

const Navbar = styled.nav`
  display: flex;
  justify-content: flex-start;
  gap: 20px;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    gap: 10px;
  }
`;

const NavLink = styled.a`
  color: ${(props) => props.$activeColor || "white"};
  text-decoration: none;
  font-size: 1.5em;

  @media (max-width: 768px) {
    font-size: 1.2em;
  }
`;

const Title = styled.h1`
  font-weight: bold;
  font-size: 2.5em;
`;

const Highlight = styled.span`
  background-color: ${(props) => props.$bgcolor || "white"};
  color: ${(props) => props.$color || "black"};
  font-weight: ${(props) => props.$weight || 500};
`;

const Description = styled.p`
  color: grey;
  margin-bottom: 10px;

  .highlight {
    background-color: whitesmoke;
    color: black;
  }
`;

const ImageGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 10px;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const Image = styled.img`
  width: 100%;
  height: auto;
`;

const FooterText = styled.p`
  color: grey;
`;

const SocialButton = styled.a`
  display: block;
  align-items: center;
  justify-content: center;
  width: 40px; // Adjust size as needed
  height: 40px;
  border-radius: 50%;
  margin: 10px; // Adjust space between button and text
  transition: transform 0.3s;
  font-size: 1.5em;

  &:hover {
    transform: scale(1.1); // Slight zoom effect on hover
  }

  @media (max-width: 768px) {
  }

  // LinkedIn Icon Color
  .linkedin-icon {
    color: #0077b5;
  }

  // GitHub Icon Color
  .github-icon {
    color: white;
  }

  // CV Icon Color
  .cv-icon {
    color: pink;
  }
`;

const Projects = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 50px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export {
  PageContainer,
  TimeWrapper,
  Navbar,
  NavLink,
  Title,
  Highlight,
  Description,
  ImageGrid,
  Image,
  FooterText,
  SocialButton,
  Projects
};
