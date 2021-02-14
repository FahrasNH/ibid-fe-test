import { isEmpty, set } from "lodash"
import { useRouter } from "next/router"
import { useState, useEffect } from "react"
import { Dashboard } from "../components"
import firebase from "firebase/app"
import initialFirebase from "../public/firebase"
import "firebase/firestore"

export default function Home() {
  initialFirebase()
  const router = useRouter()
  const db = firebase.firestore()
  const [isProfile, setProfile] = useState({
    type: '',
    name: '',
    email: '',
    imageUrl: '',
    account_id: '',
  })
  const [billdetails, setBilldetails] = useState({
    "status": 1,
    "message": "Sukses",
    "data": {
      "system_message": "SUCCESS",
      "response": {
        "additionaldata": [],
        "billdetails": [
          {
            "adminfee": "0.0",
            "billid": "8",
            "currency": "360",
            "title": "TELKOMSEL 50rb - 50.149",
            "totalamount": "50149.00",
            "descriptions": null,
            "body": {
              "DENOM": 50000,
            }
          },
          {
            "adminfee": "0.0",
            "billid": "9",
            "currency": "360",
            "title": "TELKOMSEL 75rb - 74.050",
            "totalamount": "74050.00",
            "descriptions": null,
            "body": {
              "DENOM": 75000,
            }
          },
          {
            "adminfee": "0.0",
            "billid": "10",
            "currency": "360",
            "title": "TELKOMSEL 100rb - 98.264",
            "totalamount": "98264.00",
            "descriptions": null,
            "body": {
              "DENOM": 100000,
            }
          },
          {
            "adminfee": "0.0",
            "billid": "11",
            "currency": "360",
            "title": "TELKOMSEL 150rb - 146.600",
            "totalamount": "146600.00",
            "descriptions": null,
            "body": {
              "DENOM": 150000,
            }
          },
          {
            "adminfee": "0.0",
            "billid": "12",
            "currency": "360",
            "title": "TELKOMSEL 200rb - 194.900",
            "totalamount": "194900.00",
            "descriptions": null,
            "body": {
              "DENOM": 200000,
            }
          }
        ],
        "billername": "PULSA TSEL",
        "inquiryid": "27190993",
        "paymenttype": "CLOSE_PAYMENT",
        "responsecode": "0000",
        "responsemsg": "SUCCESS",
        "subscriberid": "081311529594",
        "subscribername": ""
      },
      "trace": {
        "session_id": "81215AEFADFB710C1258F79ABA1AD710.node3",
        "request_date_time": "20190704185319",
        "words": "779b7f8280415b568cdfd0abcc20eb8c3e18b585",
        "biller_id": "9900002",
        "account_number": "081311529594",
        "systrace": 1564026434,
        "inquiry_id": "27190993"
      }
    }
  })
  const [isSnapshot, setSnapshot] = useState([])
  const [show, setShow] = useState(false)
  const [form, setForm] = useState({
    id: '',
    car: '',
    color: '',
    isLoad: false,
  })

  useEffect(() => {
    if (isEmpty(window.localStorage.getItem('isToken'))) {
      router.push('/login')
    } else {
      setProfile(JSON.parse(window.localStorage.getItem('isProfile')))
    }
  }, [])

  db.collection('cars').get().then((snapshot) => {
    setSnapshot(snapshot)
  })

  const handleShow = (doc) => {
    setShow(true)

    setForm({
      ...form,
      id: doc.id,
      car: doc.car,
      color: doc.color,
    })
  }

  const handleClose = () => {
    setShow(false)

    setForm({
      ...form,
      id: '',
      car: '',
      color: '',
    })
  }

  const handleLogout = () => {
    window.localStorage.removeItem('isToken')
    window.localStorage.removeItem('isProfile')

    router.push('/login')
  }

  const handleAddNewCar = (event) => {
    event.preventDefault()

    setForm({ ...form, isLoad: true, })
    db.collection('cars').add(form).then(() => {
      setForm({ car: '', color: '', isLoad: false, })
    })
  }

  const handleDeleteCar = (id) => {
    setForm({ ...form, isLoad: true, })
    db.collection('cars').doc(id).delete().then(() => {
      setForm({ ...form, isLoad: false, })
    })
  }

  const handleUpdateCar = () => {
    setForm({ ...form, isLoad: true, })
    db.collection('cars').doc(form.id).update({
      id: form.id,
      car: form.car,
      color: form.color,
    }).then(() => {
      setShow(false)

      setForm({ ...form, isLoad: false, })
    })
  }

  return (
    <Dashboard
      form={form}
      show={show}
      setForm={setForm}
      isProfile={isProfile}
      handleShow={handleShow}
      isSnapshot={isSnapshot}
      handleClose={handleClose}
      handleLogout={handleLogout}
      handleAddNewCar={handleAddNewCar}
      handleDeleteCar={handleDeleteCar}
      handleUpdateCar={handleUpdateCar}
      billdetails={billdetails.data.response.billdetails}
    />
  )
}
