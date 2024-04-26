import { Component } from "react";
import { Alert, Col, Spinner } from "react-bootstrap";

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
    return (
      <>
       
        {this.state.isLoading && (
          <Spinner animation="border" role="status" variant ="light">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        )}
        {this.state.isError && (
         <Alert  variant="danger">
         errore nel caricamento dei film
       </Alert>
        )}
        {this.state.films.Search !== undefined &&
          this.state.films.Search.slice(0, 6).map((film, i) => {
            return (
              <Col key={film.imdbID} className=" mb-2 text-center px-1">
                <img className="img-fluid" src={film.Poster} alt={film.Title} />
              </Col>
            );
          })}
      </>
    );
  }
}

export default MyGallery;
