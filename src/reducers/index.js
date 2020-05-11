import { combineReducers } from 'redux';

import users from './users';
import questions from './questions';
import loading from './loading';

export default combineReducers({
  users,
  questions,
  loading,
});
