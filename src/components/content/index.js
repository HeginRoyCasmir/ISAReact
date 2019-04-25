import React, { Component } from 'react';
import './style.css';
import { Button, Col, Image, Carousel } from 'react-bootstrap';
import banner from '../../images/bnrgroup.jpeg';


class Register extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleSelect = this.handleSelect.bind(this);

    this.state = {
      index: 0,
      direction: null,
    };
  }

  handleSelect(selectedIndex, e) {
    this.setState({
      index: selectedIndex,
      direction: e.direction,
    });
  }

    render() {
      const { index, direction } = this.state;
      return (
          <div className="landingPage">
              <div className="banner">
                <Col xs={12}>
                  <Carousel activeIndex={index} direction={direction} onSelect={this.handleSelect}>
                    <Carousel.Item>
                      <img className="d-block w-100" src={banner} alt="First slide"/>
                    </Carousel.Item>
                    {/* <Carousel.Item>
                      <img className="d-block w-100" src={} alt="Third slide"/>
                    </Carousel.Item>
                    <Carousel.Item>
                      <img className="d-block w-100" src="" alt="Third slide"/>
                    </Carousel.Item> */}
                  </Carousel>
                </Col> 
                <Col xs={12} >
                  <div className="storyWrap">
                    <div className="left">
                      <div className="heading">Our Story</div>
                    </div>
                    <div className="right">
                      <p>Basketball, The major sport played at Kurumpanai after Kabaddi. Basketball came up to Kurumpanai at Early 90's. Though Kabaddi is the major sport people started playing Basketball. With less facilities and hard work we came up and acheive lot and lot in Basketball.</p>
                    </div>
                  </div>
                </Col>
              </div>
          </div>
        
      );
    }
  }
  
  export default Register;
