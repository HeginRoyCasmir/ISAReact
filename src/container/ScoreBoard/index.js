import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import Score from '../../components/score/index';
import { connect } from 'react-redux';
import * as actionTypes from '../../store/actions/actionTypes';
import * as actions from '../../store/actions/auth';

export class ScoreBoard extends Component {
    onClick = (url) =>{
        console.log("1",url);
        this.props.onClick(url);
    }
    onScore = (sco) =>{
        console.log("1",sco);
        this.props.onScore(sco);
    }
    render() {
        return (
            <Score onSave={this.onClick} onScore={this.onScore}/>
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
        onScore: (sco) => { dispatch(dispatch(actions.authe(sco))) },
        onClick: (url) => { dispatch(dispatch(actions.auth(url))) },
    }

}
export default (connect(mapStateToProps, mapDispatchToProps)(ScoreBoard));
//export default withRouter(ScoreBoard);