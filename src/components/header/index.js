import React, { Component } from 'react';
import './style.css';
import { Col, Image, Navbar, Nav } from 'react-bootstrap';
import Logo from '../../images/isa.png';


class Header extends Component {
  render() {
    return (
      <div className='header' >
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home">
            {/* <Image alt="" src={Logo} className="logo1"/> */}
            <h2 className="textLogo">ISA</h2>
          </Navbar.Brand>
          <Col xs={7} className="menu">
            <Navbar.Brand>
              <a href="#">Home</a>
              <a href="#">About</a>
              <a href="#">Gallery</a>
              <a href="#">Jersey</a>
              <a href="#">Players</a>
              <a href="#">Standings</a>
              <a href="#">Contact</a>
            </Navbar.Brand>
          </Col>
        </Navbar>

      </div>
    );
  }
}

export default Header;
