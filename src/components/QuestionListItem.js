import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import UserAvatar from './UserAvatar';
import { makeStyles } from '@material-ui/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: '1em',
    padding: '1em',
    maxWidth: '550px',
  },
  fullWidth: {
    width: '100%',
  },
}));

const QuestionListItem = (props) => {
  const users = useSelector((state) => state.users);
  const classes = useStyles();

  const whoIsAsking = (question) => {
    let user;

    Object.keys(users).forEach((key) => {
      if (key === question.author) {
        user = users[key];
      }
    });

    return user;
  };

  return (
    <>
      <Paper className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Typography variant="h5">
              {whoIsAsking(props.question).name} asks...
            </Typography>
          </Grid>
          <Grid item xs={2}>
            <Grid container justify="center" alignItems="center">
              <UserAvatar user={whoIsAsking(props.question)} />
            </Grid>
          </Grid>
          <Grid item xs={10}>
            <Grid container spacing={1}>
              <Grid item xs={12}>
                <Typography variant="h6">Would you rather...</Typography>
                <Typography variant="body2">
                  {props.question.optionOne.text}...
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Button
                  className={classes.fullWidth}
                  variant="contained"
                  color="primary"
                  component={Link}
                  to={'/questions/'.concat(props.question.id)}
                >
                  View Poll
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </>
  );
};

QuestionListItem.propTypes = {
  question: PropTypes.object.isRequired,
};

export default QuestionListItem;
