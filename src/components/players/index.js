import React, { Component } from 'react';
import './style.css';
import { Col } from 'react-bootstrap';
import jobin from '../../images/jobinpp.JPG';
import Card from "react-bootstrap/Card";

class Players extends Component {
  render() {
    return (
      <div className="players">
        <Col xs={12}>
          <h3 className="athelete">ISA ATHLETES</h3>
          <hr />
        </Col>
        <Col xs={12}>
          <div className="basketText">BASKETBALL</div>
          <Col>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={jobin} />
              <Card.Body>
                <Card.Title>Players Details</Card.Title>
                <Card.Text>

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