import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import { connect } from 'react-redux';
import * as actionTypes from '../../store/actions/actionTypes';
import * as actions from '../../store/actions/auth';

export class Edit extends Component {
    onClick = () => {
        // this.props.history.push('/edit');
    }
    render() {
        let jsonData=this.props.ctr.firstname
        let editData= JSON.stringify(jsonData)
        return (
            <div>
               
            </div>
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


        onClick: (fName) => { dispatch(dispatch(actions.auth(fName))) },
    }

}
export default (connect(mapStateToProps, mapDispatchToProps)(Edit));
//export default RegisterForm;
// export default PreviewForm;