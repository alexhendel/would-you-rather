import { RECEIVE_DATA } from '../actions/shared';
import { SAVE_QUESTION_ANSWER } from '../actions/questions';

export default function questions(state = [], action) {
  switch (action.type) {
    case SAVE_QUESTION_ANSWER:
      return {
        ...state,
        // update store
      };
    case RECEIVE_DATA:
      return action.questions;
    default:
      return state;
  }
}
