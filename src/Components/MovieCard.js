import React from 'react'
import { Card } from 'react-bootstrap'
import { useNavigate } from "react-router-dom";

function MovieCard(props) {
  const navigate = useNavigate();

  return (
    <Card onClick={()=>navigate(`/movie/${props.id}`)} style={{ width: "18rem" }}>
        <Card.Img variant="top" width={50} height={300} src={props.posterURL} />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>
            {props.description}
          </Card.Text>
          <Card.Text>
           Rating : {props.rating}
          </Card.Text>
        </Card.Body>
      </Card>
  )
}

export default MovieCard