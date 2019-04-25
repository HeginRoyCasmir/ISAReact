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
                    <p>ISA was establised on 2016. ISA has 4 major sports i.e Basketball, Kabaddi, VolleyBall and FootBall. The players has the eligibility to play all the sports. They are Fit enough to be. ISA players has a capability to train like a pro.</p>
                    <p>Every year ISA add a new batch of Junior Players. ISA has a specific selection process to selct a player for the Team. It is based on the intrest, respect, timeliness and dedication. After the selection ISA senior players helps juniors players to play like a pro. Our Junior Team Has represented for Tamil Nadu Every Year.</p>
                  </div>
                </div>
              </Col>
              <Col xs={12}>
                <Image src={parrel} className="parrel" />
              </Col>
              <Col xs={12}>
                <div className="valueWrap">
                  <div className="left">
                    <div className="heading">Our Value</div>
                  </div>
                <div className="right">
                  <div className="title">Our Sponsors Mean the  World</div>
                    <p>We thank all the Sponsors for making the Tournament as a Wonderful Event. Your Contribution makes us to take the sport higher.</p>
                  <div className="title">Every Viewers Mean a Lot</div>  
                    <p>The Great Support from the people of Kurumpanai and surrounding, supports us by cheering up, shout out loud and publish our fame to the people who are not aware of ISA</p>
                  <div className="title">Every Players Made It</div>    
                    <p>The Termendous Pleasure to all the players who spend most of their valuable time in Practicing and making the Tournament Success. ISA wish you a great Success.</p>
                </div>
                </div>
              </Col>
              <Col xs={12}>
                <div className="sponsWrap">
                  <div className="clearFix">
                    <div className="heading">Would you Like to Sponsor for the Tournament</div>
                    <div>
                      <p>Contact Us</p>
                      <h4>+91-9629336103</h4>
                    </div>
                  </div>
                </div>
              </Col>
            </div>
          </div>
        
      );
    }
  }
  
  export default Register;
