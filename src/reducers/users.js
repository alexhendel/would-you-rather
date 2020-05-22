import { RECEIVE_DATA, SAVE_QUESTION_ANSWER } from '../actions/shared';
import { ADD_QUESTION } from '../actions/questions';

export default function users(state = [], action) {
  switch (action.type) {
    case SAVE_QUESTION_ANSWER:
      const composeState = (state, action) => {
        const { qid, answer, authedUser } = action;
        const newState = {
          ...state,
          [authedUser]: {
            ...state[authedUser],
            answers: {
              ...state[authedUser].answers,
              [qid]: answer,
            },
          },
        };
        return newState;
      };
      return composeState(state, action);
    case ADD_QUESTION:
      return {
        ...state,
        [action.author]: {
          ...state[action.author],
          questions: state[action.author].questions.concat([
            action.question.id,
          ]),
        },
      };
    case RECEIVE_DATA:
      return action.users;
    default:
      return state;
  }
}
