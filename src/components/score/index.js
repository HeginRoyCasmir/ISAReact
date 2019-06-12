import React, { Component } from 'react';
import './style.css';
import { Col, Form, Button } from 'react-bootstrap';

var data = { tube: '' }
var score = { year: '' }
class Score extends Component {
    
    handleTube(e) {
        data.tube = e.target.value;
        //this.setState({ tube: e.target.value });
        console.log("componenet", data);
    }
    handleYear(e){
        score.year = e.target.value
        console.log("year is :",score);
    }
    onSave = (e) => {
        console.log("wow");
        e.preventDefault();
        this.props.onSave(data);
        console.log('click', data);
    }
    onScore = (e) =>{
        console.log("i am in");
        e.preventDefault();
        this.props.onScore(score);
        console.log('clicked', score);
    }
    render() {
        return (
            <div className="scoreboard">
                <Col md={12}><h3>SCOREBOARD</h3></Col>
                 <Col md={12} className="wrap">
                    <Form>
                        <Col md={12} sm={12} className="sportyear">
                            <Form.Group controlId="exampleForm.ControlSelect1" className="sport">
                                <Form.Label>Select Sports</Form.Label>
                                <Form.Control as="select">
                                    <option>BasketBall</option>
                                    <option>BasketBall</option>
                                    <option>Kabaddi</option>
                                    <option>VolleyBall</option>
                                    <option>FootBall</option>
                                </Form.Control>
                            </Form.Group>
                            <Form.Group className="yeardiv">
                                <Form.Label>Year</Form.Label>
                                <Form.Control size="lg" type="number" min="2019" placeholder="Year" className="year" onChange={this.handleYear} />
                            </Form.Group>
                        </Col>
                        <Col md={12} sm={12} className="teamname">
                            <Form.Group className="teamA">
                                <Form.Label>Name of A Team</Form.Label>
                                <Form.Control size="lg" type="text" placeholder="A Team Name" className="aTeam" />
                            </Form.Group>
                            <Form.Group className="teamB">
                                <Form.Label>Name of B Team</Form.Label>
                                <Form.Control size="lg" type="text" placeholder="B Team Name" className="bTeam" />
                            </Form.Group>
                        </Col>
                        <Col md={12} sm={12} className="score">
                            <Form.Group className="scoreA">
                                <Form.Label>A Team Score</Form.Label>
                                <Form.Control size="lg" type="number" placeholder="A Team Score" className="aScore" />
                            </Form.Group>
                            <Form.Group className="scoreB">
                                <Form.Label>B Team Score</Form.Label>
                                <Form.Control size="lg" type="number" placeholder="B Team Score" className="bScore" />
                            </Form.Group>
                        </Col>
                        <Col md={12} sm={12} className="foul">
                            <Form.Group className="foulA">
                                <Form.Label>A Team Foul</Form.Label>
                                <Form.Control size="lg" type="number" placeholder="A Team Foul" className="aFoul" />
                            </Form.Group>
                            <Form.Group className="foulB">
                                <Form.Label>B Team Foul</Form.Label>
                                <Form.Control size="lg" type="number" placeholder="B Team Foul" className="bFoul" />
                            </Form.Group>
                        </Col>
                        <Col md={12} sm={12} className="sub">
                            <Form.Group controlId="exampleForm.ControlSelect1" className="quarter">
                                <Form.Label>Quarter</Form.Label>
                                <Form.Control as="select">
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                </Form.Control>
                            </Form.Group>
                            <Form.Group className="submit">
                                <Button bsStyle="primary" type="submit" onClick={this.Score}>Submit</Button>
                            </Form.Group>
                        </Col>
                    </Form>
                </Col><br />
                <Col>
                    <Col md={12}><h3>YOUTUBE LIVE</h3></Col>
                    <Form>
                        <Form.Group className="youtube">
                            <Form.Label>Enter YouTube URL</Form.Label>
                            <Form.Control size="lg" type="url" placeholder="Enter YouTube URL" className="url"  onChange={this.handleTube} />
                        </Form.Group>
                        <Form.Group className="urlsubmit">
                            <Button bsStyle="primary" onClick={this.onSave}>YouTube Go Live</Button>
                        </Form.Group>
                    </Form>
                </Col>
            </div >

        );
    }
}

export default Score;