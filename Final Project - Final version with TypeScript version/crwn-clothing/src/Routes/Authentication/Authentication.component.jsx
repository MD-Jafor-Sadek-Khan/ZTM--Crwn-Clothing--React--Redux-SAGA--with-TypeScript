import SignInForm from "../../Components/SignInForm/SignInForm.component"
import SignUpForm from "../../Components/SignUpForm/SignUpForm.component"
import Space from "../../Components/Space/Space.component"
import "./authentication.styles.jsx"
import { AuthFormContainerStyled } from "./authentication.styles.jsx"

const Authentication = () => {
  return (
    <>
      <Space />
      <AuthFormContainerStyled>
        <SignInForm />
        <SignUpForm />
      </AuthFormContainerStyled>
    </>
  )
}

export default Authentication
