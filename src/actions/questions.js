import * as API from '../api/_DATA';

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS';

function receiveQuestions(questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions,
  };
}

export function handleReceiveQuestions() {
  return (dispatch) => {
    return API._getQuestions().then((questions) =>
      dispatch(receiveQuestions(questions))
    );
  };
}

export function handleSaveQuestionAnswer(authedUser, qid, answer) {
  return (dispatch) => {
    return Promise.all([
      API._saveQuestionAnswer({ authedUser, qid, answer }),
      dispatch(handleReceiveQuestions()),
    ]);
  };
}
