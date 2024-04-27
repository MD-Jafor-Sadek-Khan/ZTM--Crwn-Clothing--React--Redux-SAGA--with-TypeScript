import { all, call, put, takeLatest } from "typed-redux-saga/macro"
import { USER_ACTION_TYPE } from "./user.types"
import {
  SignInAuthUserFromEmailAndPassword,
  createAuthUserFromEmailAndPassword,
  createUserDocumentFromAuth,
  getCurrentUser,
  singInWithGooglePopUp,
  userSignOut,
  AdditionalField,
} from "../../utils/Firebase-Utils/firebase.utils"
import {
  signInFalied,
  signInSuccess,
  signOutFailed,
  signOutSuccess,
  signUpFailed,
  signUpSuccess,
  EmailSignInStart,
  SignUpStart,
  SignUpSuccess,
} from "./user.actions"

import { User } from "firebase/auth"

export function* getSnapShotFromUserAuth(
  userAuth: User,
  additionalField?: AdditionalField
) {
  try {
    const userDocSnapShot = yield* call(
      createUserDocumentFromAuth,
      userAuth,
      additionalField
    )
    if (userDocSnapShot) {
      yield* put(
        signInSuccess({ id: userDocSnapShot.id, ...userDocSnapShot.data() })
      )
    }
  } catch (error) {
    yield* put(signInFalied(error as Error))
  }
}

export function* singInAfterSignUp({
  payload: { user, additionalField },
}: SignUpSuccess) {
  try {
    yield* call(getSnapShotFromUserAuth, user, additionalField)
  } catch (error) {
    yield* put(signUpFailed(error as Error))
  }
}

export function* signUp({
  payload: { email, password, displayName },
}: SignUpStart) {
  try {
    const userCredential = yield* call(
      createAuthUserFromEmailAndPassword,
      email,
      password
    )

    if (userCredential) {
      const { user } = userCredential
      yield* put(signUpSuccess(user, { displayName }))
    }
  } catch (error) {
    yield* put(signUpFailed(error as Error))
  }
}

export function* signOut() {
  try {
    yield* call(userSignOut)
    yield* put(signOutSuccess())
  } catch (error) {
    yield* put(signOutFailed(error as Error))
  }
}

export function* signInWithEmail({
  payload: { email, password },
}: EmailSignInStart) {
  try {
    const userCredential = yield* call(
      SignInAuthUserFromEmailAndPassword,
      email,
      password
    )

    if (userCredential) {
      const { user } = userCredential
      yield* call(getSnapShotFromUserAuth, user)
    }
  } catch (error) {
    yield* put(signInFalied(error as Error))
  }
}

export function* signInWithGoogle() {
  try {
    const { user } = yield* call(singInWithGooglePopUp)
    yield* call(getSnapShotFromUserAuth, user)
  } catch (error) {
    yield* put(signInFalied(error as Error))
  }
}

export function* isUserAuthenticated() {
  try {
    const userAuth = yield* call(getCurrentUser)
    if (!userAuth) return
    yield* call(getSnapShotFromUserAuth, userAuth)
  } catch (error) {}
}

export function* onSignUpStart() {
  yield* takeLatest(USER_ACTION_TYPE.Sign_Up_Start, signUp)
}

export function* onSignUpSuccess() {
  yield* takeLatest(USER_ACTION_TYPE.Sign_Up_Success, singInAfterSignUp)
}

export function* onEmailSignInStart() {
  yield* takeLatest(USER_ACTION_TYPE.Email_Sign_In_Start, signInWithEmail)
}

export function* onGoogleSignInStart() {
  yield* takeLatest(USER_ACTION_TYPE.Google_Sign_In_Start, signInWithGoogle)
}

export function* onCheckUserSession() {
  yield* takeLatest(USER_ACTION_TYPE.Check_User_Session, isUserAuthenticated)
}

export function* onSignOutStart() {
  yield* takeLatest(USER_ACTION_TYPE.Sign_Out_Start, signOut)
}

export function* userSagas() {
  yield* all([
    call(onCheckUserSession),
    call(onGoogleSignInStart),
    call(onEmailSignInStart),
    call(onSignUpStart),
    call(onSignUpSuccess),
    call(onSignOutStart),
  ])
}
