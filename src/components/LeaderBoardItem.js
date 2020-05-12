import React from 'react';

const LeaderBoardItem = (props) => {
  return (
    <>
      <span>{props.user.name}</span>
      <br />
      <span>Answered Question: {props.user.numberOfAnswers}</span>
      <br />
      <span>Created Questions: {props.user.numberOfQuestion}</span>
      <br />
      <span>Score: {props.user.score}</span>
      <br />
    </>
  );
};

export default LeaderBoardItem;
