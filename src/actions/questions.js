export const SAVE_ANSWER = 'SAVE_ANSWER';

function saveQuestionAnswer(question) {
  return {
    type: SAVE_ANSWER,
    question,
  };
}

export function handleSaveQuestionAnswer(question) {
  return (dispatch) => {
    return dispatch(saveQuestionAnswer(question));
  };
}
