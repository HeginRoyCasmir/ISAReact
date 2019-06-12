
import * as actionTypes from '../../store/actions/actionTypes';
import {withRouter} from 'react-router-dom';
import{connect } from 'react-redux';
export const auth=(url)=>{
    const data={
        url:url
       
    }
    return{
       type:actionTypes.CLICK,
       payload:data
    }
}
export const authe=(sco)=>{
    const data={
        sco:sco
       
    }
    return{
       type:actionTypes.SCORE,
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

