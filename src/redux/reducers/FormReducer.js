import Action from '../const';
import { generateActionName } from '../actions/RootActions';
import { serviceUrls } from '../../helpers/service';
import { actionTypes, methods } from '../../helpers/enums';
//import Cookie from 'js-cookie';

//Get token from cookie
//const token  = Cookie.get('token');
//console.log('reducer >', token);

const INITIAL_STATE = {
    createFormTypes: {},

    myForms: [],
    adminForms: [],
    myFormApplies: [],

    getApplyDetail: {},
    getFormDetailByName: {},

    createFormApply: {},
    updateFormApply: {},
    getAllFormApplies: {},
    deleteFormApply: {},

};

export default (state = INITIAL_STATE, action) => {

    switch (action.type) {

        case generateActionName(serviceUrls.createFormTypes, methods.POST, actionTypes.SUCCESS):
            return { ...state, createFormTypes: action.payload };

        case generateActionName(serviceUrls.myForms, methods.GET, actionTypes.SUCCESS):
            return { ...state, myForms: action.payload };

        case generateActionName(serviceUrls.adminForms, methods.GET, actionTypes.SUCCESS):
            return { ...state, adminForms: action.payload };

        case generateActionName(serviceUrls.myFormApplies, methods.GET, actionTypes.SUCCESS):
            const sorted = action.payload.sort((a, b) => {
                return new Date(b.formApplyDate) - new Date(a.formApplyDate);
            });
            return { ...state, myFormApplies: sorted };

        case generateActionName(serviceUrls.getApplyDetail, methods.GET, actionTypes.SUCCESS):
            return { ...state, getApplyDetail: action.payload };

        case generateActionName(serviceUrls.getFormDetailByName, methods.GET, actionTypes.SUCCESS):
            return { ...state, getFormDetailByName: action.payload };

        case generateActionName(serviceUrls.createFormApply, methods.POST, actionTypes.SUCCESS):
            return { ...state, createFormApply: action.payload };

        case generateActionName(serviceUrls.updateFormApply, methods.PUT, actionTypes.SUCCESS):
            return { ...state, updateFormApply: action.payload };

        case generateActionName(serviceUrls.getAllFormApplies, methods.GET, actionTypes.SUCCESS):
            return { ...state, getAllFormApplies: action.payload };

        case generateActionName(serviceUrls.deleteFormApply, methods.DELETE, actionTypes.SUCCESS):
            return { ...state, deleteFormApply: action.payload };

        case Action.CLEAR_FORM_VALUES:
            return { ...state, getApplyDetail: {}, updateFormApply: {}, createFormApply: {} };

        default:
            return state;
    }
}