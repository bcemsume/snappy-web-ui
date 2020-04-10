import Action from '../const';
import _ from 'lodash';

const INITIAL_STATE = {
    loadingFlags: [],
    introLoading: false,
    error: '',
    success: '',
    info: ''
}

export default (state = INITIAL_STATE, action) => {
    const type = action.type;

    if (type.includes('REQUEST')) {
        return {
            ...state,
            loadingFlags: [...state.loadingFlags, '1']
        }

    } else if (type.includes('FAILURE')) {
        let newLoadingFlags = [...state.loadingFlags];
        newLoadingFlags.splice(0,1);
        return {
            ...state,
            error: _.has(action, 'text') ? action.text : '',
            loadingFlags: newLoadingFlags
        }

    } else if (type.includes('SUCCESS')) {
        let newLoadingFlags = [...state.loadingFlags];
        newLoadingFlags.splice(0,1);
        return {
            ...state,
            success: _.has(action, 'text') ? action.text : '',
            loadingFlags: newLoadingFlags
        }

    } else if (type === Action.CLEAR_MESSAGES) {
        return {
            ...state,
            error: '',
            success: '',
            info: ''
        }
    }


    switch (type) {
        case Action.SET_ERROR_MSG:
            return {
                ...state, error: action.payload
            }

            case Action.SET_SUCCESS_MSG:
                return {
                    ...state, success: action.payload
                }

                default:
                    return state;
    }

    //return state;
}