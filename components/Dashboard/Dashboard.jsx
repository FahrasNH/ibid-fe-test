import { Modal, Button } from 'react-bootstrap'
import {
  Container, ImageProfile,
  TextName, TextEmail,
  ColProfile, Row,
  LogoutButton, RowBill,
  IsLoad, CardForm,
  CardTable,
} from './dashboardStyle'

const Dashboard = ({
  show,
  form,
  setForm,
  isProfile,
  handleShow,
  handleClose,
  isSnapshot,
  billdetails,
  handleLogout,
  handleAddNewCar,
  handleDeleteCar,
  handleUpdateCar,
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
                        <td onClick={() => handleShow(doc)}>Edit</td>
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
      
        <p>Barikut ini adalah Output dari test No. 6</p>
        {filterBill.map((item, idx) => (
          <p key={idx} style={{ padding: 0 }}>{`[${idx}]`}{` => `}{item.body.DENOM}</p>
        ))}
      </RowBill>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className="row">
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
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleUpdateCar}>
            Update Car
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  )
}

export default Dashboard
