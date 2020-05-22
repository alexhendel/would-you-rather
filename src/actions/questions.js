import * as API from '../api/_DATA';

export const ADD_QUESTION = 'ADD_QUESTION';

function addQuestion(question, author) {
  return {
    type: ADD_QUESTION,
    question,
    author,
  };
}

export function handleAddQuestion(optionOneText, optionTwoText, author) {
  return (dispatch) => {
    return API._saveQuestion({
      optionOneText,
      optionTwoText,
      author,
    }).then((question) => dispatch(addQuestion(question, author)));
  };
}
