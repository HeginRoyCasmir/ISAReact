import React, { Component } from 'react';
import './style.css';
import { Button, Col, Form, Image } from 'react-bootstrap';
import ReactPlayer from 'react-player'

class Live extends Component {
    render() {
        console.log("json",this.props.name);
    let data = JSON.parse(this.props.name);
    console.log("data",data);

    console.log("json",this.props.word);
    let datas = JSON.parse(this.props.word);
    console.log("data",datas);
        return (
            <div className="adminPage">
                <h2>Live</h2>
                <ReactPlayer url='https://www.youtube.com/watch?v=QbjCNWulTS0' controls playing />
            </div >

        );
    }
}

export default Live;