import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import Header from '../../components/header/index';
import { connect } from 'react-redux';
import * as actionTypes from '../../store/actions/actionTypes';
import * as actions from '../../store/actions/auth';

export class Menu extends Component {
    onHome = (e) => {
        this.props.history.push('/');
    }
    onPlay = (e) => {
       this.props.history.push('/play');
    }
    onLive = (e) => {
        this.props.history.push('/live');
     }
    onAdmin = (e) => {
        this.props.history.push('/admin');
     }
    render() {
        return (
            <Header onHome={this.onHome} onPlay={this.onPlay} onLive={this.onLive} onAdmin={this.onAdmin}/>
        );
    }


}
const mapStateToProps = state => {
    return {
        ctr: state //reffered as this.props.ctr
    };
}

const mapDispatchToProps = dispatch => {


    return {


        onClick: (fname) => { dispatch(dispatch(actions.auth(fname))) },
    }

}
//export default (connect(mapStateToProps, mapDispatchToProps)(Menu));
export default withRouter(Menu);
