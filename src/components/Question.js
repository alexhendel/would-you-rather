import React, { Component } from 'react';
import { connect } from 'react-redux';
import { whoAsked } from '../utils/utils';
import NoMatch from './NoMatch';
import QuestionResult from './QuestionResult';
import UserAvatar from './UserAvatar';
import QuestionVote from './QuestionVote';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import { withStyles } from '@material-ui/styles';

const styles = (theme) => ({
  root: {
    marginTop: '1em',
    padding: '1em',
    maxWidth: '550px',
  },
});

class Question extends Component {
  mapQuestion = () => {
    const { questions } = this.props;
    return questions[this.props.match.params.question_id];
  };
  mapAuthor = () => {
    const { users } = this.props;
    return whoAsked(users, this.mapQuestion());
  };
  alreadyVoted = () => {
    const { authedUser } = this.props;
    const optionOneVotes = this.mapQuestion().optionOne.votes;
    const optionTwoVotes = this.mapQuestion().optionTwo.votes;

    if (
      optionOneVotes.includes(authedUser) ||
      optionTwoVotes.includes(authedUser)
    ) {
      return true;
    } else {
      return false;
    }
  };

  render() {
    const { classes } = this.props;
    const { authedUser } = this.props;

    if (!this.mapQuestion()) {
      return <NoMatch />;
    } else {
      return (
        <Box display="flex" alignItems="center" justifyContent="center">
          <Paper className={classes.root} variant="outlined">
            <Grid container spacing={2}>
              <Grid item xs={1}>
                <UserAvatar user={this.mapAuthor()} />
              </Grid>
              <Grid item xs={11}>
                <Typography variant="h5">
                  {'Asked by '.concat(this.mapAuthor().name)}
                </Typography>
              </Grid>
              <Grid item xs={12}>
                {this.alreadyVoted() ? (
                  <Grid container spacing={1}>
                    <Grid item xs={12}>
                      <Typography variant="h6">Results:</Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <QuestionResult
                        question={this.mapQuestion()}
                        optionKey="optionOne"
                        myVote={this.mapQuestion().optionOne.votes.includes(
                          authedUser
                        )}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <QuestionResult
                        question={this.mapQuestion()}
                        optionKey="optionTwo"
                        myVote={this.mapQuestion().optionTwo.votes.includes(
                          authedUser
                        )}
                      />
                    </Grid>
                  </Grid>
                ) : (
                  <QuestionVote question={this.mapQuestion()} />
                )}
              </Grid>
            </Grid>
          </Paper>
        </Box>
      );
    }
  }
}

export default connect((state) => ({
  authedUser: state.authedUser,
  users: state.users,
  questions: state.questions,
}))(withStyles(styles, { withTheme: true })(Question));
