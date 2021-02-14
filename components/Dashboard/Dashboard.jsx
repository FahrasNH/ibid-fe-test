import {
  Container, ImageProfile,
  TextName, TextEmail,
  ColProfile, Row,
  LogoutButton, RowBill,
} from './dashboardStyle'

const Dashboard = ({
  handleLogout,
  isProfile,
  billdetails,
}) => {
  const filterBill = billdetails.filter(bill => bill.body.DENOM >= 100000)

  return (
    <Container>
      <nav className="navbar navbar-expand-lg navbar-light mt-3">
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
        {filterBill.map((item, idx) => (
          <p key={idx} style={{ padding: 0 }}>{`[${idx}]`}{` => `}{item.body.DENOM}</p>
        ))}
      </RowBill>
    </Container>
  )
}

export default Dashboard
