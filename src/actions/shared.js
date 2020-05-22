import * as API from '../api/_DATA';

export const SAVE_QUESTION_ANSWER = 'SAVE_QUESTION_ANSWER';
export const RECEIVE_DATA = 'RECEIVE_DATA';

function receiveData(users, questions) {
  return {
    type: RECEIVE_DATA,
    users,
    questions,
  };
}

function saveQuestionAnswer(authedUser, qid, answer) {
  return {
    type: SAVE_QUESTION_ANSWER,
    authedUser,
    qid,
    answer,
  };
}

export function handleInitialData() {
  return (dispatch) => {
    return Promise.all([API._getUsers(), API._getQuestions()]).then(
      ([users, questions]) => {
        dispatch(receiveData(users, questions));
      }
    );
  };
}

export function handleSaveQuestionAnswer(authedUser, qid, answer) {
  return (dispatch) => {
    return API._saveQuestionAnswer({ authedUser, qid, answer }).then(() =>
      dispatch(saveQuestionAnswer(authedUser, qid, answer))
    );
  };
}
