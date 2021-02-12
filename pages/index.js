import { isEmpty } from "lodash"
import { useRouter } from "next/router"
import { useEffect } from "react"
import { Dashboard } from '../components'

export default function Home() {
  const router = useRouter()

  useEffect(() => {
    if (isEmpty(window.localStorage.getItem('isToken'))) {
      router.push('/login')
    }
  })

  return (
    <Dashboard />
  )
}
