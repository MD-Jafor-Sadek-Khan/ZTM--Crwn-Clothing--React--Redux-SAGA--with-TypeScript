import "./cart-dropdown.styles.jsx"
import { Button_Type_ClassName } from "../Button/Buttom.component"
import CartItem from "../Cart-Item/CartItem.component"
import { useNavigate } from "react-router-dom"
import {
  ButtonStyled,
  CartDropdownContainer,
  CartItems,
  EmptyMessage,
} from "./cart-dropdown.styles.jsx"
import { useSelector } from "react-redux"
import {
  selectCartItems,
  selectCartToggle,
} from "../../Store/cart/cart.selectors"

export const CartDropdown = () => {
  const cartItems = useSelector(selectCartItems)
  const isopen = useSelector(selectCartToggle)

  const navigate = useNavigate()

  const handleCheckoutNavigation = () => {
    navigate("/checkout")
  }

  return (
    <CartDropdownContainer isopen={isopen}>
      <CartItems>
        {cartItems.length > 0 ? (
          cartItems.map((item) => {
            return <CartItem key={item.id} cartItem={item} />
          })
        ) : (
          <EmptyMessage>Your Cart Is Empty</EmptyMessage>
        )}
      </CartItems>
      <ButtonStyled
        buttonType={Button_Type_ClassName.base}
        onClick={handleCheckoutNavigation}
      >
        Go to Checkout
      </ButtonStyled>
    </CartDropdownContainer>
  )
}
