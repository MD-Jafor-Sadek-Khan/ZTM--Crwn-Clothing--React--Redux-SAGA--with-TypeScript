import { UnknownAction } from "redux"
import {
  signInFalied,
  signInSuccess,
  signOutFailed,
  signOutSuccess,
  signUpFailed,
} from "./user.actions"
import { UserData } from "../../utils/Firebase-Utils/firebase.utils"

export type UserState = {
  readonly currentUser: null | UserData
  readonly isLoading: boolean
  readonly error: null | Error
}

const USER_INITIAL_VALUE: UserState = {
  currentUser: null,
  isLoading: false,
  error: null,
}

export const userReducer = (
  state = USER_INITIAL_VALUE,
  action: UnknownAction
): UserState => {

  console.log("inside reducer",action)

  if (signInSuccess.match(action)) {
    return {
      ...state,
      currentUser: action.payload,
    }
  }

  if (
    signUpFailed.match(action) ||
    signOutFailed.match(action) ||
    signInFalied.match(action)
  ) {
    return {
      ...state,
      error: action.payload,
    }
  }

  if (signOutSuccess.match(action)) {
    return {
      ...state,
      currentUser: null,
    }
  }

  return state
}
