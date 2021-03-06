import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import CardColumns from 'react-bootstrap/CardColumns';
import Container from 'react-bootstrap/Container';
import './AboutUs.css';

// <div id="cw">
// Craig Wagner
// </div>
// <div id="ca">
// Christopher Allis
// </div>
// <div id="ct">
// Chanise Taylor
// </div>
// <div id="cj">
// Cheyanne Jackson
// </div>

// <div>
// Our group, C4 Studio, came up with the idea of Tunk 'N Friends as we wanted
// to bring people together to one location, where they are able to play different games with their friends
// </div>

/**

<CardColumns className="cards" style={{ display: 'flex' , flexDirection: 'row'}}>






</CardColumns>


**/


const AboutUs = () => {
  return (
    <div id="nav">
    <Navbar bg="light" expand="xl">

    <Navbar.Brand as={Link} to="/aboutus">About Us</Navbar.Brand>
    <Navbar.Toggle/>
    <Navbar.Collapse id="basic-navbar-nav">

    <Nav className="mr-auto">
    <Link to="/">Tunk 'N Friends</Link>
    </Nav>

    </Navbar.Collapse>
    </Navbar>

    <CardColumns className="cards">


    <Card className="cw">
    <Card.Body>
    <Card.Title>Craig Wagner</Card.Title>
    <Card.Text>
    Some quick example text to build on the card title and make up the bulk of
    the card's content.
    </Card.Text>
    </Card.Body>
    </Card>

    <Card className="ca" style={{ }}>
    <Card.Body>
    <Card.Title>Christopher Allis</Card.Title>
    <Card.Text>
    Some quick example text to build on the card title and make up the bulk of
    the card's content.
    </Card.Text>
    </Card.Body>
    </Card>

    <Card className="ct" style={{ }}>
    <Card.Body>
    <Card.Title>Chanise Taylor</Card.Title>
    <Card.Text>
    Some quick example text to build on the card title and make up the bulk of
    the card's content.
    </Card.Text>
    </Card.Body>
    </Card>

    <Card className="cj" style={{ }}>
    <Card.Body>
    <Card.Title>Cheyanne Jackson</Card.Title>
    <Card.Text>
    Some quick example text to build on the card title and make up the bulk of
    the card's content.
    </Card.Text>
    </Card.Body>
    </Card>

    </CardColumns>


    </div>
  );
}

export default AboutUs;
