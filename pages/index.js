import React from "react";
import styled from "styled-components";

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #f3f4f6;
`;

const Card = styled.div`
  background: #fff;
  padding: 2rem;
  border-radius: 0.75rem;
  box-shadow: 0 4px 24px rgba(0,0,0,0.08);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Icon = styled.svg`
  width: 4rem;
  height: 4rem;
  color: #facc15;
  margin-bottom: 1rem;
`;

const Title = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  color: #1f2937;
  margin-bottom: 0.5rem;
  text-align: center;
`;

const Message = styled.p`
  font-size: 1.125rem;
  color: #4b5563;
  margin-bottom: 1rem;
  text-align: center;
`;

const SubMessage = styled.p`
  color: #6b7280;
  text-align: center;
`;

const ContactLink = styled.a`
  color: #3b82f6;
  text-decoration: underline;
`;

function Maintenance() {
  return (
    <Container>
      <Card>
        <Icon fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <circle
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 6v6l4 2"
          />
        </Icon>
        <Title>I&#39;ll be back soon!</Title>
        <Message>
          Sorry for the inconvenience. I'm performing some maintenance at the moment.
        </Message>
        <SubMessage>
          If you need to, you can always{" "}
          <ContactLink href="mailto:mail@alfiephillips.com">
            contact me
          </ContactLink>
          , otherwise I'll be back online shortly!
        </SubMessage>
      </Card>
    </Container>
  );
}

export default Maintenance;
