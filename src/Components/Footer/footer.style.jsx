import styled from "styled-components"

export const FooterContainer = styled.footer`
  background-color: transparent;
  border-top: 5px solid black;
  // background-image: url("https://wallpapercave.com/wp/wp1969053.jpg");

  background-size: cover;
  background-position: center;
  // background-color:rgb(23, 23, 23, 0.2);
  background-color: black;
  width: 100%;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  padding: 0.4rem 0.4rem;
  padding-bottom: 0px;
  border-radius: 20px;
  margin-top: 100px;
  border: 4px solid white;
  box-shadow: -5px 0 20px rgba(0, 0, 0, 0.3);

  @media screen and (max-width: 768px) {
    text-align: center;
    border: 5px solid transparent;
    margin-top: 80px;
    border-radius: 0;
  }
`

export const BigSection = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
  justify-content: center;
  align-items: baseline;
  text-align: center;
  border-top: 1px solid white;
  border-bottom: 1px solid white;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    border-bottom: 0;
  }
`

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  max-width: 100%;

  h3 {
    background-color: black;
    padding: 6px 30px 12px 30px;
    border-radius: 0 50px 0 50px;
  }
  p {
    background-color: rgb(23, 23, 23);
    padding: 8px 18px 11px 18px;
    border-radius: 5px;
  }

  .about_button {
    background-color: rgb(23, 23, 23);
    border: 0;
    padding: 0;
    color: #00b4d8;
    font-weight: bold;
  }
  @media screen and (max-width: 768px) {
    align-items: center;
    max-width: none;
  }
`

export const FollowSection = styled(Section)`
  align-items: center;
`

export const SocialIcons = styled.div`
  display: flex;
  justify-content: center;
  gap: 6rem;
`

export const SocialIconLink = styled.a`
  color: #fff;
  text-decoration: none;
  transition: color 0.3s ease-in-out;
  background-color: rgb(23, 23, 23);
  padding: 3% 7%;
  border-radius: 100%;
  &:hover {
    color: #ffd700;
  }

  svg {
    width: 1.3rem;
    height: 40px;
    transition: transform 0.3s ease-in-out;

    &:hover {
      transform: translateY(-3px);
    }
  }
`

export const Copyright = styled.p`
  text-align: center;
  color: white;
  font-weight: 900;
  font-size: 1rem;
`

export const LinkList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
`

export const LinkItem = styled.div`
  a {
    color: #fff;
    text-decoration: none;
    transition: color 0.3s ease-in-out;

    background-color: rgb(23, 23, 23);
    padding: 8px 18px 11px 18px;
    border-radius: 5px;

    &:hover {
      color: #ffd700; /* Gold on hover */
    }
  }
`
