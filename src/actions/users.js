import * as API from '../api/_DATA';

export const RECEIVE_USERS = 'RECEIVE_USERS';

function receiveUsers(users) {
  return {
    type: RECEIVE_USERS,
    users,
  };
}

export function handleReceiveUsers() {
  return (dispatch) => {
    return API._getUsers().then((users) => dispatch(receiveUsers(users)));
  };
}
