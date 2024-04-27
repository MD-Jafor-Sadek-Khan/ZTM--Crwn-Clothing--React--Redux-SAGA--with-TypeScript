import styled, { keyframes } from "styled-components"
import { Button } from "../Button/Buttom.component"

// Define keyframes for the pop-up animation
const fadeInAnimation = keyframes`
  0% {
    opacity: 0;
    transform: translateX(2%) translateY(-2%);
  }
  100% {
    opacity: 1;
    transform: translateX(0) translateY(0);
  }
`

// Define keyframes for the pop-out animation
const fadeOutAnimation = keyframes`
  0% {
    opacity: 1;
    transform: translateX(0) translateY(0);
  }
  100% {
    opacity: 0;
    transform: translateX(100%) translateY(-100%);
  }
`

export const CartDropdownContainer = styled.div`
  background-image: url("https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/89b87ee4-45fe-4497-a810-4056caa31bb8/dangg9m-9524c00c-ac8b-4848-90d9-273dbad5278a.jpg/v1/fill/w_1024,h_672,q_75,strp/amalfi_coast___sunset_by_federicoparlato_dangg9m-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NjcyIiwicGF0aCI6IlwvZlwvODliODdlZTQtNDVmZS00NDk3LWE4MTAtNDA1NmNhYTMxYmI4XC9kYW5nZzltLTk1MjRjMDBjLWFjOGItNDg0OC05MGQ5LTI3M2RiYWQ1Mjc4YS5qcGciLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.keF082hBCiEfHtXq27LHVY5v9Fw7x4nalxWkAy-dfVw");
  background-size: cover;
  background-position: center;
  position: absolute;
  width: 260px;
  height: 340px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  background-color: white;
  top: 48px;
  right: 72px;
  z-index: 5;
  color: black;
  border-radius: 15px;
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.2);

  /* Animation */
  animation: ${({ isOpen }) => (isOpen ? fadeInAnimation : fadeOutAnimation)}
    0.3s ease forwards;

  @media (max-width: 768px) {
    top: 49px;
    right: 33px;
  }
`

export const EmptyMessage = styled.span`
  font-size: 18px;
  margin: 50px auto;
  background-color: black;
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
`

export const CartItems = styled.div`
  height: 240px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
  flex: 1;
  overflow: auto;
  background-color: rgb(0, 0, 0, 0.7);
  color: white;
  border-radius: 10px;
  margin-bottom: 5px;

  /* Hide scrollbar for Webkit browsers */
  &::-webkit-scrollbar {
    width: 0; /* remove scrollbar width */
    background: transparent; /* make scrollbar transparent */
  }

  /* Optional: Hide scrollbar for Firefox */
  scrollbar-width: none;
`
export const ButtonStyled = styled(Button)`
  margin-top: auto;
`
