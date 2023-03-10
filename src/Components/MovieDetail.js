import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { movies } from "../utils/const";
import StarRatings from "react-star-ratings";
import {VideoPlayerModal} from './MovieTrailer'
import { useNavigate } from 'react-router-dom';

function MovieDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [movie, setMovie] = useState({
    posterURL: "",
    description: "",
    title: "",
    trailerLink: "",
    rating: 0,
    id: 0,
  });
  const [exist, setExist] = useState(true);
  const [modalShow, setModalShow] = useState(false);

  useEffect(() => {
    const existedMovie = movies.find((key) => key.id.toString() === id);
    if (existedMovie) {
      setMovie(existedMovie);
    } else {
      setExist(false);
    }
  }, []);

  if (!exist) {
    return <div>movie not exist</div>;
  }

  return (
    <>
      <Container>
        <div className="wrapper mt-4">
            <div style={{cursor:'pointer'}} onClick={()=>navigate(-1)}>
                <button style={{color:'black',backgroundColor:'#00CE79',borderColor:'none',borderRadius:5}}>Back</button>
            </div>
          <div id="movie-info" className=" d-flex gap-5">
            <img
              style={{
                borderRadius: 5,
                boxShadow: "rgb(46 255 14 / 10%) -1px -1px 57px 1px",
                width: 350,
                height: 300,
                objectFit: "cover",
              }}
              src={movie.posterURL}
              alt="movie thumnail"
            />
            <div className="mt-5">
              <h3 style={{ fontSize: 33, color: "black" }}>{movie.title}</h3>
              <p style={{ color: "#a5a5a5", marginTop: 15, lineHeight: 1.8 }}>
                {movie.description}
              </p>
              <div style={{ color: "#a5a5a5", fontWeight: "bold" }}>
                Rating:
                <StarRatings
                  rating={movie.rating}
                  starDimension="15px"
                  starRatedColor="yellow"
                  isSelectable={false}
                  numberOfStars={5}
                  name="rating"
                />
              </div>
              <button
                onClick={() => setModalShow(true)}
                style={{
                  background: "#00CE79",
                  border: "none",
                  color: "black",
                  fontSize: 18,
                  fontWeight: 500,
                  marginTop: 12,
                  display: "flex",
                  alignItems: "center",
                  gap: 5,
                }}
                className="btn btn-primary"
              >
                Play Trailer
              </button>
            </div>
          </div>
        </div>
      </Container>
      <VideoPlayerModal
        videoid={movie.trailerLink}
        title={movie.title}
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}

export default MovieDetail;
