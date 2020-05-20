import { RECEIVE_DATA } from '../actions/shared';
import { RECEIVE_USERS } from '../actions/users';

export default function users(state = [], action) {
  switch (action.type) {
    case RECEIVE_USERS:
      return action.users;
    case RECEIVE_DATA:
      return action.users;
    default:
      return state;
  }
}
