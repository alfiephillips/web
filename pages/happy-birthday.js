import React from "react";
import styled, { keyframes } from "styled-components";

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #f3f4f6;
  overflow: hidden;
`;

const Card = styled.div`
  background: #fff;
  padding: 2rem;
  border-radius: 0.75rem;
  box-shadow: 0 4px 24px rgba(0,0,0,0.08);
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 1;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  color: #ef4444;
  margin-bottom: 0.5rem;
  text-align: center;
`;

const Message = styled.p`
  font-size: 1.25rem;
  color: #4b5563;
  margin-bottom: 1rem;
  text-align: center;
`;

const BalloonFly = keyframes`
  0% {
    transform: translateY(100vh) scale(1);
    opacity: 0.8;
  }
  80% {
    opacity: 1;
  }
  100% {
    transform: translateY(-20vh) scale(1.05);
    opacity: 0;
  }
`;

const Balloon = styled.svg`
  position: absolute;
  left: ${({ left }) => left}%;
  animation: ${BalloonFly} ${({ duration }) => duration}s linear infinite;
  width: 3rem;
  height: 4rem;
  z-index: 0;
`;

function Balloons() {
  // Array of balloon colors and positions
  const balloons = [
    { color: "#f87171", left: 10, duration: 7 },
    { color: "#34d399", left: 25, duration: 8 },
    { color: "#60a5fa", left: 40, duration: 6 },
    { color: "#fbbf24", left: 55, duration: 9 },
    { color: "#a78bfa", left: 70, duration: 7.5 },
    { color: "#f472b6", left: 85, duration: 8.5 },
  ];
  return (
    <>
      {balloons.map((b, i) => (
        <Balloon
          key={i}
          left={b.left}
          duration={b.duration}
          viewBox="0 0 32 40"
        >
          <ellipse cx="16" cy="16" rx="14" ry="16" fill={b.color} />
          <rect x="14" y="32" width="4" height="8" rx="2" fill="#888" />
          <path
            d="M16 32 Q18 36 16 40 Q14 36 16 32"
            stroke="#888"
            strokeWidth="1"
            fill="none"
          />
        </Balloon>
      ))}
    </>
  );
}

function HappyBirthdayJustin() {
  return (
    <Container>
      <Balloons />
      <Card>
        <Title>🎉 Happy Birthday Justin! 🎈</Title>
        <Message>
          Wishing you a fantastic day void of xigxag!
        </Message>
      </Card>
    </Container>
  );
}

export default HappyBirthdayJustin;
