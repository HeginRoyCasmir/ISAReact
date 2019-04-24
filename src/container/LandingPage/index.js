import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import Register from '../../components/content/index';




export class LandingPage extends Component {

    onClick() {
        //  this.props.onClick();

    }
    render() {
        return (
             <Register onClick={this.onClick} />
            // <Register onClick={this.onClick} />
        );
    }


}
//export default (connect(mapStateToProps,mapDispatchToProps)(LoginPage));
export default LandingPage;