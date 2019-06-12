import * as actionTypes from '../actions/actionTypes';

const initialState = {
    youtube: {},
    score: {},
}

const reducer = (state = initialState, action) => {
    switch (action.type) {

        case actionTypes.LOGIN_SUCCESS:
            return { ...state, loginStatus: true, hideHeader: false, userToken: action.payload }
        case actionTypes.CLICK:
            console.log("action.payload", action.payload)
            return { ...state, youtube: action.payload }
        case actionTypes.SCORE:
            console.log("action.payload", action.payload)
            return { ...state, score: action.payload }
        case 'IFGARRAY':
            return { ...state, results: state.results.concat(action.payload) }
        case actionTypes.AUTH_FAIL:
            localStorage.removeItem('userToken');
            if (action.status === 'success') {
                return { ...state, loginFailed: false }

            } else {
                return { ...state, loginFailed: true };
            }
        case actionTypes.SERVICE_FAIL:
            return { ...state, serviceFailed: true }
        case actionTypes.SAVE_DECODED_DATA:
            return { ...state, decodedData: action.data };
        default:
            return state;
    }
    console.log("state from reducer=>", state);
}


export default reducer;
