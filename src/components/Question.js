import React from 'react';
import { useSelector } from 'react-redux';
import NoMatch from './NoMatch';
import QuestionResult from './QuestionResult';
import UserAvatar from './UserAvatar';
import { whoAsked } from '../utils/utils';
import { makeStyles } from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: '1em',
    padding: '1em',
    maxWidth: '550px',
  },
}));

const Question = (props) => {
  const authedUser = useSelector((state) => state.authedUser);
  const questions = useSelector((state) => state.questions);
  const users = useSelector((state) => state.users);
  const classes = useStyles();
  const [question] = React.useState(questions[props.match.params.question_id]);
  const [author] = React.useState(
    whoAsked(users, questions[props.match.params.question_id])
  );

  const alreadyVoted = (question, user) => {
    if (
      question.optionOne.votes.includes(user) ||
      question.optionTwo.votes.includes(user)
    ) {
      return true;
    }

    return false;
  };

  if (!question) {
    return <NoMatch />;
  }

  return (
    <Box display="flex" alignItems="center" justifyContent="center">
      <Paper className={classes.root} variant="outlined">
        <Grid container spacing={1}>
          <Grid item xs={1}>
            <UserAvatar user={author} />
          </Grid>
          <Grid item xs={11}>
            <Typography variant="h5">
              {'Asked by '.concat(author.name)}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            {alreadyVoted(question, authedUser) ? (
              <Grid container spacing={1}>
                <Grid item xs={12}>
                  <Typography variant="h6">Results:</Typography>
                </Grid>
                <Grid item xs={12}>
                  <QuestionResult
                    question={question}
                    optionKey="optionOne"
                    myVote={question.optionOne.votes.includes(authedUser)}
                  />
                </Grid>
                <Grid item xs={12}>
                  <QuestionResult
                    question={question}
                    optionKey="optionTwo"
                    myVote={question.optionTwo.votes.includes(authedUser)}
                  />
                </Grid>
              </Grid>
            ) : (
              <div>alreadyVoted false</div>
            )}
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
};

export default Question;
