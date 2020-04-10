import Action from '../const';

export const setSelectedMenu = (menu) => {
    //console.log('action', menu)
    return{
        type: Action.SET_SELECTED_MENU,
        payload: menu
    }
}

export const clearMessages = () => {
    return{
        type: Action.CLEAR_MESSAGES
    }
}

