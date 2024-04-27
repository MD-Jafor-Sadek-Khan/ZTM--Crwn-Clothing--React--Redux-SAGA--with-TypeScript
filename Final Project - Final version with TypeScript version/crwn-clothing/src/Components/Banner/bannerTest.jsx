import React, { useState, useEffect } from "react";
import styled, { keyframes, css } from "styled-components";

const mesmerize = keyframes`
  0% {
    transform: scale(1) rotate(0deg);
  }
  50% {
    transform: scale(1.01) rotate(10deg);
  }
  100% {
    transform: scale(1) rotate(0deg);
  }
`;

const arrowAnimation = keyframes`
  0% {
    transform: translateY(0);
  }
  25% {
    transform: translateY(-5px);
  }
  50% {
    transform: translateY(0);
  }
  75% {
    transform: translateY(-5px);
  }
  100% {
    transform: translateY(0);
  }
`;

const BannerContainer = styled.a`
  background-image: url("https://images.unsplash.com/photo-1674202750524-22084f6a3d71?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");
  background-size: cover;
  background-position: center;
  background-color: #1a1a1a;
  color: #fff;
  text-align: center;
  padding: 20px;
  font-size: 20px;
  font-family: "Arial", sans-serif;
  letter-spacing: 5px;
  text-transform: uppercase;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  height: 150px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  animation: ${({ animated }) => (animated ? mesmerize : "none")} 5s ease-in-out;

  &:not([animated]) {
    animation: ${mesmerize} 5s ease-in-out;
  }
`;

const BannerText = styled.h1`
  margin: 0;
`;

const DownArrow = styled.span`
  font-size: 5rem;
  text-align: center;
  animation: ${arrowAnimation} 5s ease-in-out;

  ${({ animated }) =>
    animated &&
    css`
      animation: ${arrowAnimation} 5s ease-in-out;
    `}
`;

const Banner2 = () => {
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const bannerOffset = document.getElementById("banner").offsetTop;

      if (scrollPosition > bannerOffset && !animated) {
        setAnimated(true);
        window.removeEventListener("scroll", handleScroll);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [animated]);

  const handleClick = () => {
    const scrollAmount = 500;
    window.scrollBy({
      top: scrollAmount,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    if (animated) {
      setAnimated(false); // Stop animation after it has occurred once
    }
  }, [animated]);

  return (
    <BannerContainer id="banner" animated={animated} onClick={handleClick}>
      <BannerText>Shop Below</BannerText>
      <DownArrow animated={animated} style={{ animationDuration: "5s" }}>
        &darr;
      </DownArrow>
    </BannerContainer>
  );
};

export default Banner2;
