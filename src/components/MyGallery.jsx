// import { Component } from "react";
// import { Col } from "react-bootstrap";

// class MyGallery extends Component {
//   state = { films: {} };

//   fetchGallery = () => {
//     fetch(`http://www.omdbapi.com/?apikey=343b7861&s=${this.props.name}`)
//       .then((response) => {
//         if (response.ok) {
//           return response.json();
//         } else {
//           throw new Error(
//             "Errore nella richiesta delle prenotazioni al server"
//           );
//         }
//       })
//       .then((films) => {
//         // console.log(films);
//         this.setState({ films });
//       })
//       .catch((err) => {
//         console.log(err.message);
//       });
//   };
//   componentDidMount() {
//     this.fetchGalleryBatman();
//   }
//   render() {
//     return (
//       <>
//         {this.state.films.Search !== undefined &&
//           this.state.films.Search.slice(0, 6).map((film, i) => {
//             return (
//               <Col key={film.imdbID} className=" mb-2 text-center px-1">
//                 <img className="img-fluid" src={film.Poster} alt={film.Title} />
//               </Col>
//             );
//           })}
//       </>
//     );
//   }
// }

// export default MyGallery;
