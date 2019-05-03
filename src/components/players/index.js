import React, { Component } from 'react';
import './style.css';
import { Col, Card } from 'react-bootstrap';
import jobin from '../../images/jobinbanr.JPG';


class Players extends Component {
  render() {
    return (
      <div className="players">
        <Col xs={12} md={12}>
          <h3 className="athelete">ISA ATHLETES</h3>
          <hr />
        </Col>
        <Col xs={12} md={12}>
          <div className="basketText">BASKETBALL</div><br/>
          <Col md={3}>
            <Card >
              <Card.Img variant="top" src={jobin} className="cardImg"/>
              <Card.Body>
                <Card.Title>Jobin</Card.Title>
                <Card.Text>
                  <p><span>Height:</span><span>6.1</span></p>
                  <p><span>Weight:</span><span>64</span></p>
                  <p><span>Position:</span><span>Ball Handler</span></p>
                </Card.Text>
                </Card.Body>
            </Card>
          </Col>
        </Col>
      </div>
    );
  }
}

export default Players;
