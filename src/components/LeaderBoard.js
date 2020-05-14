import React from 'react';
import { useSelector } from 'react-redux';
import Box from '@material-ui/core/Box';
import LeaderBoardItem from './LeaderBoardItem';

const LeaderBoard = () => {
  const users = useSelector((state) => state.users);
  // user object is not an array but a object -
  // this code will iterate through the
  // object keys and add the users to a user array
  let userArray = [];
  Object.keys(users).forEach(function (key) {
    userArray.push({
      ...users[key],
      numberOfQuestion: users[key].questions.length,
      numberOfAnswers: Object.keys(users[key].answers).length,
      score:
        users[key].questions.length + Object.keys(users[key].answers).length,
    });
  });
  userArray.sort((elementA, elementB) => elementB.score - elementA.score);

  return (
    <Box display="flex" alignItems="center" flexDirection="column">
      {userArray.map((user) => {
        return <LeaderBoardItem key={user.id} user={user} />;
      })}
    </Box>
  );
};

export default LeaderBoard;
