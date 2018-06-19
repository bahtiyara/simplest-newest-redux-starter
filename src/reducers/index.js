import {combineReducers} from 'redux';

import GreetingsReducer from './reducer_greetings';

export default combineReducers({
    greetings: GreetingsReducer
});