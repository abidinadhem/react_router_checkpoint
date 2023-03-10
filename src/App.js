import React from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";
import Home from "./Components/Home";
import Filter from "./Components/Filter";
import MovieList from "./Components/MovieList";
import MovieDetail from "./Components/MovieDetail";
import "./App.css";
function App() {

  return (
    <BrowserRouter>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="/">My Movies App</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className=" d-flex align-items-center">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/movies">Movies</Nav.Link>
              <Nav.Link href="/add">Add Movie</Nav.Link>
              <Filter />
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<MovieList />} />
        <Route path="/movie/:id" element={<MovieDetail />} /> 
        {/* //  : in react router means that the variable is dynamic  */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;