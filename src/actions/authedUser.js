export const SIGN_IN = 'SIGN_IN';
export const SIGN_OUT = 'SIGN_OUT';

function signIn(id) {
  return {
    type: SIGN_IN,
    id,
  };
}

function signOut() {
  return {
    type: SIGN_OUT,
    id: null,
  };
}

export function handleSignIn(id) {
  return (dispatch) => {
    return dispatch(signIn(id));
  };
}

export function handleSignOut() {
  return (dispatch) => {
    return dispatch(signOut());
  };
}
