import { RECEIVE_DATA } from '../actions/shared';
import { RECEIVE_QUESTIONS } from '../actions/questions';

export default function questions(state = [], action) {
  switch (action.type) {
    case RECEIVE_QUESTIONS:
      return action.questions;
    case RECEIVE_DATA:
      return action.questions;
    default:
      return state;
  }
}
