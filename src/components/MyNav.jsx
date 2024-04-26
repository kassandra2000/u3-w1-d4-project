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
           <span className="navbar-toggler-icon"></span>
        </Button>
        <Navbar.Collapse className="collapse navbar-collapse" id="navbarSupportedContent">
          <Nav className="navbar-nav me-auto mb-2 mb-lg-0">
            <Nav.Link href="#home">
              
                Home
             
            </Nav.Link>
            <Nav.Link href="#tv">
              
                TV Shows
              
            </Nav.Link>
            <Nav.Link  href="#movie">
              
                Movies
             
            </Nav.Link>
            <Nav.Link  href="#add" >
               
                Recently Added
              
            </Nav.Link>
            <Nav.Link className="nav-item"href="#list">
             
                My List
             
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
