import Action from '../const';

const INITIAL_STATE = {
    selectedMenu: null,
    getUserInfo: {
        loading: false,
        data: null
    }
}

export default  ( state = INITIAL_STATE, action) => {
    //console.log('reduc => ', action);
    switch(action.type){
        case Action.SET_SELECTED_MENU:
            return {...state, selectedMenu: action.payload}
        default:
            return state;
    }
}