import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
// import ButtonGroup from 'react-bootstrap/ButtonGroup';
// import ToggleButton from 'react-bootstrap/ToggleButton';
import logo from './logo.png';


// const [radioValue, setRadioValue] = useState('1');
//
// const radios = [
//   { name: 'Light Mode', value: '1' },
//   { name: 'Dark Mode', value: '2' },
// ];
//
// <ButtonGroup toggle>
//     {radios.map((radio, idx) => (
//       <ToggleButton
//         key={idx}
//         type="radio"
//         variant="secondary"
//         name="radio"
//         value={radio.value}
//         checked={radioValue === radio.value}
//         onChange={(e) => setRadioValue(e.currentTarget.value)}
//       >
//         {radio.name}
//       </ToggleButton>
//     ))}
//   </ButtonGroup>


const NavigationBar = () => {

  return (
    <Navbar bg="light" expand="xl">

    <Navbar.Brand as= { Link } to="/" >
    <img src={logo} width="25" height="25"/>
    {' '} Tunk 'N Friends
    </Navbar.Brand>

    <Navbar.Toggle aria-controls="basic-navbar-nav"/>

    <Navbar.Collapse id="basic-navbar-nav">

    <Nav className="mr-auto">
    <Link to="/aboutus">About Us</Link>
    </Nav>

    </Navbar.Collapse>

    </Navbar>
  );
}

export default NavigationBar;
