import React, { Component } from 'react';
import './style.css';
import { Col, Card } from 'react-bootstrap';
import jobin from '../../images/jobinbanr.JPG';
import prajin from '../../images/prajin.jpeg';
import ashpell from '../../images/asp.jpg';
import brinky from '../../images/brinky.jpeg';

class Players extends Component {
  render() {
    return (
      <div className="players">
        <Col xs={12} md={12}>
          <h3 className="athelete">ISA ATHLETES</h3>
          <hr />
        </Col>
        <Col xs={12} md={12}>
          <div className="basketText">BASKETBALL</div><br />
          <div className="flex-container">
          <Col md={3}>
              <Card >
                <Card.Img variant="top" src={jobin} className="cardImg" />
                <Card.Body>
                  <Card.Title>Jobin</Card.Title>
                  <Card.Text>
                    <p><span>Height:</span><span>6.1'</span></p>
                    <p><span>Weight:</span><span>64 KG</span></p>
                    <p><span>Position:</span><span>Ball Handler</span></p>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={3}>
              <Card >
                <Card.Img variant="top" src={prajin} className="cardImg" />
                <Card.Body>
                  <Card.Title>Prajin</Card.Title>
                  <Card.Text>
                    <p><span>Height:</span><span>6.0'</span></p>
                    <p><span>Weight:</span><span>76 KG</span></p>
                    <p><span>Position:</span><span>Zero</span></p>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={3}>
              <Card >
                <Card.Img variant="top" src={ashpell} className="cardImg" />
                <Card.Body>
                  <Card.Title>Ashpell</Card.Title>
                  <Card.Text>
                    <p><span>Height:</span><span>6.1'</span></p>
                    <p><span>Weight:</span><span>65 KG</span></p>
                    <p><span>Position:</span><span>Ball Handler</span></p>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={3}>
              <Card >
                <Card.Img variant="top" src={brinky} className="cardImg" />
                <Card.Body>
                  <Card.Title>Brinkle</Card.Title>
                  <Card.Text>
                    <p><span>Height:</span><span>6.1'</span></p>
                    <p><span>Weight:</span><span>106 KG</span></p>
                    <p><span>Position:</span><span>Zero</span></p>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </div>
        </Col>
      </div>
    );
  }
}

export default Players;