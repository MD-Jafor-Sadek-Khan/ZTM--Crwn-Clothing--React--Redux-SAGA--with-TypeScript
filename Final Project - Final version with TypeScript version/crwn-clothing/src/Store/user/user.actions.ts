import {
  ActionWithPayload,
  createAction,
  withMatcher,
  Action,
} from "../../utils/Reducer-Utils/reducer.utils"
import { USER_ACTION_TYPE } from "./user.types"
import {
  AdditionalField,
  UserData,
} from "../../utils/Firebase-Utils/firebase.utils"

export type CheckUserSession = Action<USER_ACTION_TYPE.Check_User_Session>

export type SetCurrentUser = ActionWithPayload<
  USER_ACTION_TYPE.Switch_Current_User,
  UserData
>

export type GoogleSignInStart = Action<USER_ACTION_TYPE.Google_Sign_In_Start>

export type EmailSignInStart = ActionWithPayload<
  USER_ACTION_TYPE.Email_Sign_In_Start,
  {
    email: string
    password: string
  }
>
export const checkUserSession = withMatcher((): CheckUserSession => {
  return createAction(USER_ACTION_TYPE.Check_User_Session)
})

export const setCurrentUser = withMatcher((user:UserData): SetCurrentUser => {
  return createAction(USER_ACTION_TYPE.Switch_Current_User, user)
})

export const googleSignInStart = withMatcher((): GoogleSignInStart => {
  return createAction(USER_ACTION_TYPE.Google_Sign_In_Start)
})

export const emailSignInStart = withMatcher(
  (email: string, password: string): EmailSignInStart => {
    return createAction(USER_ACTION_TYPE.Email_Sign_In_Start, {
      email,
      password,
    })
  }
)

export type SignInSuccess = ActionWithPayload<
  USER_ACTION_TYPE.Sign_In_Success,
  UserData
>
export const signInSuccess = withMatcher((user: UserData): SignInSuccess => {
  return createAction(USER_ACTION_TYPE.Sign_In_Success, user)
})

export type SignInFalied = ActionWithPayload<
  USER_ACTION_TYPE.Sign_In_Falied,
  Error
>
export const signInFalied = withMatcher((error: Error): SignInFalied => {
  return createAction(USER_ACTION_TYPE.Sign_In_Falied, error)
})

export type SignUpStart = ActionWithPayload<
  USER_ACTION_TYPE.Sign_Up_Start,
  {
    email: string
    password: string
    displayName: string
  }
>
export const signUpStart = withMatcher(
  (email: string, password: string, displayName: string): SignUpStart => {
    return createAction(USER_ACTION_TYPE.Sign_Up_Start, {
      email,
      password,
      displayName,
    })
  }
)

export type SignUpSuccess = ActionWithPayload<
  USER_ACTION_TYPE.Sign_Up_Success,
  {
    user: UserData
    additionalField: AdditionalField
  }
>

export const signUpSuccess = withMatcher(
  (user: UserData, additionalField: AdditionalField): SignUpSuccess => {
    return createAction(USER_ACTION_TYPE.Sign_Up_Success, {
      user,
      additionalField,
    })
  }
)

export type SignUpFailed = ActionWithPayload<
  USER_ACTION_TYPE.Sign_Up_Failed,
  Error
>
export const signUpFailed = withMatcher((error: Error): SignUpFailed => {
  return createAction(USER_ACTION_TYPE.Sign_Up_Failed, error)
})

export type SignOutStart = Action<USER_ACTION_TYPE.Sign_Out_Start>
export const signOutStart = withMatcher((): SignOutStart => {
  return createAction(USER_ACTION_TYPE.Sign_Out_Start)
})

export type SignOutSuccess = Action<USER_ACTION_TYPE.Sign_Out_Success>
export const signOutSuccess = withMatcher((): SignOutSuccess => {
  return createAction(USER_ACTION_TYPE.Sign_Out_Success)
})

export type SignOutFailed = ActionWithPayload<
  USER_ACTION_TYPE.Sign_Out_Failed,
  Error
>
export const signOutFailed = withMatcher((error: Error): SignOutFailed => {
  return createAction(USER_ACTION_TYPE.Sign_Out_Failed, error)
})
