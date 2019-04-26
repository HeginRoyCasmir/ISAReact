import React, { Component } from 'react';
import './style.css';
import { Col, Navbar, NavItem } from 'react-bootstrap';

class Header extends Component {

  // onPlay = () =>{
  //   console.log('1223');
  //   this.props.onPlay();
  // }
  render() {
    return (
      <div className='header' >
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home">
            <h2 className="textLogo">ISA</h2>
          </Navbar.Brand>
          <Col xs={7} className="menu">
            <NavItem>
              <Navbar.Link onClick={this.props.onHome} > Home </Navbar.Link>
              <Navbar.Link onClick={this.props.onGallery} > Gallery </Navbar.Link>
              <Navbar.Link onClick={this.props.onFixtures} > Fixtures </Navbar.Link>
              <Navbar.Link onClick={this.props.onJersey} > Jersey </Navbar.Link>
              <Navbar.Link onClick={this.props.onPlay} > Players </Navbar.Link>
              <Navbar.Link onClick={this.props.onLive} > Live </Navbar.Link>
              <Navbar.Link onClick={this.props.onContact} > Contact </Navbar.Link>
            </NavItem>
          </Col>
        </Navbar>

      </div>
    );
  }
}

export default Header;
