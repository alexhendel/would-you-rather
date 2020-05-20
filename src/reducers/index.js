import { combineReducers } from 'redux';

import users from './users';
import questions from './questions';
import loading from './loading';
import authedUser from './authedUser';

export default combineReducers({
  users,
  questions,
  loading,
  authedUser,
});
