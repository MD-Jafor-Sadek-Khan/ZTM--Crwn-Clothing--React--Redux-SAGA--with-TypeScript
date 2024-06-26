import styled from "styled-components"
import { Button } from "../Button/Buttom.component"

export const PaymentFormContainer = styled.div`
  // margin-top: 30px;

  height: 300px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgb(0, 0, 0, 0.12);
  padding: 0 50px;
  border-radius: 25px;
  border: 2px solid black;
  @media screen and (max-width: 768px) {
    height: 400px;
    padding: 0 30px;
    height: 250px;
    margin-top: 60px;
    border-radius: 0;
    background-color: rgb(0, 0, 0, 0.12);
    border: none;
  }
`

export const FormContainer = styled.form`
  color: black;
  height: 200px;
  width: 100%;

  .StripeElement {
    color: black;
    padding: 10px;
    border-radius: 5px;
    background-color: rgba(255, 255, 255);
    border: 2px solid black;
    @media screen and (max-width: 768px) {
      border: 1px solid black;
    }
  }

  .StripeElement--focus {
    outline: none;
    border: 2px solid rgba(0, 0, 255, 0.7);
    box-shadow: 0 0 0 2px  rgba(0, 0, 255, 0.7);
  }
`

export const PaymentButtonStyled = styled(Button)`
  margin-left: auto;
  margin-top: 30px;
`
