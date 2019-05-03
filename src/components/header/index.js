import React, { Component } from 'react';
import './style.css';
import { Col, Navbar, Nav } from 'react-bootstrap';

class Header extends Component {
  render() {
    return (
      <div className='header' >
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand className="logo">
            <h2 className="textLogo">ISA</h2>
          </Navbar.Brand>
          <Col xs={7} md={7} className="menu">
            <Nav.Link onClick={this.props.onHome} > Home </Nav.Link>
            <Nav.Link onClick={this.props.onGallery} > Gallery </Nav.Link>
            <Nav.Link onClick={this.props.onFixtures} > Fixtures </Nav.Link>
            <Nav.Link onClick={this.props.onJersey} > Jersey </Nav.Link>
            <Nav.Link onClick={this.props.onPlay} > Players </Nav.Link>
            <Nav.Link onClick={this.props.onLive} > Live </Nav.Link>
            <Nav.Link onClick={this.props.onContact} > Contact </Nav.Link>
            <Nav.Link onClick={this.props.onAdmin} > Admin </Nav.Link>
          </Col>
        </Navbar>
        

      </div>
    );
  }
}

export default Header;
