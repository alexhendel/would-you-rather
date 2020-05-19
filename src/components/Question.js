import React from 'react';
import { useSelector } from 'react-redux';
import NoMatch from './NoMatch';
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
  const questions = useSelector((state) => state.questions);
  const users = useSelector((state) => state.users);
  const [author] = React.useState(
    whoAsked(users, questions[props.match.params.question_id])
  );
  const classes = useStyles();

  if (!questions[props.match.params.question_id]) {
    return <NoMatch />;
  }

  return (
    <Box display="flex" alignItems="center" justifyContent="center">
      <Paper className={classes.root}>
        <Grid container>
          <Grid item xs={12}>
            <Typography variant="h5">
              {'Asked by '.concat(author.name)}
            </Typography>
          </Grid>
          <Grid item xs={2}>
            <UserAvatar user={author} />
          </Grid>
          <Grid item xs={10}>
            {}
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
};

export default Question;
