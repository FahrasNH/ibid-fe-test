import { isEmpty } from "lodash"
import { useRouter } from "next/router"
import { useEffect } from "react"

export default function Home() {
  const router = useRouter()

  useEffect(() => {
    if (isEmpty(window.localStorage.getItem('isToken'))) {
      router.push('/login')
    }
  })

  return (
    <>Logging</>
  )
}
