import { RECEIVE_DATA } from '../actions/shared';
import { SAVE_ANSWER } from '../actions/questions';

export default function questions(state = [], action) {
  switch (action.type) {
    case SAVE_ANSWER:
      return action.question;
    case RECEIVE_DATA:
      return action.questions;
    default:
      return state;
  }
}
