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
  isSnapshot,
}) => {
  const filterBill = billdetails.filter(bill => bill.body.DENOM >= 100000)
  const dataDocs = []

  isSnapshot.forEach(doc => dataDocs.push(doc.data()))

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
        <table className="table">
          <thead>
            <tr>
              <th scope="col">No.</th>
              <th scope="col">Car</th>
              <th scope="col">Color</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
          {dataDocs.map((doc, idx) => (
            <tr key={idx}>
              <th scope="row">{idx+1}</th>
              <td>{doc.car}</td>
              <td>{doc.color}</td>
              <td>Act</td>
            </tr>
          ))}
          </tbody>
        </table>
      
        {filterBill.map((item, idx) => (
          <p key={idx} style={{ padding: 0 }}>{`[${idx}]`}{` => `}{item.body.DENOM}</p>
        ))}
      </RowBill>
    </Container>
  )
}

export default Dashboard
