import React from 'react';
import PropTypes from 'prop-types';

const QuestionListItem = (props) => {
  return (
    <>
      <p>{props.question.id}</p>
    </>
  );
};

QuestionListItem.propTypes = {
  question: PropTypes.object.isRequired,
};

export default QuestionListItem;
