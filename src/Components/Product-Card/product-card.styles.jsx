import styled from "styled-components"
import { Button } from "../Button/Buttom.component"

export const ButtonStyled = styled(Button)`
  width: 80%;
  opacity: 0.7;
  position: absolute;
  top: 255px;
  display: none;
`

export const ProductCardImageStyled = styled.img`
  width: 100%;
  height: 95%;
  object-fit: cover;
  margin-bottom: 5px;
  &:hover {
    opacity: 0.8;
  }
  
`

export const ProductCardContainerStyled = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;
  position: relative;

  &:hover ${ButtonStyled} {
    opacity: 0.85;
    display: flex;
  }
  @media (max-width: 768px) {
    margin-bottom: 50px;
  }
`

export const FooterStyled = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  font-size: 18px;
`

export const NameStyled = styled.span`
  width: 70%;
  margin-bottom: 15px;
  text-align: start;
  background-color: white;
  border-radius: 15px 0 0 15px;
  padding: 4px;
  padding-left: 15px;
  @media (max-width: 768px) {
    background-color: transparent;
    color: white;
    padding-left: 5px;
  }
`

export const PriceStyled = styled.span`
  width: 30%;
  text-align: end;
  background-color: white;
  padding: 4px;
  padding-right: 5px;
  @media (max-width: 768px) {
    background-color: transparent;
    color: white;
    padding-right: 5px;
  }
`
