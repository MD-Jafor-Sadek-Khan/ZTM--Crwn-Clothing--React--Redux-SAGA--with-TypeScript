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
  background-color: rgb(255, 255, 255, 0.4);
  padding: 0 50px;
  border-radius: 35px;
  @media screen and (max-width: 768px) {
    height: 400px;
    padding: 0 30px;
    height: 250px;
  }
`

export const FormContainer = styled.form`
  color: black;
  height: 200px;
  width: 100%;

  .StripeElement {
    color: white;
    padding: 10px;
    border-radius: 5px;
    background-color: rgba(0, 0, 0, 0.5);
    border: none;
  }

  .FormContainer .StripeElement input[type="number"] {
    color: white !important;
  }
  .StripeElement--focus {
    outline: none;
    box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.25);
  }
`

export const PaymentButtonStyled = styled(Button)`
  margin-left: auto;
  margin-top: 30px;
`
