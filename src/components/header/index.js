import React, { Component } from 'react';
import './style.css';
import { Col, Navbar, Nav } from 'react-bootstrap';

class Header extends Component {
  Burger() {
    document.getElementById("panel").style.width = "100%";
  }
  
  closeNav(){
    document.getElementById("panel").style.width = "0";
  }
  render() {
    return (
      <div className='header' >
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand className="logo">
            <h2 className="textLogo">ISA</h2>
          </Navbar.Brand>
          <div id="panel" className="sidepanel">
            <a href="javascript:void(0)" className="closebtn" onClick={this.closeNav}>×</a>
            <Nav.Link onClick={this.props.onHome} > Home </Nav.Link>
            <Nav.Link onClick={this.props.onGallery} > Gallery </Nav.Link>
            <Nav.Link onClick={this.props.onFixtures} > Fixtures </Nav.Link>
            <Nav.Link onClick={this.props.onJersey} > Jersey </Nav.Link>
            <Nav.Link onClick={this.props.onPlay} > Players </Nav.Link>
            <Nav.Link onClick={this.props.onLive} > Live </Nav.Link>
            <Nav.Link onClick={this.props.onContact} > Contact </Nav.Link>
            <Nav.Link onClick={this.props.onAdmin} > Admin </Nav.Link>
          </div>
          <button class="openbtn" onClick={this.Burger}>☰</button>
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
