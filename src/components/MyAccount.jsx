import { Col, Container, Row } from "react-bootstrap";

const MyAccount = () => {
  return (
    <Container className="account mb-5 ">
      <h1>Account</h1>
      <hr />
      <Row >
        <Col className="col-4">
          <p>MEMBERSHIP & BILLING</p>
          <button>Cancel Membership</button>
        </Col>
        <Col className="col-8">
          <Row >
            <Col className="col-6">
              <p className="fw-bold ">student@strive.scholl</p>
              <p>Password: *******</p>
              <p>Phone: 321 044 1279</p>
            </Col>
            <Col className="col-6">
              <a className="d-block text-end" href="#1">
                Change account email
              </a>
              <a className="d-block text-end" href="#1">
                Change password
              </a>
              <a className="d-block text-end" href="#1">
                Change phone number
              </a>
            </Col>
            <hr />
          </Row>
        </Col>
        <Row >
          <Col className="col-4"></Col>
          <Col className="col-8">
            <Row >
              <Col className="col-6">
                <p className="fw-bold ">PayPal admin#1strive.scholl</p>
              </Col>

              <Col className="col-6">
                <a className="d-block text-end" href="#1">
                  Update payment info
                </a>
                <a className="d-block text-end" href="#1">
                  Billing details
                </a>
              </Col>
            </Row>
          </Col>
        </Row>
        <hr />

        <Row >
          <Col className="col-6"></Col>
          <Col className="col-6">
            <a className="d-block text-end" href="#1">
              Redeem gift card or promo code
            </a>
            <a className="d-block text-end" href="#1">
              Where to buy gift card
            </a>
          </Col>
        </Row>
      </Row>
      <hr className="hr" />
      <Row >
        <Col className="col-4">
          <p>PLAN DETAILS</p>
        </Col>
        <Col className="col-8">
          <Row>
            <Col className="col-6">
              <p className="fw-bold  d-inline">Premium</p>
              <span className="border border-dark">
                ULTRA <span className="fw-bold">HD</span>
              </span>
            </Col>
            <Col className="col-6">
              <a className="d-block text-end" href="#1">
                Change plain
              </a>
            </Col>
          </Row>
        </Col>
      </Row>
      <hr />
      <Row>
        <Col className="col-4">
          <p>SETTINGS</p>
        </Col>
        <Col className="col-8">
          <Row>
            <Col className="col-6">
              <a className="d-block" href="#1">
                Parental controls
              </a>
              <a className="d-block" href="#1">
                Test participation
              </a>
              <a className="d-block" href="#1">
                Manage download devices
              </a>
              <a className="d-block" href="#1">
                Activate a device
              </a>
              <a className="d-block" href="#1">
                Recent device straìeaming activity
              </a>
              <a className="d-block" href="#1">
                Sign out of all devices{" "}
              </a>
            </Col>
            <Col className="col-6"></Col>
          </Row>
        </Col>
      </Row>

      <hr />

      <Row>
        <Col className="col-4">
          <p>MY PROFILE</p>
        </Col>
        <Col className="col-8">
          <Row>
            <Col className="col-6">
              <p className="fw-bold ">Strive Student</p>
            </Col>
            <Col className="col-6">
              <a className="d-block text-end" href="#1">
                Manage profiles
              </a>
              <a className="d-block text-end" href="#1">
                Add profile email
              </a>
            </Col>
            <Col className="col-4">
              <a className="d-block" href="#1">
                Language
              </a>
              <a className="d-block" href="#1">
                Playback settings
              </a>
              <a className="d-block" href="#1">
                Subtitle appearance
              </a>
            </Col>
            <Col className="col-4">
              <a className="d-block" href="#1">
                Viewing activity
              </a>
              <a className="d-block" href="#1">
                Ratings
              </a>
            </Col>
            <Col className="col-4"></Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};
export default MyAccount;
