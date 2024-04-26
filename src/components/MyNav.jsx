import { Button, Container, Nav, Navbar } from "react-bootstrap";

const MyNav = () => {
  return (
    <Nav className="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
      <Container fluid>
        <Navbar.Brand className="navbar-brand" href="#nav">
          <img src="../assets/logo.png" alt="img" />
        </Navbar.Brand>
        <Button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
           <span class="navbar-toggler-icon"></span>
        </Button>
        <Navbar.Collapse className="collapse navbar-collapse" id="navbarSupportedContent">
          <Nav className="navbar-nav me-auto mb-2 mb-lg-0">
            <Nav.Link className="nav-item">
              <a className="nav-link active fw-bold" href="#home">
                Home
              </a>
            </Nav.Link>
            <Nav.Link className="nav-item">
              <a className="nav-link fw-bold" href="#tv">
                TV Shows
              </a>
            </Nav.Link>
            <Nav.Link className="nav-item">
              <a className="nav-link fw-bold" href="#movie">
                Movies
              </a>
            </Nav.Link>
            <Nav.Link className="nav-item">
              <a className="nav-link fw-bold" href="#add">
                Recently Added
              </a>
            </Nav.Link>
            <Nav.Link className="nav-item">
              <a className="nav-link fw-bold" href="#list">
                My List
              </a>
            </Nav.Link>
          </Nav>
          <div className="d-flex align-items-center">
            <i className="bi bi-search icons"></i>
            <div id="kids" className="fw-bold">
              KIDS
            </div>
            <i className="bi bi-bell icons"></i>
            <i className="bi bi-person-circle icons"></i>
          </div>
        </Navbar.Collapse>
      </Container>
    </Nav>
  );
};

export default MyNav;
