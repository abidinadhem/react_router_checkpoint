import React, { useState } from "react";
import { Row, Container, Col, InputGroup, Form, Button } from "react-bootstrap";
import StarRatings from "react-star-ratings";
import { useNavigate } from "react-router-dom";

function Filter(props) {
  const [search, setSearch] = useState("");
  const [rating, setRating] = useState(0);
  const navigate = useNavigate();

  const changeRating = (newRating, name) => {
    setRating(newRating);
  };

  const submit = () => {
    navigate(`/movies?search=${search}&rating=${rating}`)
  };

  const reset = () => {
    setSearch("");
    setRating(0);
    navigate(`/movies`)

    // props.submit({ search: "", rating: 0 });
  };

  return (
    <Container className="me-auto d-flex align-items-center">
      <Row className="me-auto d-flex align-items-center">
        <Col>
          <InputGroup >
            <Form.Control
              value={search}
              onChange={(ev) => setSearch(ev.target.value)}
              type="text"
              placeholder="Search"
            />
          </InputGroup>
        </Col>
        <Col>
          <StarRatings
            rating={rating}
            starDimension="15px"
            starRatedColor="yellow"
            changeRating={changeRating}
            numberOfStars={5}
            name="rating"
          />
        </Col>
        <Col>
          <Button  variant="success" onClick={submit}>
            Search
          </Button>
          <Button  variant="success" onClick={reset}>
            reset{" "}
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

export default Filter;
