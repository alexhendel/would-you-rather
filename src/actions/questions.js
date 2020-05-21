import * as API from '../api/_DATA';

export const SAVE_QUESTION_ANSWER = 'SAVE_QUESTION_ANSWER';

function saveQuestionAnswer(authedUser, qid, answer) {
  return {
    type: SAVE_QUESTION_ANSWER,
    authedUser,
    qid,
    answer,
  };
}

export function handleSaveQuestionAnswer(authedUser, qid, answer) {
  return (dispatch) => {
    return API._saveQuestionAnswer({ authedUser, qid, answer }).then(() =>
      dispatch(saveQuestionAnswer(authedUser, qid, answer))
    );
  };
}
