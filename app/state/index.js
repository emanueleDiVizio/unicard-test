import {combineReducers} from 'redux';
import user from './user';

const reducer = combineReducers({
  user: user.reducer,
});

export default reducer;
