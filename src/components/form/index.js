import React, { Component } from 'react';
import './style.css';
import { Col, Row, Button } from 'react-bootstrap';

var data = {fName: '', lName: '', age: '', email: '', phone: '', country: '', area: '', addr: '', interest: '', subscribe: 'true', image: '', "file": null}

class DetailedForm extends Component {
  constructor(props) {
    super(props);
    this.state = { fName: '', lName: '', age: '', email: '', phone: '', country: '', area: '', addr: '', interest: '', subscribe: 'true', file: null,
    imagePreviewUrl: ''   
   };
  }

  handleFname(event) {
    this.setState({ fName: event.target.value });
    data.fName = event.target.value;
    console.log(event.target.value);
  }
  handleLname(event) {
    this.setState({ lName: event.target.value });
    data.lName = event.target.value
  }
  handleAge(event) {
    this.setState({ age: event.target.value });
    data.age = event.target.value
    var slider = document.getElementById("age");
    var output = document.getElementById("demo");
    output.innerHTML = slider.value;
    
    slider.oninput = function() {
      output.innerHTML = this.value;
    }
  }
  handleEmail(event) {
    this.setState({ email: event.target.value });
    data.email = event.target.value
  }
  handlePhone(event) {
    this.setState({ phone: event.target.value });
    data.phone = event.target.value
  }
  handleCountry(event) {
    this.setState({ country: event.target.value });
    data.country = event.target.value
  }
  handleArea(event) {
    this.setState({ area: event.target.value });
    data.area = event.target.value
  }
  handleAddr(event) {
    this.setState({ addr: event.target.value });
    data.addr = event.target.value
  }
  handleInterest(event) {
    this.setState({ interest: event.target.value });
    data.interest = event.target.value
  }
  handleSubscribe(event) {
    data.subscribe = event.target.value
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }
  handleImageChange(e) {
    e.preventDefault();
    let reader = new FileReader();
    let file = e.target.files[0];
    data.image = e.target.files[0].name;
    reader.onloadend = () => {
      this.setState({
        file: file,
        imagePreviewUrl: reader.result
      });

    }
    reader.readAsDataURL(file)
  }

  onSave = (e) => {
    let firstname=this.state.fName;
    e.preventDefault();
    this.props.onSave(data);
  }
  
  render() {
    let { imagePreviewUrl } = this.state;
    let $imagePreview = null;
    if (imagePreviewUrl) {
      $imagePreview = (<img src={imagePreviewUrl} htmlFor="file-input" />);
    } else {
      $imagePreview = (<img  htmlFor="file-input" />);
    }
    return (
      <div className="registerForm">
        <div className="container-fluid">
          <div className="outerBorder">
          <form>
            <Col xs={2}>
              <div className="uploadPhoto">
                <Row className={"imageRow"}>
                  <div className={"imgPreview"}>
                    <div className={"image-upload"}>
                      <label htmlFor="file-input">
                        {$imagePreview}
                        <div className={'centered'}>Upload Your Photo</div>
                      </label>
                      <input id="file-input" type="file" onChange={(e) => this.handleImageChange(e)} />
                    </div>
                    <br />
                  </div>
                </Row>
              </div>
            </Col>
            <Col xs={10}>
              <div className="form">
                
                  <div className="row">
                    <div className="col">
                      <label>Name</label>
                      <input type="text" className="form-control fName" placeholder="First name" value={this.state.fName} onChange={this.handleFname.bind(this)} required />
                      <input type="text" className="form-control lName" placeholder="Last name" value={this.state.lName} onChange={this.handleLname.bind(this)} required/>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col">
                      <label>Age</label>
                      <input type="range" className="custom-range age" min="13" max="45" step="1" id="age" value={this.state.age} onChange={this.handleAge.bind(this)} required></input>
                      <p className="showAge">Age: <span id="demo"></span></p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col">
                      <label>Email</label>
                      <input type="email" className="form-control is-invalid email" id="email" placeholder="name@example.com" value={this.state.email} onChange={this.handleEmail.bind(this)} required></input>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col">
                      <label>Phone</label>
                      <input type="tel" className="form-control phone" id="phone" placeholder="(212) 477-1000" value={this.state.phone} onChange={this.handlePhone.bind(this)} required></input>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col">
                      <label>Country</label>
                      <select className="form-control country" value={this.state.country} onChange={this.handleCountry.bind(this)} required>
                        <option>Atlanta</option>
                        <option>Australia</option>
                        <option>Russia</option><option>China</option><option>Japan</option><option>United States</option>
                      </select>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col">
                      <label>State</label>
                      <select className="form-control state" value={this.state.area} onChange={this.handleArea.bind(this)} required>
                        <option>Alaska</option>
                        <option>Texas</option>
                        <option>California</option><option>Florida</option>
                      </select>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col">
                      <label>Address</label>
                      <select className="form-control addr" value={this.state.addr} onChange={this.handleAddr.bind(this)} required>
                        <option>George Street</option>
                        <option>Washinton Dc</option>
                        <option>North Square</option>
                      </select>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col">
                      <label>Interests</label>
                      <input type="text" className="form-control interest" placeholder="Interests" value={this.state.interest} onChange={this.handleInterest.bind(this)} required></input>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col">
                      <div className="subscribe">
                        <input name="isGoing" type="checkbox" checked={this.state.subscribe} onChange={this.handleSubscribe.bind(this)} required />
                        <label>Subscribe to the news letter</label>
                      </div>
                    </div>
                  </div>
                  <Button bsStyle="primary" className={'submit'} onClick={this.onSave}>SUBMIT</Button>
                  {/* <input type="submit" value="Submit" className="btn btn-primary submit"/> */}
               
              </div>
            </Col>
            </form>
          </div>
        </div>
      </div>

    );
  }
}

export default DetailedForm;