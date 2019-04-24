import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import DetailedForm from '../../components/form/index';
import { connect } from 'react-redux';
import * as actionTypes from '../../store/actions/actionTypes';
import * as actions from '../../store/actions/auth';


export class RegisterForm extends Component {

    onClick = (fname) => {
        this.props.history.push('/preview');
        this.props.onClick(fname);
    }
    render() {
        return (
            <DetailedForm onSave={this.onClick} />
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
export default (connect(mapStateToProps, mapDispatchToProps)(RegisterForm));
//export default RegisterForm;