import {
  Container, ImageProfile,
  TextName, TextEmail,
  ColProfile, Row,
  LogoutButton, RowBill,
  IsLoad, CardForm,
  CardTable,
} from './dashboardStyle'

const Dashboard = ({
  form,
  setForm,
  isProfile,
  isSnapshot,
  billdetails,
  handleLogout,
  handleAddNewCar,
  handleDeleteCar,
}) => {
  const filterBill = billdetails.filter(bill => bill.body.DENOM >= 100000)
  const dataDocs = []

  isSnapshot.forEach(doc => dataDocs.push({
    id: doc.id,
    car: doc.data().car,
    color: doc.data().color,
  }))

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
        <CardForm>
          <form className="row" onSubmit={handleAddNewCar}>
            <div className="input-group mb-3 col">
              <input
                required
                type="text"
                maxLength={30}
                aria-label="Car"
                value={form.car}
                placeholder="Input Car"
                className="form-control"
                aria-describedby="basic-addon1"
                onChange={(e) => setForm({ ...form, car: e.target.value })}
              />
            </div>
            <div className="input-group mb-3 col">
              <input
                required
                type="text"
                maxLength={30}
                aria-label="Color"
                value={form.color}
                className="form-control"
                placeholder="Input Color"
                aria-describedby="basic-addon1"
                onChange={(e) => setForm({ ...form, color: e.target.value })}
              />
            </div>
            <div className="btn-group mb-3 col-lg-1 col-xs-12" role="group" aria-label="Basic example">
              <button type="submit" className="btn btn-primary">Add Car</button>
            </div>
          </form>

          <CardTable>
            {!form.isLoad ? (
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">No.</th>
                    <th scope="col">Car</th>
                    <th scope="col">Color</th>
                    <th scope="col">Edit</th>
                    <th scope="col">Delete</th>
                  </tr>
                </thead>
                  <tbody>
                    {dataDocs.map((doc, idx) => (
                      <tr key={doc.id}>
                        <th scope="row">{idx+1}</th>
                        <td>{doc.car}</td>
                        <td>{doc.color}</td>
                        <td>Edit</td>
                        <td style={{ cursor: "pointer" }} onClick={() => handleDeleteCar(doc.id)}>Delete</td>
                      </tr>
                    ))}
                  </tbody>
              </table>
            ) : (
              <IsLoad>
                <div className="spinner-grow text-secondary" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              </IsLoad>
            )}
          </CardTable>
        </CardForm>
      
        {filterBill.map((item, idx) => (
          <p key={idx} style={{ padding: 0 }}>{`[${idx}]`}{` => `}{item.body.DENOM}</p>
        ))}
      </RowBill>
    </Container>
  )
}

export default Dashboard
