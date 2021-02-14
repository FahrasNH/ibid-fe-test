import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/analytics'

const config = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_PUBLIC_API_KEY,
  authDomain: process.NEXT_PUBLIC_FIREBASE_PUBLIC_AUTH_DOMAIN || 'ibid-fe.firebaseapp.com',
  databaseURL: process.env.NEXT_PUBLIC_FIREBASE_PUBLIC_DB_URL,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PUBLIC_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_PUBLIC_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_PUBLIC_MESSAGING_SENDER_ID,
}

export default function initialFirebase() {
  if (!firebase.apps.length) {
    firebase.initializeApp(config)
  }
}