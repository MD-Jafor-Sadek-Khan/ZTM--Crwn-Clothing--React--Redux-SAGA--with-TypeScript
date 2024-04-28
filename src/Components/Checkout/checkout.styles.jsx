import styled from "styled-components"

export const CheckoutContainer = styled.div`
  width: 100%;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px auto 0;
  color: black;
  font-weight: 500;
`

export const CheckoutHeader = styled.div`
  width: 100%;
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;

  border-bottom: 1px solid darkgrey;
  margin-bottom: 28px;
  @media (max-width: 768px) {
    text-align: center;
    margin-bottom: 11px;
    font-weight: 700;
    margin-right: 3.8rem;
  }
`

export const HeaderBlock = styled.div`
  text-transform: capitalize;
  width: 23%;

  &:last-child {
    width: 8%;
    @media (max-width: 768px) {
      display: none;
    }
  }
`

export const Total = styled.span`
  margin-left: auto;
  font-size: 36px;
  @media screen and (max-width: 768px) {
    margin-top: 30px;
  }
`

export const FormComponentContainer = styled.div`
  width: 40%;
  max-width: 400px;
  position: fixed;
  right: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 20px;

  @media screen and (max-width: 768px) {
    width: 100%;
    max-width: none;
    position: static;
    padding: 0;
    box-sizing: content-box;
    flex-direction: column-reverse;
  }
`

export const CheckoutContainerFlex = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`

export const CheckoutContainerWidth = styled.div`
  width: 60%;

  @media (max-width: 768px) {
    width: 100%;
  }
`
