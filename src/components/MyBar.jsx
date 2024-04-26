import { Container, Dropdown } from "react-bootstrap";

const MyBar = () => {
  return (
    <Container fluid className=" bar  px-4">
      <div className="d-flex justify-content-between">
        <div className="d-flex">
          <h2 className="mb-4">TV Shows</h2>
          <div className="btn-group" role="group">
            <Dropdown className=" ms-4 mt-1">
              <Dropdown.Toggle
                className=" btn-sm  rounded-0 "
                variant="outline-secondary"
              >
                Genres
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#Comedy">Comedy</Dropdown.Item>
                <Dropdown.Item href="#Drama">Drama</Dropdown.Item>
                <Dropdown.Item href="#Thriller">Thriller</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>
        <div>
          <i className="bi bi-grid icons"></i>
          <i className="bi bi-grid-3x3 icons"></i>
        </div>
      </div>
    </Container>
  );
};
export default MyBar;
