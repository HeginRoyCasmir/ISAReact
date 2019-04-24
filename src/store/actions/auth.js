
import * as actionTypes from '../../store/actions/actionTypes';
import {withRouter} from 'react-router-dom';
import{connect } from 'react-redux';
export const auth=(fname)=>{
    const data={
        fname:fname
       
    }
    return{
       type:actionTypes.LOGIN,
       payload:data
    }
}
export function onClick(data){
    return{
       type:actionTypes.LOGIN_SUCCESS,
       payload:data
}
}


export function loginFailed(data){
    
    return{
       type:actionTypes.AUTH_FAIL,
       payload:data
}
}


export function serviceCallFailed(data){
    
    return{
       type:actionTypes.SERVICE_FAIL,
       payload:data
}
}
export function saveDecodedData(data){
    return{
        type:actionTypes.SAVE_DECODED_DATA,
        data
    }
}

