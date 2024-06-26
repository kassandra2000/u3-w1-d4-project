import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";
import MyNav from "./components/MyNav";
import MyBar from "./components/MyBar";
import Myfooter from "./components/MyFooter";
import { Container, Row } from "react-bootstrap";
import MyAccount from "./components/MyAccount";
import MyProfile from "./components/MyProfile";
import MyGallery from "./components/MyGallery";

function App() {
  return (
    <div className="App">
      <MyNav />
      <MyBar />
      <Container fluid className="px-4 film">
        <h4>Trending Now</h4>

        <MyGallery name="Batman" />

        <h4>Watch it Again</h4>

        <MyGallery name="Harry Potter" />

        <h4>New Releases</h4>

        <MyGallery name="star wars" />

        <h4>For You</h4>

        <MyGallery name="vampire" />

        {/* <MyAccount/> */}
        {/* <MyProfile/> */}
        <Myfooter />
      </Container>
    </div>
  );
}

export default App;
