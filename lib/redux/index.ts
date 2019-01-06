import {reducer as formReducer} from 'redux-form';
import { combineReducers } from 'redux';
import auth from './reducers/auth';

const rootReducer = combineReducers({
    form: formReducer,
    auth
})

export default rootReducer;