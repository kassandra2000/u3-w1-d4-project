import { Component } from "react";
import { Alert, Col, Spinner } from "react-bootstrap";
import Slider from "react-slick";

class MyGallery extends Component {
  state = { films: {}, isLoading: false, isError: false };

  fetchGalleryBatman = () => {
    this.setState({ isLoading: true });
    fetch(
      `http://www.omdbapi.com/?i=tt3896198&apikey=343b7861&s=${this.props.name}`
    )
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Errore nella richiesta dei film al server");
        }
      })
      .then((films) => {
        this.setState({ films });
      })
      .catch((err) => {
        console.log(err.message);
        this.setState({ isError: true });
      })
      .finally(() => this.setState({ isLoading: false }));
  };
  componentDidMount() {
    this.fetchGalleryBatman();
  }
  render() {
    const settings = {
      infinite: true,
      centerPadding: "30px",
      centerMode: true,
      speed: 500,
      slidesToShow: 6,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      pauseOnHover: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 500,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 380,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };

    return (
      <>
        {this.state.isLoading && (
          <Spinner animation="border" role="status" variant="light">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        )}
        {this.state.isError && (
          <Alert variant="danger">errore nel caricamento dei film</Alert>
        )}
        <Slider {...settings}>
          {this.state.films.Search !== undefined &&
            this.state.films.Search.slice(0, 6).map((film, i) => {
              return (
                <Col
                  key={film.imdbID}
                  className=" mb-2 text-center px-1 film-poster "
                >
                  <img
                    className="img-fluid"
                    src={film.Poster}
                    alt={film.Title}
                  />
                  <i class="bi bi-play-circle  play"></i>
                </Col>
              );
            })}
        </Slider>
      </>
    );
  }
}

export default MyGallery;
