import styled from "styled-components"

export const SignInFormContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  width: 380px;
  @media screen and (max-width: 768px) {
    padding: 0 15px;
  }
`

export const SignInTitleStyled = styled.h2`
  margin: 10px 0;
`

export const ButtonsContainerStyled = styled.div`
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 768px) {
    gap: 15px;
  }
`

export const GoogleButtonResponsive = styled.div`
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    position: relative;
  }
`

export const TextOne = styled.span`
  @media screen and (max-width: 768px) {
    position: absolute;
    top: 15px;
  }
`
export const TextTwo = styled.span`
  @media screen and (max-width: 768px) {
    position: absolute;
    bottom: 15px;
  }
`
