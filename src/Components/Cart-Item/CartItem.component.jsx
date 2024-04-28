import { useDispatch, useSelector } from "react-redux"
import { RemoveButton } from "../Checkout-Item/checkout-item.styles.jsx"
import "./cart-item.styles.jsx"
import { CartItemContainer, ItemDetails, Name } from "./cart-item.styles.jsx"
import { selectCartItems } from "../../Store/cart/cart.selectors"
import { removeCartItem } from "../../Store/cart/cart.actions"

const CartItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem
  const previousCartItems = useSelector(selectCartItems)
  const dispatch = useDispatch()

  const handleRemoveCartItemClick = () => {
    dispatch(removeCartItem(cartItem, previousCartItems))
  }
  return (
    <CartItemContainer>
      <img src={imageUrl} alt={name} />
      <ItemDetails>
        <Name>{name}</Name>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <div>
            {quantity}&nbsp;&nbsp; x &nbsp;&nbsp;${price}
          </div>
          <div>
            <RemoveButton onClick={handleRemoveCartItemClick}>
              &#10005;
            </RemoveButton>
          </div>
        </div>
      </ItemDetails>
    </CartItemContainer>
  )
}

export default CartItem
