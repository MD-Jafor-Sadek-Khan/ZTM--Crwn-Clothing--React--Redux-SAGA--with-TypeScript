import { UnknownAction } from "redux"
import { CartItem } from "./cart.types"
import { setCartIconToggle, setCartItems } from "./cart.actions"
//

export type CartState = {
  readonly cartToggle: boolean
  readonly cartItems: CartItem[]
}

const CART_INITIAL_VALUES: CartState = {
  cartToggle: false,
  cartItems: [],
}

export const cartReducer = (
  state = CART_INITIAL_VALUES,
  action: UnknownAction
): CartState => {
  if (setCartIconToggle.match(action)) {
    return {
      ...state,
      cartToggle: action.payload,
    }
  }

  if (setCartItems.match(action)) {
    return {
      ...state,
      cartItems: action.payload,
    }
  }

  return state
}
