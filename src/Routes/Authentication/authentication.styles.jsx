import styled from "styled-components"

export const AuthFormContainerStyled = styled.div`
  display: flex;
  justify-content: space-evenly;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    row-gap: 60px;
    color: black;
  }
`
