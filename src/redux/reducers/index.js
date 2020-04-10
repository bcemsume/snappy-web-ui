import { combineReducers } from 'redux';
import RootReducer from './RootReducer';
import UserReducer from './UserReducer';
import CommonMessagesReducer from './CommonMessagesReducer';
import FormReducer from './FormReducer';


export default combineReducers({
    root: RootReducer,
    user: UserReducer,
    commonMessage: CommonMessagesReducer,
    form: FormReducer,
});