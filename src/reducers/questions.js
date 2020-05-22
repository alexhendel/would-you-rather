import { RECEIVE_DATA, SAVE_QUESTION_ANSWER } from '../actions/shared';
import { ADD_QUESTION } from '../actions/questions';

export default function questions(state = [], action) {
  switch (action.type) {
    case SAVE_QUESTION_ANSWER:
      const composeState = (state, action) => {
        const { qid, answer, authedUser } = action;
        const newState = {
          ...state,
          [qid]: {
            ...state[qid],
            [answer]: {
              ...state[qid][answer],
              votes: state[qid][answer].votes.concat([authedUser]),
            },
          },
        };
        return newState;
      };
      return composeState(state, action);
    case ADD_QUESTION:
      const { question } = action;
      return {
        ...state,
        [question.id]: question,
      };
    case RECEIVE_DATA:
      return action.questions;
    default:
      return state;
  }
}
