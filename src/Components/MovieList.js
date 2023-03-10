import React, { useState, useEffect } from "react";
import MovieCard from "./MovieCard";
import { Row, Container, Col } from "react-bootstrap";
import {movies} from '../utils/const'
import { useSearchParams } from "react-router-dom";

function MovieList(props) {
  const [list, setList] = useState(movies);
  const [search, setSearch] = useState("");
  const [rating, setRating] = useState(0);
  let [searchParams, setSearchParams] = useSearchParams();

  const filter = (search, rating) => {
    setSearch(search);
    setRating(rating );
  };

  useEffect(() => {
  
    if(!!searchParams.get("search") || !!searchParams.get("rating")) { //!! 'exist' returns true or false
      if (searchParams.get("search").length > 0 || parseInt(searchParams.get("rating"))  !== 0) {
        console.log("u need to update the list");
        filter(searchParams.get("search"), parseInt(searchParams.get("rating")));
      } else {
        filter('', 0);
      }
    } else {
      filter('', 0);
    }
    
  }, [searchParams]);

  return (
    <React.Fragment>
      <Container>
        <Row>
          {list.length > 0
            ? list
            .filter(key =>{
                if(search.length >0){
                    return key.title.toLowerCase().includes(search.toLowerCase())
                }else {
                    return true
                }
            })
            .filter(key =>{
              // console.log(key.rating, rating)
                if(rating !== 0){
                    return key.rating === rating
                }else {
                    return true
                }
            })
            .map(({ posterURL, description, title, rating,id }, index) => (
                <Col key={index} xs="4">
                  <MovieCard
                    posterURL={posterURL}
                    description={description}
                    title={title}
                    rating={rating}
                    id={id}
                  />
                </Col>
              ))
            : "no movies for now"}
        </Row>
      </Container>
    </React.Fragment>
  );
}

export default MovieList;
