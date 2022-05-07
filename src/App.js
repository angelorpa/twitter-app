import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { Col, Container, Nav, Navbar, Row } from 'react-bootstrap';

const Home = React.lazy(() => import('./pages/Home'));
const Create = React.lazy(() => import('./pages/Create'));
const SignIn = React.lazy(() => import('./pages/SignIn'));
const SignUp = React.lazy(() => import('./pages/SignUp'));
const SingleTweet = React.lazy(() => import('./pages/SingleTweet'));

export default function App() {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Link to="/" className="navbar-brand">
            Twitter
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link to="/create" className="nav-link">
                Create
              </Link>
            </Nav>
            <Nav>
              <Link to="/signup" className="nav-link">
                Sign Up
              </Link>
              <Link to="/signin" className="nav-link">
                Sign In
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container>
        <Row>
          <Col>
            <React.Suspense fallback={<div>Loading...</div>}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/tweets/:id" element={<SingleTweet />} />
                <Route path="/create" element={<Create />} />
                <Route path="/signin" element={<SignIn />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="*" element={<Home />} />
              </Routes>
            </React.Suspense>
          </Col>
        </Row>
      </Container>
    </>
  );
}
