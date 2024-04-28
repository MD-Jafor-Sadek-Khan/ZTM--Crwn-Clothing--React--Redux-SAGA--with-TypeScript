import styled from "styled-components"

export const FooterContainer = styled.footer`
  background-color: transparent;
  border-top: 5px solid black;
  // background-image: url("https://wallpapercave.com/wp/wp1969053.jpg");

  background-size: cover;
  background-position: center;
  background-color:#1d2951;
  width: 100%;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  padding: 0.4rem 0.4rem;
  padding-bottom: 0px;
  // border-radius: 20px;
  margin-top: 100px;

  @media screen and (max-width: 768px) {
    text-align: center;
    border: 5px solid transparent;
    margin-top: 80px;
  }
`

export const BigSection = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
  justify-content: center;
  align-items: baseline;
  text-align: center;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
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
    background-color: black;
    padding: 8px 18px 11px 18px;
    border-radius: 5px;
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
  background-color: black;
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

    background-color: black;
    padding: 8px 18px 11px 18px;
    border-radius: 5px;

    &:hover {
      color: #ffd700; /* Gold on hover */
    }
  }
`
