import React, { Component } from 'react';
import './style.css';
import { Button, Col, Form, Image } from 'react-bootstrap';
import Logo from '../../images/isa.png';

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = { value: '' };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        const password = "isa";
        if (this.state.value == password) {
            this.props.history.push('/scoreboard');
        }
        else{
            document.getElementById("error").style.display = "block";
        }
    }


    render() {
        return (
            <div className="adminPage">
                <Col md={8}>
                    <div className="adminText">
                        <h3>Who can Login?</h3>
                        <p>With the right <span>Credentials</span>, <span>ISA</span> players and the people from <span>ISA</span> Adminstrative Department Can access it.</p>
                        <p>This is used to access the control of the <span>Live ScoreBoard.</span></p>
                    </div>
                </Col >
                <Col md={4}>
                    <div className="inputBrd">
                        <form onSubmit={this.handleSubmit}>
                            <Image src={Logo} className="adminLogo" alt="logo" />
                            <Form.Group controlId="formBasicPassword">
                                <Form.Label className="adminLabel">Password to access scoreboard</Form.Label>
                                <Form.Control type="password" placeholder="Password" value={this.state.value} onChange={this.handleChange} className="adminPswd" />
                            </Form.Group>
                            <p className="hint"><span>Hint:</span><span> Contact Hegin Roy Casmir</span></p><br />
                            <p id="error">You have entered a wrong password</p>
                            <Button variant="success" type="submit" className="adminBtn">Login</Button>
                        </form>
                    </div>
                </Col>
            </div >

        );
    }
}

export default Register;
