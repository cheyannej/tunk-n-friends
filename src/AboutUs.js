import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import CardColumns from 'react-bootstrap/CardColumns';
import Container from 'react-bootstrap/Container';
import './AboutUs.css';
import ctimg from './ct.jpg';
import cjimg from './cj.jpeg';
import cwimg from './cw.jpg';
import caimg from './ca.jpg';


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
    <div id="nav" style={{ backgroundColor: `gainsboro`}}>
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


    <Card className="cw" border = "secondary" style={{ }}>
    <Card.Img variant = "top" src = {cwimg} alt="image of Craig" width = {500} height = {250} />
    <Card.Body>
    <Card.Title>Craig Wagner</Card.Title>
    <Card.Text>
    Craig Wagner is a graduating senior Computer Science student at North Carolina A&T State University. He is a computer engineer and developer, with specialty in virtualized environments and system architecture. Craig took on the role of the creative lead and team leader for the project, and also programmed for the game's Visual Layer and Client connection.
    </Card.Text>
    </Card.Body>
    </Card>

    <Card className="ca" border = "secondary" style={{ }}>
    <Card.Img variant = "top" src = {caimg} alt="image of Chris"/>
    <Card.Body>
    <Card.Title>Christopher Allis</Card.Title>
    <Card.Text>
    Christopher Allis is a graduating senior Computer Science student at North Carolina A&T State University. While he enjoys tinkering on a plethora of different topics, he tends to work on server and web related work. In this project, Chris was tasked with creating the remote game server, handling the communication between the server and clients, and created the logical part of the card game engine.
    </Card.Text>
    </Card.Body>
    </Card>

    <Card className="ct" border = "secondary" style={{ }}>
    <Card.Img variant = "top" src = {ctimg}  alt = "image of Chanise"/>
    <Card.Body>
    <Card.Title>Chanise Taylor</Card.Title>
    <Card.Text>
    Chanise Taylor is a senior Computer Science student at North Carolina A&T State University. Her main interests in computer science lie in data analytics, cybersecurity and front-end development. In this project, she took on the role of a graphic designer, as she worked on the logo, card deck design, the game's graphical user interfaces on the Unity game engine and the about page within the website.
    </Card.Text>
    </Card.Body>
    </Card>

    <Card className="cj" border = "secondary" style={{ }}>
    <Card.Img variant = "top" src = {cjimg} alt = "image of Cheyanne" />
    <Card.Body>
    <Card.Title>Cheyanne Jackson</Card.Title>
    <Card.Text>
    Cheyanne Jackson is a graduating senior Computer Science student at North Carolina A&T State University. She is an aspiring software engineer, focusing in front-end development, who can eventually get into full-stack development as her journey goes on. She helped with documentation organization, website setup and making sure the Unity engine was able to be connected and showcased on the website.
    </Card.Text>
    </Card.Body>
    </Card>

    </CardColumns>


    </div>
  );
}

export default AboutUs;
