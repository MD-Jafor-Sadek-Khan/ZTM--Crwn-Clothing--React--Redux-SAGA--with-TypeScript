import { initializeApp } from "firebase/app"
import {
  GoogleAuthProvider,
  signInWithPopup,
  signInWithRedirect,
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  User,
  NextOrObserver,
} from "firebase/auth"

import {
  doc,
  getDoc,
  setDoc,
  getFirestore,
  collection,
  writeBatch,
  query,
  getDocs,
  QueryDocumentSnapshot,
} from "firebase/firestore"
import { Category } from "../../Store/categories/category.types"

const firebaseConfig = {
  apiKey: "AIzaSyD4f9MwlbsNNWR_MGRktRrexiXNvBViI6w",
  authDomain: "crwn-clothing-db-304ab.firebaseapp.com",
  projectId: "crwn-clothing-db-304ab",
  storageBucket: "crwn-clothing-db-304ab.appspot.com",
  messagingSenderId: "86324865595",
  appId: "1:86324865595:web:ab6dd119179df691708a1e",
}

const fireBaseApp = initializeApp(firebaseConfig)

const googleProvider = new GoogleAuthProvider()

googleProvider.setCustomParameters({
  prompt: "select_account",
})

export const auth = getAuth()

export const singInWithGooglePopUp = () => signInWithPopup(auth, googleProvider)

export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, googleProvider)

const db = getFirestore()

export type Data = {
  title: string
}

export const addCollectionAndDocuments = async <T extends Data>(
  collectionName: string,
  data: T[]
): Promise<void> => {
  const collectionRef = collection(db, collectionName)
  const batch = writeBatch(db)

  data.forEach((item) => {
    const documentRef = doc(collectionRef, item.title.toLowerCase())
    batch.set(documentRef, item)
  })

  await batch.commit()
  console.log("done")
}

export type UserData = {
  createdAt: Date
  displayName: string
  email: string
}

export type AdditionalField = {
  displayName?: string
}

export const createUserDocumentFromAuth = async (
  userAuth: User,
  additionalField = {} as AdditionalField
): Promise<QueryDocumentSnapshot<UserData> | void> => {
  if (!userAuth) return

  const userDocRef = doc(db, "users", userAuth.uid)

  const userDocSnapShot = await getDoc(userDocRef)

  if (!userDocSnapShot.exists()) {
    const { email, displayName } = userAuth
    const createdAt = new Date()

    try {
      await setDoc(userDocRef, {
        email,
        displayName,
        createdAt,
        ...additionalField,
      })
    } catch (error) {
      console.log("User Creation Encountered Error! ", error)
    }
  }

  return userDocSnapShot as QueryDocumentSnapshot<UserData>
}

export const getCategoriesAndDocuments = async (): Promise<Category[]> => {
  const collectionRef = collection(db, "categories")
  const queryRef = query(collectionRef)
  const querySnapShot = await getDocs(queryRef)

  return querySnapShot.docs.map(
    (dataSnapShot) => dataSnapShot.data() as Category
  )
}

export const createAuthUserFromEmailAndPassword = async (
  email: string,
  password: string
) => {
  if (!email || !password) return

  return await createUserWithEmailAndPassword(auth, email, password)
}

export const SignInAuthUserFromEmailAndPassword = async (
  email: string,
  password: string
) => {
  if (!email || !password) return

  return await signInWithEmailAndPassword(auth, email, password)
}

export const userSignOut = async () => await signOut(auth)

export const onUserAuthStateChangedListner = (callBack: NextOrObserver<User>) =>
  onAuthStateChanged(auth, callBack)

export const getCurrentUser = (): Promise<User | null> => {
  return new Promise((resolve, reject) => {
    const unSubscribe = onAuthStateChanged(
      auth,
      (userAuth) => {
        unSubscribe()
        resolve(userAuth)
      },
      reject
    )
  })
}
