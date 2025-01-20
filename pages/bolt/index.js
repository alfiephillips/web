import React, { useRef, useEffect, useState } from "react";
import { useRouter } from "next/router";
import gsap from "gsap";
import {
  BoltWrapper,
  BoltLandingPageContainer,
  PageContainer,
  Navbar,
  NavLink,
  Title,
  Description,
  FooterText,
  ImagesContainer,
  RoundedImage
} from "../../components";

const Bolt = () => {
  const router = useRouter();
  const scrollTextRef = useRef(null);
  const [isVerified, setIsVerified] = useState(false);

  useEffect(() => {
    // Check local storage once on mount
    const alreadyAuthed = localStorage.getItem("googleAuth");
    if (alreadyAuthed) {
      setIsVerified(true);
    } else {
      // Prompt for credentials
      const pass = prompt("Enter Google password");
      if (pass === "bolt180806") {
        localStorage.setItem("googleAuth", "true");
        setIsVerified(true);
      } else {
        alert("Incorrect credentials. Access denied.");
      }
    }
  }, [router]);

  useEffect(() => {
    if (!isVerified) return;

    // Fade out effect for the "Scroll Down..." text
    const tlFadeOut = gsap
      .timeline({ paused: true })
      .to(scrollTextRef.current, {
        opacity: 0,
        duration: 0.5,
        ease: "power1.out"
      });

    const handleScroll = () => {
      if (window.scrollY > 0) {
        tlFadeOut.play();
      } else {
        tlFadeOut.reverse();
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isVerified]);

  // If not verified, render nothing
  if (!isVerified) {
    return null;
  }

  return (
    <BoltWrapper>
      <div style={{ position: "relative" }}>
        <BoltLandingPageContainer />
        <h2
          ref={scrollTextRef}
          style={{
            position: "absolute",
            bottom: "0",
            width: "100%",
            display: "flex",
            justifyContent: "center",
            opacity: 1
          }}
          className="scroll-text"
        >
          Scroll Down...
        </h2>
      </div>

      <PageContainer>
        <Navbar>
          <NavLink href="/bolt" $activeColor="red">
            Who Am I?
          </NavLink>
          <NavLink href="/bolt/contact">Talk to me</NavLink>
        </Navbar>

        <Title>Hi, I&apos;m Bolt</Title>
        <Description>
          Send me a description to put in here I don&apos;t know yet.
        </Description>

        <ImagesContainer>
          <RoundedImage src="/IMG_0130.JPG" />
          <RoundedImage src="/IMG_0132.JPG" />
          <RoundedImage src="/IMG_0133.JPG" />
          <RoundedImage src="/IMG_2062.JPG" />
          <RoundedImage src="/IMG_2065.JPG" />
          <RoundedImage src="/IMG_2068.JPG" />
        </ImagesContainer>

        <FooterText>Made with ❤️ for Bolt</FooterText>
      </PageContainer>
    </BoltWrapper>
  );
};

export default Bolt;
