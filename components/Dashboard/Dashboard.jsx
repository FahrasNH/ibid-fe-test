import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import { isEmpty } from 'lodash'
import { data } from './test-6'
import {
  Container, ImageProfile,
  TextName, TextEmail,
  ColProfile, Row,
  LogoutButton, RowBill,
} from './dashboardStyle'

const Dashboard = () => {
  const router = useRouter()
  const [billdetails, setBilldetails] = useState([])
  const [isProfile, setProfile] = useState({
    type: '',
    name: '',
    email: '',
    imageUrl: '',
    account_id: '',
  })

  useEffect(() => {
    const bills = data.data.response.billdetails
    if (isEmpty(window.localStorage.getItem('isToken'))) {
      router.push('/login')
    } else {
      setBilldetails(bills.filter(bill => bill.body.DENOM >= 100000))
      setProfile(JSON.parse(window.localStorage.getItem('isProfile')))
    }
  }, [])

  const handleLogout = () => {
    window.localStorage.removeItem('isToken')
    window.localStorage.removeItem('isProfile')

    router.push('/')
  }

  return (
    <Container>
      <nav class="navbar navbar-expand-lg navbar-light mt-3">
        <Row className="row">
          <ColProfile className="col">
            <ImageProfile src={isProfile.imageUrl || require('../../assets/icons/ibid.png')} alt={`${isProfile.type || 'load'}-img`}/>
            <div>
              <TextName>{isProfile.name}</TextName>
              <TextEmail>{isProfile.email}</TextEmail>
            </div>
          </ColProfile>
          <div className="col">
            <LogoutButton className="btn btn-primary" onClick={handleLogout}>Keluar</LogoutButton>
          </div>
        </Row>
      </nav>
      <RowBill>
        {
          billdetails.map((item, idx) => (
            <p key={idx} style={{ padding: 0 }}>{`[${idx}]`}{` => `}{item.body.DENOM}</p>
          ))
        }
      </RowBill>
    </Container>
  )
}

export default Dashboard
