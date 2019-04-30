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
           


            {/* <NavItem>
              <Navbar.Link onClick={this.props.onHome} > Home </Navbar.Link>
              <Navbar.Link onClick={this.props.onGallery} > Gallery </Navbar.Link>
              <Navbar.Link onClick={this.props.onFixtures} > Fixtures </Navbar.Link>
              <Navbar.Link onClick={this.props.onJersey} > Jersey </Navbar.Link>
              <Navbar.Link onClick={this.props.onPlay} > Players </Navbar.Link>
              <Navbar.Link onClick={this.props.onLive} > Live </Navbar.Link>
              <Navbar.Link onClick={this.props.onContact} > Contact </Navbar.Link>
            </NavItem> */}
          </Col>
        </Navbar>

      </div>
    );
  }
}

export default Header;
