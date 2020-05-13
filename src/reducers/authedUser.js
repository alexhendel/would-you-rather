import { SIGN_IN } from '../actions/authedUser';
import { SIGN_OUT } from '../actions/authedUser';

export default function authedUser(state = null, action) {
  switch (action.type) {
    case SIGN_IN:
      return action.id;
    case SIGN_OUT:
      return null;
    default:
      return state;
  }
}
