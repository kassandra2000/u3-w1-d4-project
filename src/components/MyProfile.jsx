import { Button, Col, Container, Dropdown, Row } from "react-bootstrap";

const MyProfile = () => {
  return (
    <Container className="container profile">
      <Row>
        <Col className="col-10 offset-1 text-white">
          <h1>Edit Profile</h1>
          <hr />
          <Row>
            <Col className="col-3">
              <div className="position-relative  ">
                <i className="bi bi-pen position-absolute bottom-0 start-0 bord"></i>
                <img
                  width="100%"
                  src="data:image/jpeg;base64,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"
                  alt="icon"
                />
              </div>
            </Col>
            <Col className="col-9">
              <p className="bg-secondary text-white ps-2 p-1">Strive Student</p>
              <label className="d-block fs-5" for="language">
                Language:
              </label>
              <Dropdown>
                <Dropdown.Toggle
                  className=" mt-2"
                  variant="outline-secondary"
                >
                  English
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="#italian">Italian</Dropdown.Item>
                  <Dropdown.Item href="#spanish">Spanish</Dropdown.Item>
                  <Dropdown.Item href="#fr">fr</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <hr />
              <p className="mt-3 fs-5">Maturity Settings:</p>
              <p className="bg-secondary p text-white ps-2 p-1 w-75">
                ALL MATURITY RATINGS
              </p>
              <p className="font mb-4">
                Show titles of all maturity rating for this profile.
              </p>
              <p className="border1 d-inline pe-3 ps-3 pt-1 pb-1">EDIT</p>
              <hr />
              <p className="mt-3 fs-5">Autoplay controls</p>
              <div className="form-check">
                <input
                  className="form-check-input unchecked"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                  checked
                />
                <label className="form-check-label font" for="flexCheckDefault">
                  Autoplay next episode in a series on all devices.
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input unchecked"
                  type="checkbox"
                  value=""
                  id="flexCheckChecked"
                  checked
                />
                <label
                  className="form-check-label font mb-3"
                  for="flexCheckChecked"
                >
                  Autoplay previw while browslng on all devices.
                </label>
              </div>
            </Col>
            <hr />
            <Row >
              <Col className="col-12 col-sm-3">
                <Button
                 
                  className="bg-white text-dark fw-bold rounded-0 d-inline wid-1  me-3 w-100"
                variant="btn-outline-secondary mb-1"
                >
                  SAVE
                </Button>
              </Col>
              <Col className="col-12 col-sm-4">
                <button
                  type="button"
                  className="btn mb-1 btn-outline-secondary rounded-0 d-inline wid-2 me-3 w-100"
                >
                  CANCEL
                </button>
              </Col>
              <Col className="col-12 col-sm-5">
                <button
                  type="button"
                  className="btn mb-1 btn-outline-secondary rounded-0 d-inline w-100 mb-5"
                >
                  DELETE PROFILE
                </button>
              </Col>
            </Row>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};
export default MyProfile;
