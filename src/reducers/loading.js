import { RECEIVE_DATA } from '../actions/shared';
import { RECEIVE_USERS } from '../actions/users';
import { RECEIVE_QUESTIONS } from '../actions/questions';

export default function loading(state = true, action) {
  switch (action.type) {
    case RECEIVE_USERS:
      return false;
    case RECEIVE_QUESTIONS:
      return false;
    case RECEIVE_DATA:
      return false;
    default:
      return state;
  }
}
