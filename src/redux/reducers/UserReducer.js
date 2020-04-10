import Action from '../const';
import { generateActionName } from '../actions/RootActions';
import { serviceUrls } from '../../helpers/service';
import { actionTypes, methods } from '../../helpers/enums';
//import Cookie from 'js-cookie';

//Get token from cookie
//const token  = Cookie.get('token');
//console.log('reducer >', token);

const INITIAL_STATE = {
    testUserId: '02484690',
    token: '',
    userInfo: {
        id: "",
        fullName: "",
        department: "",
        directorName: "",
        directorId: "",
        roles: [

        ],
        formAdmins: [

        ]
    }
}

export default  ( state = INITIAL_STATE, action) => {

    switch(action.type){

        case generateActionName(serviceUrls.login, methods.POST, actionTypes.SUCCESS):
            return {...state, token: action.payload.token};

        case generateActionName(serviceUrls.getCurrentUser, methods.GET, actionTypes.SUCCESS):
            return {...state, userInfo: action.payload};

        case Action.LOGOUT:
                return {...state,  token: null};

        default:
            return state;
    }
}