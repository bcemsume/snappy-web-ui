import Action from '../const';
import {
    callApiFunction
} from '../../helpers/service';
import { actionTypes } from '../../helpers/enums';


export const setSelectedMenu = (menu) => {
    //console.log('action', menu)
    return {
        type: Action.SET_SELECTED_MENU,
        payload: menu
    }
}

export const clearMessages = () => {
    return {
        type: Action.CLEAR_MESSAGES
    }
}

export const generateActionName = (api, method, type) => {
    return `${api}_FETCH_${method}_${type}`;
}


export const asyncDispatch = ({api, method, params, contentType, callback, successMessage}) => {

    return dispatch => {
        dispatch({
            type: generateActionName(api, method, actionTypes.REQUEST),
        });

        callApiFunction(api, method, params, contentType).then(res => {
            dispatch({
                type: generateActionName(api, method, actionTypes.SUCCESS),
                payload: res,
                text: successMessage || ''
            });

            callback && callback(res);

        }).catch(e => {           
            console.error('Root Action ==> ', e);

            dispatch({
                type: generateActionName(api, method, actionTypes.FAILURE),
                text: 'Hata oluştu!'
            });


        });
    }
}