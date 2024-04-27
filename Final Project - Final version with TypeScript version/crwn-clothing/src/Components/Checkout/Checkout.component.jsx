import CheckoutItem from "../Checkout-Item/CheckoutItem.component"
import {
  CheckoutContainer,
  CheckoutContainerFlex,
  CheckoutContainerWidth,
  CheckoutHeader,
  FormComponentContainer,
  HeaderBlock,
  Total,
} from "./checkout.styles.jsx"
import { useSelector } from "react-redux"
import {
  selectCartItems,
  selectCartTotal,
} from "../../Store/cart/cart.selectors"
import PaymentForm from "../PaymentForm/paymentForm.component.jsx"
import Space from "../Space/Space.component.jsx"

const Checkout = () => {
  const cartItems = useSelector(selectCartItems)
  const cartTotal = useSelector(selectCartTotal)

  return (
    <>
      <Space />
      <h1 style={{ color: "white", textAlign: "center" }}>Checkout</h1>
      <CheckoutContainer>
        <CheckoutContainerFlex>
          <CheckoutContainerWidth>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <CheckoutHeader>
                <HeaderBlock>
                  <span>Product</span>
                </HeaderBlock>
                <HeaderBlock>
                  <span>Description</span>
                </HeaderBlock>
                <HeaderBlock>
                  <span>Quantity</span>
                </HeaderBlock>
                <HeaderBlock>
                  <span>Price</span>
                </HeaderBlock>
                <HeaderBlock>
                  <span>Remove</span>
                </HeaderBlock>
              </CheckoutHeader>
            </div>
            <div>
              {cartItems.map((item) => {
                return <CheckoutItem key={item.id} cartItem={item} />
              })}
            </div>
          </CheckoutContainerWidth>
          <FormComponentContainer>
            <PaymentForm />
            <Total>Total: ${cartTotal}</Total>
          </FormComponentContainer>
        </CheckoutContainerFlex>
      </CheckoutContainer>
    </>
  )
}

export default Checkout
