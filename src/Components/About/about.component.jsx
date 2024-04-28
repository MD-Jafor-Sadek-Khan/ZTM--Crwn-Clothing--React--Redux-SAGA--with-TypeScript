import React from "react";
import styled, { keyframes } from "styled-components";

// Import your logo image
import logo from "../../assets/crownDark.svg";
import { Link } from "react-router-dom";

const zoom = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  
  100% {
    transform: scale(1);
  }
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 40px;
  font-family: "Montserrat", sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #f8f9fa, #e2e6ea);
  border-radius: 15px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  animation: ${fadeIn} 1s ease;

  @media screen and (max-width: 768px) {
    padding: 20px;
  }
`;

const Logo = styled.img`
  width: 150px;
  margin-bottom: 30px;
  animation: ${zoom} 4s ease infinite;

  @media screen and (max-width: 768px) {
    width: 120px;
    margin-bottom: 20px;
  }
`;

const Title = styled.h1`
  color: #2c3e50;
  font-size: 36px;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-bottom: 20px;
  opacity: 0;
  animation: ${fadeIn} 1s ease forwards;

  @media screen and (max-width: 768px) {
    font-size: 32px;
    margin-bottom: 15px;
  }
`;

const Paragraph = styled.p`
  color: #34495e;
  font-size: 18px;
  line-height: 1.6;
  text-align: justify;
  margin-bottom: 20px;
  opacity: 0;
  animation: ${fadeIn} 1s ease forwards;
  position: relative;
  cursor: pointer;

  &:hover::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -5px;
    width: 100%;
    height: 2px;
    background-color: #3498db; /* Blue */
  }

  @media screen and (max-width: 768px) {
    font-size: 16px;
    margin-bottom: 15px;
  }
`;

const EmphasizedText = styled.span`
  font-weight: bold;
  color: #d53c2c; /* Red */
  transition: color 0.3s ease;

  &:hover {
    color: #3498db; /* Blue */
  }
`;

const StyledLink = styled(Link)`
  color: #1478fb; /* Blue */
  text-decoration: none;
  font-weight: bold;
  transition: color 0.3s ease;

  &:hover {
    color: #e74c3c; /* Red */
  }
`;

const CallToAction = styled.button`
  background-color: #1478ab; /* Blue */
  color: #fff;
  border: none;
  padding: 10px 20px;
  font-size: 18px;
  cursor: pointer;
  transition: background-color 0.3s ease, color 0.3s ease;

  &:hover {
    background-color: #3498db; /* Light Blue */
    color: #fff;
    animation: ${zoom} 1s ease infinite;
  }
`;

const About = () => {
  return (
    <Container>
      {/* Display the logo */}
      <Logo src={logo} alt="CRWN Clothing Logo" />

      <Title>About Us</Title>
      <Paragraph>
        Welcome to <EmphasizedText>CRWN Clothing</EmphasizedText>, where{" "}
        <EmphasizedText>fashion</EmphasizedText> meets{" "}
        <EmphasizedText>passion</EmphasizedText> and{" "}
        <EmphasizedText>style</EmphasizedText> is{" "}
        <EmphasizedText>limitless</EmphasizedText>. Step into a world where
        every piece of clothing tells a story, and every outfit is a canvas for
        self-expression.
      </Paragraph>
      <Paragraph>
        At <EmphasizedText>CRWN Clothing</EmphasizedText>, we're not just about
        selling clothes; we're about{" "}
        <EmphasizedText>igniting your imagination</EmphasizedText> and{" "}
        <EmphasizedText>fueling your confidence</EmphasizedText>. From the
        moment you browse our collections to the instant you slip into your new
        favorite piece, we want you to feel{" "}
        <EmphasizedText>empowered</EmphasizedText>,{" "}
        <EmphasizedText>inspired</EmphasizedText>, and{" "}
        <EmphasizedText>ready to conquer the world</EmphasizedText>.
      </Paragraph>
      <Paragraph>
        With our curated selection of high-quality garments and trend-setting
        designs, we're here to <EmphasizedText>redefine fashion</EmphasizedText>{" "}
        and <EmphasizedText>celebrate individuality</EmphasizedText>. Whether
        you're searching for the perfect statement piece or building a wardrobe
        filled with timeless classics, CRWN Clothing has everything you need to
        elevate your style game.
      </Paragraph>
      <Paragraph>
        Join us on our journey as we{" "}
        <EmphasizedText>push boundaries</EmphasizedText>,{" "}
        <EmphasizedText>break rules</EmphasizedText>, and{" "}
        <EmphasizedText>make a statement</EmphasizedText>.{" "}
        <StyledLink to={"/"}>Shop CRWN Clothing</StyledLink> today and discover
        a world of <EmphasizedText>endless possibilities</EmphasizedText>. Your
        style journey starts here.
      </Paragraph>
      <Link to={"/shop"}>
        <CallToAction>Discover More</CallToAction>
      </Link>
    </Container>
  );
};

export default About;
