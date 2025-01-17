import styled, { keyframes } from "styled-components";

const glitch = keyframes`
  0% { text-shadow: 2px 0 #ff4d4d, -2px 0 #4d94ff; }
  20% { text-shadow: -2px 0 #4d94ff, 2px 0 #ff4d4d; }
  40% { text-shadow: 2px 0 #ff4d4d, -2px 0 #4d94ff; }
  60% { text-shadow: -2px 0 #4d94ff, 2px 0 #ff4d4d; }
  80% { text-shadow: 2px 0 #ff4d4d, -2px 0 #4d94ff; }
  100% { text-shadow: -2px 0 #4d94ff, 2px 0 #ff4d4d; }
`;

export const PageContainer = styled.div`
  background-color: #1a1a1a;
  color: #f0f0f0;
  min-height: 100vh;
  padding: 30px 25%;

  @media (max-width: 768px) {
    padding: 30px 10%;
  }
`;

export const Navbar = styled.nav`
  display: flex;
  gap: 20px;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    gap: 10px;
  }
`;

export const NavLink = styled.a`
  color: ${(props) => props.$activeColor || "#f0f0f0"};
  text-decoration: none;
  font-size: 1.3em;
  transition: color 0.3s ease;

  &:hover {
    color: cyan;
  }

  @media (max-width: 768px) {
    font-size: 1.1em;
  }
`;

export const Title = styled.h1`
  font-weight: bold;
  font-size: 2.3em;
  margin-bottom: 0.5em;
`;

export const Description = styled.p`
  color: #cccccc;
  margin-bottom: 1em;
  line-height: 1.5;
`;

export const ErrorText = styled.p`
  color: #ff4d4d;
  font-weight: 700;
`;

export const FooterText = styled.p`
  color: #666666;
  margin-top: 2em;
  font-size: 0.9em;
`;

export const SocialButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 8px;
  margin: 10px 0;
  transition: transform 0.3s ease;
  font-size: 1.4em;
  background-color: #333333;

  &:hover {
    transform: scale(1.1);
  }

  .linkedin-icon {
    color: #0077b5;
  }

  .github-icon {
    color: #ffffff;
  }
`;

export const Projects = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 50px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const ProjectItem = styled.div`
  border: 1px solid #666666;
  padding: 1.5em;
  border-radius: 0.5em;
  background-color: #2b2b2b;
`;

export const ProjectLink = styled.a`
  text-decoration: none;
  color: #00cfff;
  font-size: 1.1em;
`;

export const ProjectName = styled.h2`
  color: #ffffff;
  margin-bottom: 0.5em;
`;

export const ProjectDescription = styled.p`
  color: #cccccc;
  font-weight: 600;
  margin-bottom: 0.8em;
`;

export const ProjectStats = styled.p`
  color: #cccccc;
  font-size: 0.9em;
  line-height: 1.4em;
`;

export const ImagesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
  margin: 2em 0;
`;

export const RoundedImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 0.75em;
  border: 1px solid #666666;
`;
