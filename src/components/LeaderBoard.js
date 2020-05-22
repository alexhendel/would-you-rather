import React, { Component } from 'react';
import { connect } from 'react-redux';
import Box from '@material-ui/core/Box';
import LeaderBoardItem from './LeaderBoardItem';

class LeaderBoard extends Component {
  userList = () => {
    const { users } = this.props;
    let list = [];
    Object.keys(users).forEach(function (key) {
      list.push({
        ...users[key],
        numberOfQuestion: users[key].questions.length,
        numberOfAnswers: Object.keys(users[key].answers).length,
        score:
          users[key].questions.length + Object.keys(users[key].answers).length,
      });
    });
    list.sort((elementA, elementB) => elementB.score - elementA.score);
    return list;
  };
  render() {
    return (
      <Box display="flex" alignItems="center" flexDirection="column">
        {this.userList().map((user) => {
          return <LeaderBoardItem key={user.id} user={user} />;
        })}
      </Box>
    );
  }
}

export default connect((state) => ({
  users: state.users,
}))(LeaderBoard);
