import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Preview from '../../components/preview/index';
import { connect } from 'react-redux';
import * as actionTypes from '../../store/actions/actionTypes';
import * as actions from '../../store/actions/auth';
import Live from '../../components/live';

export class Livedata extends Component {
    render() {
        let temp = this.props.ctr.youtube
        console.log('nextContext', this.props.ctr.youtube);
        let temp2 = JSON.stringify(temp)

        let text = this.props.ctr.score
        console.log('nextContext', this.props.ctr.score);
        let text2 = JSON.stringify(text)
        return (
            <div>
                <Preview name={temp2} word={text2} gotoEdit={this.gotoEdit} />
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
export default (connect(mapStateToProps, mapDispatchToProps)(Livedata));
//export default RegisterForm;
// export default PreviewForm;