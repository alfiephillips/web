import styled, {keyframes} from 'styled-components';

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
`

const PageContainer = styled.div`
  background-color: black;
  color: white;
  min-height: 100vh;
  padding: 30px 30%;  // Default padding for larger screens

  // Media query for mobile devices
  @media (max-width: 768px) {
    padding: 30px 10%;  // Reduced horizontal padding for smaller screens
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
  color: white;
  text-decoration: none;
  font-size: 1em;

  @media (max-width: 768px) {
    font-size: 0.9em;
  }
`;


const Title = styled.h1`
  font-weight: bold;
  font-size: 2.5em;
`;

const Highlight = styled.span`
  background-color: ${props => props.bgColor || 'white'};
  color: ${props => props.color || 'black'};
  font-weight: ${props => props.weight || 500};
`;

const Description = styled.p`
  color: grey;
  margin-bottom: 20px;

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
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px; // Adjust size as needed
  height: 40px;
  border-radius: 50%;
  margin: 0 10px 0 0; // Adjust space between button and text
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.1); // Slight zoom effect on hover
  }

  // LinkedIn Icon Color
  .linkedin-icon {
    color: #0077b5;
  }

  // GitHub Icon Color
  .github-icon {
    color: #181717;
  }
`;






export {PageContainer, TimeWrapper, Navbar, NavLink, Title, Highlight, Description, ImageGrid, Image, FooterText, SocialButton}