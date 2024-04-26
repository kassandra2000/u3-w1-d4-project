import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";
import MyNav from "./components/MyNav";
import MyBar from "./components/MyBar";
import Myfooter from "./components/MyFooter";
import MyGallery from "./components/MyGallery";

import { Container, Row } from "react-bootstrap";
import MyAccount from "./components/MyAccount";
import MyProfile from "./components/MyProfile";
import MyGalleryStar from "./components/MyGalleryStar";

function App() {
  return (
    <div className="App">
      <MyNav />
      <MyBar />
      <Container fluid className="px-4 film">
        <h4>Trending Now</h4>
        <Row className=" row-cols-2 row-cols-sm-3 row-cols-lg-6  mb-4">
          <MyGalleryStar name="Batman" />
        </Row>

        <h4>Watch it Again</h4>
        <Row className="row-cols-2 row-cols-sm-3 row-cols-lg-6  mb-4">
          <MyGalleryStar name="Harry Potter" />
        </Row>

        <h4>New Releases</h4>

        <Row className="row-cols-2 row-cols-sm-3 row-cols-lg-6  mb-4">
          <MyGalleryStar name="star wars" />
        </Row>
        {/* <MyAccount/> */}
        {/* <MyProfile/> */}
        <Myfooter />
      </Container>
    </div>
  );
}

export default App;