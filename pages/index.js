import { isEmpty } from "lodash"
import { useRouter } from "next/router"
import { useEffect } from "react"
import { Dashboard } from "../components"
import firebase from "firebase/app"
import initialFirebase from "../public/firebase"
import "firebase/firestore"

initialFirebase()
const db = firebase.firestore()

export default function Home() {
  const router = useRouter()

  useEffect(() => {
    if (isEmpty(window.localStorage.getItem('isToken'))) {
      router.push('/login')
    } else {
      db.collection('cars').get().then((snapshot) => {
        snapshot.forEach(doc => {
          console.log(doc.data())
        })
      })
    }
  })

  return (
    <Dashboard />
  )
}
