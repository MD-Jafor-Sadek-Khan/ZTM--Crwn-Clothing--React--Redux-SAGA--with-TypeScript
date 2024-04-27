import {
  ActionWithPayload,
  createAction,
} from "../../utils/Reducer-Utils/reducer.utils"
import { CategoryItem } from "../categories/category.types"
import { CART_ACTION_TYPES, CartItem } from "./cart.types"
import { withMatcher } from "../../utils/Reducer-Utils/reducer.utils"

// utils starts

const checkAddedItemToCart = (
  productToAdd: CategoryItem,
  cartItems: CartItem[]
) => {
  const foundItemsOnCart = cartItems.find((item) => {
    return item.id === productToAdd.id
  })

  if (foundItemsOnCart) {
    return cartItems.map((item) => {
      return item.id === productToAdd.id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    })
  } else {
    return [...cartItems, { ...productToAdd, quantity: 1 }]
  }
}

const checkDecrementedItemFromCart = (
  cartItemToRemove: CartItem,
  cartItems: CartItem[]
) => {
  const foundItemsOnCart = cartItems.find((item) => {
    return item.id === cartItemToRemove.id
  })

  if (foundItemsOnCart && foundItemsOnCart.quantity === 1) {
    return cartItems.filter((item) => {
      return item.id !== cartItemToRemove.id
    })
  }

  return cartItems.map((item) => {
    return item.id === cartItemToRemove.id
      ? { ...item, quantity: item.quantity - 1 }
      : item
  })
}

const checkRemoveCartItem = (
  cartItemToRemove: CartItem,
  cartItems: CartItem[]
) => {
  return cartItems.filter((item) => item.id !== cartItemToRemove.id)
}
// utils ends

// actions

export type SetCartItems = ActionWithPayload<
  CART_ACTION_TYPES.Set_Cart_Items,
  CartItem[]
>

export const setCartIconToggle = withMatcher((cartState: boolean) => {
  return createAction(CART_ACTION_TYPES.Set_Cart_Icon, cartState)
})

export const setCartItems = withMatcher((newCartItems: CartItem[]) => {
  return createAction(CART_ACTION_TYPES.Set_Cart_Items, newCartItems)
})

export const addItemsToCart = (
  productToAdd: CategoryItem,
  cartItems: CartItem[]
) => {
  const newCartItems = checkAddedItemToCart(productToAdd, cartItems)
  return setCartItems(newCartItems)
}

export const decrementItemFromCart = (
  cartItemToRemove: CartItem,
  cartItems: CartItem[]
) => {
  const newCartItems = checkDecrementedItemFromCart(cartItemToRemove, cartItems)
  return setCartItems(newCartItems)
}

export const removeCartItem = (
  cartItemToRemove: CartItem,
  cartItems: CartItem[]
) => {
  const newCartItems = checkRemoveCartItem(cartItemToRemove, cartItems)
  return setCartItems(newCartItems)
}
