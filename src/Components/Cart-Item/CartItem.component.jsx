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
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-evenly",
          width: "100%",
        }}
      >
        <ItemDetails>
          <Name>{name}</Name>
          <div>
            {quantity}&nbsp;&nbsp; x &nbsp;&nbsp;${price}
          </div>
        </ItemDetails>
        <div style={{ marginRight: "10px" }}>
          <RemoveButton onClick={handleRemoveCartItemClick}>
            &#10005;
          </RemoveButton>
        </div>
      </div>
    </CartItemContainer>
  )
}

export default CartItem
