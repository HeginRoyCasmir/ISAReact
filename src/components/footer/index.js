import React, { Component } from 'react';
import './style.css';
import { Col, Image } from 'react-bootstrap';
import Logo from '../../images/isa.png';


class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <Col xs={12}>
                    <div className="wrap">
                        <Col xs={4}>
                            <div className="logos">
                                <Image src={Logo} className="logo" />
                            </div>
                        </Col>
                        <Col xs={8}>
                            <Col xs={12}>
                                <div className="fbshare">
                                    <div className="fb-like" data-href="https://www.facebook.com/ISAKURUMPANAI/" data-width="" data-layout="button_count" data-action="like" data-size="large" data-show-faces="true" data-share="true"></div>
                                </div>
                            </Col>
                            <Col xs={12}>
                                <div className="text">
                                    <div className="withSmiles">Made with smile in Kurumpanai, KanyaKumari, TN, INDIA</div>
                                </div>
                            </Col>
                        </Col>
                    </div>
                </Col>
            </div>
        );
    }
}

export default Footer;
